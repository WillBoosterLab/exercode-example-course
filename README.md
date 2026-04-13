# Exercode 教材リポジトリ例

## 教材の作り方

### コース（科目）

リポジトリ内に`course.yaml`という名のファイルを作成してください。
リポジトリ内であれば任意のディレクトリに配置できます。

`course.yaml`を置いたディレクトリの名前がそのコースの ID（コース ID）になります。
コース ID は半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、**Exercode 全体で一意**の文字列です。

`course.yaml`ファイルの内容の例：

```yaml
# コースのパラメータ
name: コース名
description: コースの説明
author: 作成者名
isDiffHintDisabled: true
lectures:
  # 各レクチャー (Lecture) のパラメータ
  - id: 'addition'
    name: レッスン名
    description: レッスンの説明
```

#### コースのパラメータ

| パラメータ名                 | 型     | 説明                                           |
| ---------------------------- | ------ | ---------------------------------------------- |
| `name`                       | 文字列 | 名称                                           |
| `description`                | 文字列 | 説明                                           |
| `author`                     | 文字列 | 作成者名                                       |
| `lessons`                    | 配列   | レッスンの配列                                 |
| `isMotivationFeatureEnabled` | 真偽   | モチベーション機能を**有効**にする             |
| 他                           |        | コース・マテリアル共通の設定パラメータ（後述） |

### コース・マテリアル共通の設定パラメータ

これらのパラメータをコースとマテリアルの両方に設定すると、マテリアルの設定が優先されます。
真偽値のパラメータの初期値はすべて`false`です。

| パラメータ名                      | 型     | 説明                                                                                                                                  |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `availableLanguageIds`            | 配列   | 利用可能なプログラミング言語                                                                                                          |
| `areTestCasesHidden`              | 真偽   | コーディング問題のテストケースを**非表示**にする                                                                                      |
| `isProblemGradingResultHidden`    | 真偽   | コーディング問題の採点結果を**非表示**にする                                                                                          |
| `isAutoFormatDisabled`            | 真偽   | 自動フォーマットを**無効**にする                                                                                                      |
| `isCopyAndPasteDisabled`          | 真偽   | コードエディタでのコピー＆ペーストを**無効**にする                                                                                    |
| `isDebugHintDisabled`             | 真偽   | デバッグヒント（不正解の理由の説明）の表示を**無効**にする                                                                            |
| `isFixHintDisabled`               | 真偽   | 修正ヒント（修正方法の説明）の表示を**無効**にする                                                                                    |
| `isDiffHintDisabled`              | 真偽   | 差分ヒント（修正済みの正解コード）の表示を**無効**にする                                                                              |
| `debugHintWaitingSeconds`         | 整数   | 問題を開いてからデバッグヒント（不正解の理由の説明）が利用可能になるまでの待機時間（秒）                                              |
| `fixHintWaitingSeconds`           | 整数   | 問題を開いてから修正ヒント（修正方法の説明）が利用可能になるまでの待機時間（秒）                                                      |
| `diffHintWaitingSeconds`          | 整数   | 問題を開いてから差分ヒント（修正済みの正解コード）が利用可能になるまでの待機時間（秒）                                                |
| `submissionOpenedAt`              | 文字列 | 提出開始日時（ISO 日付文字列、例: `2025-04-28T13:10:00+09:00`）                                                                       |
| `submissionSoftClosedAt`          | 文字列 | 提出ソフト締切日時（ISO 日付文字列、例: `2025-04-28T13:10:00+09:00`）。この日時を過ぎても提出は可能ですが、遅延提出として扱われます。 |
| `submissionHardClosedAt`          | 文字列 | 提出ハード締切日時（ISO 日付文字列、例: `2025-04-28T13:10:00+09:00`）。この日時を過ぎると提出ができなくなります。                     |
| `isAutoTranslationDisabled`       | 真偽   | 自動翻訳を**無効**にする                                                                                                              |
| `isModelAnswerShownAfterDeadline` | 真偽   | 締切後にコーディング問題の模範解答を表示する。                                                                                        |
| `isVotable`                       | 真偽   | 投票機能（提出後に他の学生のソースコードを閲覧する機能）が有効か否か                                                                  |

[ISO 日付文字列](https://ja.wikipedia.org/wiki/ISO_8601)を記載する際は、 `2025-04-28T13:10:00+09:00` のようにタイムゾーン情報（`+09:00`）を末尾に追記することを強く推奨します。

### レクチャー（コマ）

`course.yaml`と同じディレクトリに、前述したレクチャーのパラメータの`id`と一致する名前のディレクトリを作成してください。
ID は半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、コース内で一意の文字列です。

#### レクチャーのパラメータ

上述の`course.yaml`の`lectures`項目の中に以下のパラメータを記載します。

| パラメータ名  | 型     | 説明                                                                       |
| ------------- | ------ | -------------------------------------------------------------------------- |
| `id`          | 文字列 | ID、コース内で一意かつ別途作成したディレクトリ名（後述）と一致していること |
| `name`        | 文字列 | 名称                                                                       |
| `description` | 文字列 | 説明                                                                       |

### マテリアル（講義資料）

レクチャーのディレクトリ内に`[マテリアルIDサフィックス].md`という名のファイルを作成してください。
マテリアル ID サフィックスは半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、レクチャー内で一意の文字列です。
[Front Matter](https://zenn.dev/adust/articles/cea61d98ea09d3)にそのマテリアルのパラメータを記述してください。

（なお、`[コースID].[レクチャーID].[マテリアルIDサフィックス]` という文字列がマテリアル ID です。
コース ID が一意で、かつ、レクチャーフォルダ内に同名のファイルを作れないため、マテリアル ID は自然と一意になります。）

`[マテリアルIDサフィックス].md`ファイルの内容の例：

```md
---
# マテリアルのパラメータ
name: マテリアル1
---

## 見出し

本文です。

- [問題](problems/__example_imported_a_plus_b)
```

#### マテリアルのパラメータ

| パラメータ名       | 型     | 説明                                                                                                                                             |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`             | 文字列 | 名称                                                                                                                                             |
| `isExamination`    | 真偽   | 試験モードを**有効**にする。有効にすると、選択肢問題の再提出が**有効**になり、ヒント機能、コード実行機能、コピー＆ペーストなどが**無効**になる。 |
| `isRealtimeSurvey` | 真偽   | リアルタイムなアンケート集計機能を**有効**にする。                                                                                               |
| 他                 |        | 上記のコース・マテリアル共通の設定パラメータ                                                                                                     |

#### 選択肢・穴埋め・記述式問題

マテリアルファイルの中で選択肢・穴埋め・記述式問題を作成することができます。
詳細は [マテリアル内に挿入可能な問題の作問ガイドライン](/howToWriteQuestions.md) をご覧ください。

### コーディング問題

リポジトリ内に`[問題ID].problem.md`という名のファイルを作成してください。
問題 ID は半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、**Exercode 全体で一意**の文字列です。
リポジトリ内であれば任意のディレクトリに配置できます。

コーディング問題の Markdown ファイルには YAML 形式のフロントマターを記述する必要があります。
フロントマターでは後述するパラメータを設定できます。

`[問題ID].problem.md`ファイルの内容の例：

```md
---
name: A + B
timeLimitMs: 2000
---

整数$A,B$が与えられます。
$A+B$の計算結果を出力してください。

（後略）
```

#### テストケースの作成

`isManualScoringRequired` が `true` で設定されていない場合、自動採点用のテストケースを作成する必要があります。

#### テストケースファイルの配置

1. `[問題ID].problem.md` と同じディレクトリに `test_cases` フォルダを作成します。

2. `test_cases` フォルダ内に、1つ以上の標準入力・標準出力ファイルのペアを作成します：
   - 標準入力ファイル：`[テストケース名].in`
   - 標準出力ファイル：`[テストケース名].out`

※1 標準入力と標準出力のペアは、`[テストケース名]` が同一かどうかで判断されます。

※2 標準入力がない場合でも、空の `[テストケース名].in` ファイルが必要です。

#### コーディング問題のディレクトリ構成

コーディング問題のディレクトリ構成には、以下の 2 種類があります。

##### `judge.ts` を含む構成（推奨）

問題ディレクトリに `judge.ts` を配置する構成です。ローカル環境でテストケースや模範解答の検証が可能になるため、こちらの構成を推奨します。`judge.ts` の詳細は後述の「テストケース・模範解答のローカル検証（judge.ts）」を参照してください。

```
addition/
├── example_course_imported_a_plus_b.problem.md
├── judge.ts
├── model_answers/
│   └── java/
│       └── Main.java
└── test_cases/
    ├── sample1.in
    ├── sample1.out
    ├── sample2.in
    ├── sample2.out
    ├── edge1.in
    ├── edge1.out
    ├── edge2.in
    ├── edge2.out
    ├── random1.in
    ├── random1.out
    ├── random2.in
    └── random2.out
```

##### `judge.ts` を含まない構成

問題ディレクトリに `judge.ts` を配置しない構成です。この場合、Exercode のサーバー側で自動的に標準入出力の比較判定が行われます。ローカルでの検証はできません。

> **注意**: この構成は 2026 年夏に廃止予定です。新規に問題を作成する場合は `judge.ts` を含む構成を使用してください。

```
addition/
├── example_course_imported_a_plus_b.problem.md
└── test_cases/
    ├── sample1.in
    ├── sample1.out
    ├── sample2.in
    ├── sample2.out
    ├── edge1.in
    ├── edge1.out
    ├── edge2.in
    ├── edge2.out
    ├── random1.in
    ├── random1.out
    ├── random2.in
    └── random2.out
```

#### コーディング問題のパラメータ

| パラメータ名                             | 型                 | 必須 | 初期値            | 説明                                                                                       |
| ---------------------------------------- | ------------------ | ---- | ----------------- | ------------------------------------------------------------------------------------------ |
| `name`                                   | 文字列             | ✓    |                   | 名称                                                                                       |
| `generalJudgeEnvironmentConfigOverrides` | オブジェクトの配列 |      |                   | ジェネラルジャッジの設定の上書き                                                           |
| `timeLimitMs`                            | 整数               |      | 2000              | 実行時間制限（ミリ秒、0 以上）                                                             |
| `memoryLimitByte`                        | 整数               |      | 256 × 1024 × 1024 | メモリ制限（バイト、0 以上）                                                               |
| `requiredRegExpsInCode`                  | 文字列の配列       |      | `[]`              | ソースコードで必須の正規表現                                                               |
| `forbiddenRegExpsInCode`                 | 文字列の配列       |      | `[]`              | ソースコードで禁止の正規表現                                                               |
| `forbiddenTextsInCode`                   | 文字列の配列       |      | `[]`              | ソースコードで禁止の文字列                                                                 |
| `canCreateFiles`                         | 真偽               |      |                   | ファイル作成を許すか否か                                                                   |
| `isAttachedFileRequired`                 | 真偽               |      |                   | 添付ファイルが必須か否か                                                                   |
| `isGui`                                  | 真偽               |      |                   | GUI プログラム専用の自動採点をするか否か。自動判定されるが、このオプションで指定もできる。 |
| `isManualScoringRequired`                | 真偽               |      |                   | 手動採点が必要か否か。手動採点が必要な問題ではヒント機能は利用できない。                   |
| `isVotable`                              | 真偽               |      |                   | 投票機能（提出後に他の学生のソースコードを閲覧する機能）が有効か否か                       |
| `isEditorDisabled`                       | 真偽               |      |                   | エディタを**無効**にする。エディタが無効な場合、ソースコードをアップロードする必要がある。 |
| `requiredEnvironmentVariables`           | 文字列の配列       |      | `[]`              | 必須の環境変数                                                                             |
| `requiredOutputFilePaths`                | 文字列の配列       |      | `[]`              | ユーザプログラムが出力しなければならないファイルのパス                                     |
| `requiredSubmissionFilePaths`            | 文字列の配列       |      | `[]`              | 提出が必須のファイル                                                                       |

正規表現を表すパラメータの文字列は、JavaScript の`new RegExp(pattern)`コンストラクタの`pattern`として入力されます。

### テストケース・模範解答のローカル検証（judge.ts）

`judge.ts` を使うと、テストケースと模範解答が正しいかをローカル環境で検証できます。
Exercode にアップロードする前に問題の不備を発見できるため、活用を推奨します。

#### 前提条件

以下のツールがインストールされている必要があります。

- [bun](https://bun.sh/)（JavaScript/TypeScript ランタイム）
- 問題の対象言語の処理系（例：Java の問題なら `javac` / `java`）

[asdf](https://asdf-vm.com/) を使っている場合は、リポジトリのルートに `.tool-versions` を作成してバージョンを指定してください。

```
bun 1.3.11
java zulu-23.32.11
```

#### セットアップ

1. リポジトリのルートに `package.json` を作成します：

```json
{
  "name": "your-course-repo",
  "private": true,
  "type": "module",
  "dependencies": {
    "@exercode/problem-utils": "^1.8.1",
    "puppeteer": "^24.0.0"
  }
}
```

> `puppeteer` はブラウザを使った判定（HTML/CSS、JavaScript のブラウザ依存問題）で必要です。
> 標準入出力のみの判定であれば `@exercode/problem-utils` だけで十分です。

2. 依存パッケージをインストールします：

```bash
bun install
```

#### judge.ts の種類

問題の種類に応じて、2 種類の `judge.ts` を使い分けます。

---

##### 1. 標準入出力で判定する問題（Java, Python など）

`test_cases/` ディレクトリの `.in`（標準入力）と `.out`（期待出力）のペアを使って、プログラムの出力を自動比較します。

**judge.ts:**

```ts
import { stdioJudgePreset } from '@exercode/problem-utils/presets/stdio';

await stdioJudgePreset(import.meta.dirname);
```

**ディレクトリ構成の例（`problems/addition/`）：**

```
addition/
├── example_course_imported_a_plus_b.problem.md
├── judge.ts
├── model_answers/
│   └── java/
│       └── Main.java
└── test_cases/
    ├── 01_small_1.in
    ├── 01_small_1.out
    ├── 01_small_2.in
    └── 01_small_2.out
```

**実行方法：**

```bash
cd problems/addition
bun run judge.ts model_answers/java
```

---

##### 2. ブラウザを使って判定する問題

HTML/CSS の構造チェックや、JavaScript のブラウザ API（DOM 操作、イベント、localStorage 等）を使う問題では、Puppeteer でブラウザを起動して判定します。

###### HTML/CSS 問題

Puppeteer でページを開き、DOM 構造やスタイルを検証するテストケースを TypeScript で記述します。

**judge.ts の例（`problems/html_css_example/`）：**

```ts
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
  // ... 他のテストケース
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
```

**ディレクトリ構成の例（`problems/html_css_example/`）：**

```
html_css_example/
├── example_course_imported_html_css.problem.md
├── judge.ts          ← Puppeteer でDOM構造を検証
└── model_answers/
    └── html/
        └── index.html
```

テストケースは `judge.ts` 内の `TEST_CASES` 配列に直接記述します（`.in` / `.out` ファイルは不要）。
検証パターンの例：

- タグの存在とテキスト内容: `page.locator('h1').waitHandle()` + `evaluate(e => e.textContent)`
- 属性の検証: `page.$$eval('img', es => es.map(e => e.getAttribute('src')))`
- CSS スタイルの検証: `page.evaluate(() => getComputedStyle(el).color)`

**実行方法：**

```bash
cd problems/html_css_example
bun run judge.ts model_answers/html
```

###### JavaScript ブラウザ依存問題

`test_cases/` の `.in` ファイルにブラウザ環境のセットアップコード（DOM 構築、`window.test` 定義等）を記述し、`.out` ファイルに `console.log` の期待出力を記述します。
judge.ts は Puppeteer でブラウザを起動し、セットアップ → ユーザーコード実行 → 出力比較を行います。

**ディレクトリ構成の例（`problems/javascript_browser_example/`）：**

```
javascript_browser_example/
├── example_course_imported_js_browser.problem.md
├── judge.ts          ← Puppeteer でブラウザ上でJSを実行し出力を比較
├── model_answers/
│   └── javascript/
│       └── main.mjs
└── test_cases/
    ├── example_1.in   ← ブラウザ環境のセットアップコード
    ├── example_1.out  ← console.log の期待出力
    ├── test_1.in
    └── test_1.out
```

`.in` ファイルの例：

```javascript
document.body.innerHTML = '<p id="message">初期テキスト</p><button id="change-btn">変更</button>';
window.test = function() {
  document.getElementById('change-btn').click();
  if (document.getElementById('message').textContent === 'こんにちは！') {
    console.log('OK');
  } else {
    console.log('NG');
  }
};
```

`.out` ファイルの例：

```
OK
```

**実行方法：**

```bash
cd problems/javascript_browser_example
bun run judge.ts model_answers/javascript
```

---

#### 実行結果の見方

各テストケースごとに結果が出力されます。

```
TEST_CASE_RESULT {"testCaseId":"01_small_1","decisionCode":2000,"exitStatus":0,"stdin":"1 2","stdout":"3\n","timeSeconds":0.31,"memoryBytes":44695552}
```

主な `decisionCode` の意味：

| コード | 意味                       |
| ------ | -------------------------- |
| 2000   | ACCEPTED（正解）           |
| 1000   | WRONG_ANSWER（不正解）     |
| 1001   | RUNTIME_ERROR              |
| 1002   | TIME_LIMIT_EXCEEDED        |
| 1100   | BUILD_ERROR                |

すべてのテストケースで `decisionCode` が `2000` であれば、テストケースと模範解答に問題がないことが確認できます。
