# Exercode 教材リポジトリ例

## 教材の作り方

### コース（Course）

リポジトリ内に`course.yaml`という名のファイルを作成してください。
リポジトリ内であれば任意のディレクトリに配置できます。

`course.yaml`を置いたディレクトリの名前がそのコースの ID（コース ID）になります。
コース ID は半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、**Exercode 全体で一意**の文字列です。

`course.yaml`ファイルの内容の例：

```yaml
# コースのパラメータ
name: コース名
description: コースの説明
isDiffHintDisabled: true
lectures:
  # 各レクチャー (Lecture) のパラメータ
  - id: 'addition'
    name: レッスン名
    description: レッスンの説明
```

#### コースのパラメータ

| パラメータ名  | 型     | 説明                                           |
| ------------- | ------ | ---------------------------------------------- |
| `name`        | 文字列 | 名称                                           |
| `description` | 文字列 | 説明                                           |
| `lessons`     | 配列   | レッスンの配列                                 |
| 他            |        | コース・マテリアル共通の設定パラメータ（後述） |

### レクチャー（Lecture）

`course.yaml`と同じディレクトリに、前述したレクチャーのパラメータの`id`と一致する名前のディレクトリを作成してください。
ID は半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、コース内で一意の文字列です。

#### レクチャーのパラメータ

上述の`course.yaml`の`lectures`項目の中に以下のパラメータを記載します。

| パラメータ名  | 型     | 説明                                                                       |
| ------------- | ------ | -------------------------------------------------------------------------- |
| `id`          | 文字列 | ID、コース内で一意かつ別途作成したディレクトリ名（後述）と一致していること |
| `name`        | 文字列 | 名称                                                                       |
| `description` | 文字列 | 説明                                                                       |

### マテリアル（Material）

レクチャーのディレクトリ内に`[マテリアルIDサフィックス].md`という名のファイルを作成してください。
マテリアル ID サフィックスは半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、レクチャー内で一意の文字列です。
[Fromt Matter](https://zenn.dev/adust/articles/cea61d98ea09d3)にそのマテリアルのパラメータを記述してください。

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

| パラメータ名 | 型     | 説明                                           |
| ------------ | ------ | ---------------------------------------------- |
| `name`       | 文字列 | 名称                                           |
| 他           |        | コース・マテリアル共通の設定パラメータ（後述） |

### コース・マテリアル共通の設定パラメータ

これらのパラメータをコースとマテリアルの両方に設定すると、マテリアルの設定が優先されます。
真偽値のパラメータの初期値はすべて`false`です。

| パラメータ名                   | 型     | 説明                                                                                                                                             |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `availableLanguageIds`         | 配列   | 利用可能なプログラミング言語                                                                                                                     |
| `areTestCasesHidden`           | 真偽   | コーディング問題のテストケースを**非表示**にする                                                                                                 |
| `isProblemGradingResultHidden` | 真偽   | コーディング問題の採点結果を**非表示**にする                                                                                                     |
| `isCodeiumEnabled`             | 真偽   | Codeium を**有効**にする                                                                                                                         |
| `isAutoFormatDisabled`         | 真偽   | 自動フォーマットを**無効**にする                                                                                                                 |
| `isCopyAndPasteDisabled`       | 真偽   | コードエディタでのコピー＆ペーストを**無効**にする                                                                                               |
| `isDebugHintDisabled`          | 真偽   | デバッグヒントを**無効**にする                                                                                                                   |
| `isFixHintDisabled`            | 真偽   | 修正ヒントを**無効**にする                                                                                                                       |
| `isDiffHintDisabled`           | 真偽   | 差分ヒントを**無効**にする                                                                                                                       |
| `debugHintWaitingSeconds`      | 整数   | 問題を開いてからデバッグヒント（不正解の理由の説明）が利用可能になるまでの待機時間（秒）                                                         |
| `fixHintWaitingSeconds`        | 整数   | 問題を開いてから修正ヒント（修正方法の説明）が利用可能になるまでの待機時間（秒）                                                                 |
| `diffHintWaitingSeconds`       | 整数   | 問題を開いてから差分ヒント（修正済みの正解コード）が利用可能になるまでの待機時間（秒）                                                           |
| `submissionOpenedAt`           | 文字列 | 提出開始日時（ISO 日付文字列、例: `2025-04-28T13:10:00+09:00`）                                                                                  |
| `submissionSoftClosedAt`       | 文字列 | 提出ソフト締切日時（ISO 日付文字列、例: `2025-04-28T13:10:00+09:00`）。この日時を過ぎても提出は可能ですが、遅延提出として扱われます。            |
| `submissionHardClosedAt`       | 文字列 | 提出ハード締切日時（ISO 日付文字列、例: `2025-04-28T13:10:00+09:00`）。この日時を過ぎると提出ができなくなります。                                |
| `isAutoTranslationDisabled`    | 真偽   | 自動翻訳を**無効**にする                                                                                                                         |
| `isExamination`                | 真偽   | 試験モードを**有効**にする。有効にすると、選択肢問題の再提出が**有効**になり、ヒント機能、コード実行機能、コピー＆ペーストなどが**無効**になる。 |
| `isMotivationFeatureEnabled`   | 真偽   | モチベーション機能を**有効**にする                                                                                                               |

[ISO 日付文字列](https://ja.wikipedia.org/wiki/ISO_8601)を記載する際は、 `2025-04-28T13:10:00+09:00` のようにタイムゾーン情報（`+09:00`）を末尾に追記することを強く推奨します。

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

#### コーディング問題のパラメータ

| パラメータ名             | 型           | 必須 | 初期値            | 説明                           |
| ------------------------ | ------------ | ---- | ----------------- | ------------------------------ |
| `name`                   | 文字列       | ✓    |                   | 名称                           |
| `timeLimitMs`            | 整数         |      | 2000              | 実行時間制限（ミリ秒、0 以上） |
| `memoryLimitByte`        | 整数         |      | 256 × 1024 × 1024 | メモリ制限（バイト、0 以上）   |
| `requiredRegExpsInCode`  | 文字列の配列 |      | `[]`              | ソースコードで必須の正規表現   |
| `forbiddenRegExpsInCode` | 文字列の配列 |      | `[]`              | ソースコードで禁止の正規表現   |
| `forbiddenTextsInCode`   | 文字列の配列 |      | `[]`              | ソースコードで禁止の文字列     |

正規表現を表すパラメータの文字列は、JavaScript の`new RegExp(pattern)`コンストラクタの`pattern`として入力されます。

### 選択肢・穴埋め問題

マテリアルファイルの中で選択肢・穴埋め問題を作成することができます。
詳細は [マテリアルファイルの例](courses/example_course_imported/a_plus_b/a_plus_b_questions.md) をご覧ください。
