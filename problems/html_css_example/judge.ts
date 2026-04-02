import { DecisionCode, parseArgs, printTestCaseResult, startHttpServer } from '@exercode/problem-utils';
import type { TestCaseResult } from '@exercode/problem-utils';
import assert from 'node:assert';
import puppeteer from 'puppeteer';
import type { Page } from 'puppeteer';

const TEST_CASES: readonly [string, (page: Page) => Promise<Omit<TestCaseResult, 'testCaseId'>>][] = [
  [
    '01_h1',
    async (page) => {
      try {
        const h1Handle = await page.locator('h1').waitHandle();
        const h1Text = await h1Handle.evaluate((e) => e.textContent.trim());
        assert.strictEqual(h1Text, '自己紹介');
      } catch (error) {
        return {
          decisionCode: DecisionCode.WRONG_ANSWER,
          stderr: error instanceof Error ? error.message : String(error),
          feedbackMarkdown: '`h1`タグによる見出し`自己紹介`が見つかりません。',
        };
      }
      return { decisionCode: DecisionCode.ACCEPTED };
    },
  ],
  [
    '02_p',
    async (page) => {
      try {
        const pHandle = await page.locator('p').waitHandle();
        const pText = await pHandle.evaluate((e) => e.textContent.trim());
        assert.strictEqual(pText, '私はWebの勉強をしています。');
      } catch (error) {
        return {
          decisionCode: DecisionCode.WRONG_ANSWER,
          stderr: error instanceof Error ? error.message : String(error),
          feedbackMarkdown: '`p`タグによるテキスト`私はWebの勉強をしています。`が見つかりません。',
        };
      }
      return { decisionCode: DecisionCode.ACCEPTED };
    },
  ],
  [
    '03_ul_li',
    async (page) => {
      const liTexts = await page.$$eval('ul > li', (es) => es.map((e) => e.textContent?.trim() ?? ''));
      const expected = ['HTML', 'CSS', 'JavaScript'];

      if (liTexts.length !== expected.length) {
        return {
          decisionCode: DecisionCode.WRONG_ANSWER,
          feedbackMarkdown: `\`li\`タグの件数が一致しません。\n${expected.length}件必要ですが、${liTexts.length}件見つかりました。`,
        };
      }

      for (const [i, text] of expected.entries()) {
        if (liTexts[i] !== text) {
          return {
            decisionCode: DecisionCode.WRONG_ANSWER,
            feedbackMarkdown: `${i + 1}番目の\`li\`タグの内容が一致しません。\n\`${text}\`が期待されていますが、\`${liTexts[i]}\`が見つかりました。`,
          };
        }
      }

      return { decisionCode: DecisionCode.ACCEPTED };
    },
  ],
];

const args = parseArgs(process.argv);
await using server = startHttpServer(args.cwd);

const browser = await puppeteer.launch({
  args: process.env.CI || process.env.WB_DOCKER === '1' ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
});
const page = await browser.newPage();
page.setDefaultTimeout(1000);

await page.goto(server.url, { waitUntil: 'domcontentloaded' });

for (const [testCaseId, test] of TEST_CASES) {
  const result = await test(page);
  printTestCaseResult({ testCaseId, ...result });
  if (result.decisionCode !== DecisionCode.ACCEPTED) break;
}

await browser.close();
