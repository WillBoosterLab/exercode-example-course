import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

import { DecisionCode, parseArgs, printTestCaseResult } from '@exercode/problem-utils';
import puppeteer from 'puppeteer';

const args = parseArgs(process.argv);
const problemDir = import.meta.dirname;
const testCasesDir = path.join(problemDir, 'test_cases');

// Find user code
const entryFile = fs.readdirSync(args.cwd).find((f) => f.endsWith('.mjs') || f.endsWith('.js'));
if (!entryFile) {
  printTestCaseResult({ testCaseId: 'setup', decisionCode: DecisionCode.WRONG_ANSWER, stderr: 'No .mjs or .js file found' });
  process.exit(0);
}
const userProgram = fs.readFileSync(path.join(args.cwd, entryFile), 'utf-8');

// Collect test case IDs
const testCaseIds = [
  ...new Set(
    fs
      .readdirSync(testCasesDir)
      .filter((f) => f.endsWith('.in'))
      .map((f) => f.replace('.in', ''))
  ),
].sort();

// Start HTTP server (needed for localStorage, location, etc.)
const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<!DOCTYPE html><html><body></body></html>');
});
server.listen(0);
const address = server.address();
const serverUrl = typeof address === 'string' ? address : `http://127.0.0.1:${(address as { port: number }).port}`;

const browser = await puppeteer.launch({
  args: process.env.CI || process.env.WB_DOCKER === '1' ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
});

for (const testCaseId of testCaseIds) {
  const input = fs.readFileSync(path.join(testCasesDir, `${testCaseId}.in`), 'utf-8');
  const expectedOutput = fs.readFileSync(path.join(testCasesDir, `${testCaseId}.out`), 'utf-8').replace(/\n$/, '');

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  page.setDefaultTimeout(5000);

  try {
    await page.goto(serverUrl, { waitUntil: 'domcontentloaded' });

    // Install console.log interceptor in page context
    await page.evaluate(() => {
      (window as any).__capturedLogs = [];
      const originalLog = console.log;
      console.log = (...logArgs: unknown[]) => {
        const formatted = logArgs
          .map((arg) => {
            if (arg === null) return 'null';
            if (arg === undefined) return 'undefined';
            if (arg instanceof Node) return 'JSHandle@node';
            if (Array.isArray(arg)) return '[' + arg.join(', ') + ']';
            return String(arg);
          })
          .join(' ');
        (window as any).__capturedLogs.push(formatted);
        originalLog.apply(console, logArgs);
      };
    });

    // Clear localStorage for each test case
    await page.evaluate(() => localStorage.clear());

    // Run setup code from .in file
    if (input.trim()) {
      await page.evaluate(input);
    }

    // Run user program
    const autoCallTest = input.includes('window.test =') && !userProgram.includes('test()') ? 'test?.();' : '';
    const funcNames = [...userProgram.matchAll(/^function\s+(\w+)\s*\(/gm)].map((m) => m[1]);
    const funcExports = funcNames.map((name) => `window.${name} = ${name};`).join('\n');

    await page.evaluate(`(async () => {
window.initializeTest?.();
${userProgram}
${funcExports}
${autoCallTest}
await window.verifyDom?.();
})()`);

    // Wait for async operations if setTimeout/setInterval is used
    if (/\b(?:setInterval|setTimeout)\b/.test(userProgram) || /\b(?:setInterval|setTimeout)\b/.test(input)) {
      let prevLength = -1;
      let currentLength = 0;
      while (prevLength !== currentLength) {
        prevLength = currentLength;
        await new Promise((r) => setTimeout(r, 1000));
        currentLength = await page.evaluate(() => (window as any).__capturedLogs.length);
      }
    }

    // Wait for any pending promises
    await page.evaluate(() => new Promise((r) => setTimeout(r, 100)));

    const actualOutput = (await page.evaluate(() => (window as any).__capturedLogs.join('\n'))).replace(/\n$/, '');

    if (actualOutput === expectedOutput) {
      printTestCaseResult({ testCaseId, decisionCode: DecisionCode.ACCEPTED, stdout: actualOutput });
    } else {
      printTestCaseResult({
        testCaseId,
        decisionCode: DecisionCode.WRONG_ANSWER,
        stdout: actualOutput,
        stderr: `Expected:\n${expectedOutput}\n\nActual:\n${actualOutput}`,
      });
      await page.close();
      break;
    }
  } catch (error) {
    printTestCaseResult({
      testCaseId,
      decisionCode: DecisionCode.RUNTIME_ERROR,
      stderr: error instanceof Error ? error.message : String(error),
    });
    await page.close();
    break;
  }

  await page.close();
}

await browser.close();
server.close();
