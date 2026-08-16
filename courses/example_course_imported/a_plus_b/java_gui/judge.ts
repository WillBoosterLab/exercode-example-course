import childProcess from 'node:child_process';
import fsPromises from 'node:fs/promises';
import path from 'node:path';

import { DecisionCode } from '@exercode/problem-utils';
import type { TestCaseResult } from '@exercode/problem-utils';
import { guiCommandJudgePreset } from '@exercode/problem-utils/presets/guiCommand';
import type { GuiScreenshotFile } from '@exercode/problem-utils/presets/guiCommand';

const TEST_CASE_ID = 'manual_scoring';
const MAIN_FILE_NAME = 'Drawer.java';
const BUILD_TIMEOUT_SECONDS = 5;
const TIME_LIMIT_SECONDS = 5;
const MANUAL_REVIEW_MESSAGE = 'プログラムは実行できました。表示内容は手動採点で確認されます。';

type JudgeCaseResult = Omit<TestCaseResult, 'testCaseId'>;

await guiCommandJudgePreset(import.meta.dirname, {
  mainFilePath: MAIN_FILE_NAME,
  runTimeoutSeconds: TIME_LIMIT_SECONDS,
  readTestCases: () => Promise.resolve([{ id: TEST_CASE_ID }]),
  prepare: async ({ cwd }) => {
    const sourceFilePaths = await listJavaSourceFilePaths(cwd);
    if (sourceFilePaths.length === 0) {
      return {
        decisionCode: DecisionCode.BUILD_ERROR,
        feedbackMarkdown: 'Java ファイルが見つかりませんでした。',
      };
    }

    const buildResult = childProcess.spawnSync('javac', sourceFilePaths, {
      cwd,
      encoding: 'utf8',
      timeout: BUILD_TIMEOUT_SECONDS * 1000,
    });
    if (isErrnoException(buildResult.error) && buildResult.error.code === 'ETIMEDOUT') {
      return {
        decisionCode: DecisionCode.BUILD_TIME_LIMIT_EXCEEDED,
        stderr: buildResult.stderr.trim() || buildResult.error.message,
        feedbackMarkdown: 'コンパイルが時間内に終了しませんでした。',
      };
    }
    if (buildResult.status !== 0) {
      return {
        decisionCode: DecisionCode.BUILD_ERROR,
        stderr: buildResult.stderr.trim() || buildResult.stdout.trim(),
        feedbackMarkdown: 'コンパイルに失敗しました。',
      };
    }

    return;
  },
  test: ({ runResult }) => {
    const outputFiles = buildArtifacts(runResult.stdout, runResult.stderr, runResult.screenshots);

    if (runResult.stopReason === 'timeout') {
      return outputFiles.length > 0
        ? {
            decisionCode: DecisionCode.ACCEPTED,
            stdout: runResult.stdout,
            stderr: runResult.stderr,
            feedbackMarkdown: `${MANUAL_REVIEW_MESSAGE} 時間制限までに終了しなかったため、成果物を収集して停止しました。`,
            outputFiles,
          }
        : {
            decisionCode: DecisionCode.TIME_LIMIT_EXCEEDED,
            stdout: runResult.stdout,
            stderr: runResult.stderr,
            feedbackMarkdown: 'プログラムが時間内に終了しませんでした。',
          };
    }

    if (runResult.stopReason === 'stable_screenshot') {
      return {
        decisionCode: DecisionCode.ACCEPTED,
        stdout: runResult.stdout,
        stderr: runResult.stderr,
        feedbackMarkdown: `${MANUAL_REVIEW_MESSAGE} 成果物を収集した時点でプログラムを停止しました。`,
        outputFiles,
      };
    }

    if ((runResult.status ?? 0) !== 0) {
      return {
        decisionCode: DecisionCode.RUNTIME_ERROR,
        stdout: runResult.stdout,
        stderr: runResult.stderr,
        feedbackMarkdown: 'プログラムの実行に失敗しました。',
        outputFiles,
      };
    }

    if (outputFiles.length === 0) {
      return {
        decisionCode: DecisionCode.WRONG_ANSWER,
        stdout: runResult.stdout,
        stderr: runResult.stderr,
        feedbackMarkdown: '確認用の表示や出力を取得できませんでした。',
      };
    }

    return {
      decisionCode: DecisionCode.ACCEPTED,
      stdout: runResult.stdout,
      stderr: runResult.stderr,
      feedbackMarkdown: MANUAL_REVIEW_MESSAGE,
      outputFiles,
    };
  },
});

async function listJavaSourceFilePaths(rootDirectoryPath: string): Promise<string[]> {
  const sourceFilePaths: string[] = [];
  await collectJavaSourceFilePaths(rootDirectoryPath, rootDirectoryPath, sourceFilePaths);
  return sourceFilePaths.toSorted();
}

async function collectJavaSourceFilePaths(
  rootDirectoryPath: string,
  currentDirectoryPath: string,
  sourceFilePaths: string[]
): Promise<void> {
  const dirents = await fsPromises.readdir(currentDirectoryPath, { withFileTypes: true });
  for (const dirent of dirents) {
    const currentPath = path.join(currentDirectoryPath, dirent.name);
    if (dirent.isDirectory()) {
      await collectJavaSourceFilePaths(rootDirectoryPath, currentPath, sourceFilePaths);
      continue;
    }
    if (dirent.isFile() && path.extname(dirent.name) === '.java') {
      sourceFilePaths.push(path.relative(rootDirectoryPath, currentPath));
    }
  }
}

function buildArtifacts(
  stdout: string,
  stderr: string,
  screenshots: GuiScreenshotFile[]
): NonNullable<JudgeCaseResult['outputFiles']> {
  const outputFiles: NonNullable<JudgeCaseResult['outputFiles']> = screenshots.map((screenshot, index) => ({
    path: screenshots.length === 1 ? 'screenshot.png' : `screenshot_${index + 1}.png`,
    data: screenshot.data,
    encoding: 'base64',
  }));
  if (stdout.trim()) outputFiles.push({ path: 'stdout.txt', data: stdout });
  if (stderr.trim()) outputFiles.push({ path: 'stderr.txt', data: stderr });
  return outputFiles;
}

function isErrnoException(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error;
}
