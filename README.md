# Exercode 教材リポジトリ例

## 教材の作り方

### コース（Course）

リポジトリ内に`course.yaml`という名のファイルを作成してください。
リポジトリ内であれば任意のディレクトリに配置できます。

`course.yaml`を置いたディレクトリの名前がそのコースのIDになります。
IDは半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、**Exercode全体で一意**の文字列です。

`course.yaml`ファイルの内容の例：

```yaml
# コースのパラメータ
name: コース名
description: コースの説明
isDiffHintDisabled: true
lectures:
  # 各レクチャー (Lecture) のパラメータ
  - id: '01'
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

`course.yaml`と同じディレクトリに、前述のパラメータの`id`と一致する名前のディレクトリを作成してください。
IDは半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、コース内で一意の文字列です。

#### レクチャーのパラメータ

上述の`course.yaml`の`lectures`項目の中に以下のパラメータを記載します。

| パラメータ名  | 型     | 説明                                                                       |
| ------------- | ------ | -------------------------------------------------------------------------- |
| `id`          | 文字列 | ID、コース内で一意かつ別途作成したディレクトリ名（後述）と一致していること |
| `name`        | 文字列 | 名称                                                                       |
| `description` | 文字列 | 説明                                                                       |

### マテリアル（Material）

レクチャーのディレクトリ内に`[id].md`という名のファイルを作成してください。
IDは半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、レクチャー内で一意の文字列です。
[Fromt Matter](https://zenn.dev/adust/articles/cea61d98ea09d3)にそのマテリアルのパラメータを記述してください。

`[id].md`ファイルの内容の例：

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

| パラメータ名                 | 型     | 説明                                                                                                                                 |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `availableLanguageIds`       | 配列   | 利用可能なプログラミング言語                                                                                                         |
| `areTestCasesHidden`         | 真偽   | テストケースを**非表示**にする                                                                                                       |
| `isGradingResultHidden`      | 真偽   | 採点結果を**非表示**にする                                                                                                           |
| `isCodeiumEnabled`           | 真偽   | Codeium を**有効**にする                                                                                                             |
| `isAutoFormatDisabled`       | 真偽   | 自動フォーマットを**無効**にする                                                                                                     |
| `isCopyAndPasteDisabled`     | 真偽   | コードエディタでのコピー＆ペーストを**無効**にする                                                                                   |
| `isDebugHintDisabled`        | 真偽   | デバッグヒントを**無効**にする                                                                                                       |
| `isFixHintDisabled`          | 真偽   | 修正ヒントを**無効**にする                                                                                                           |
| `isDiffHintDisabled`         | 真偽   | 差分ヒントを**無効**にする                                                                                                           |
| `debugHintWaitingSeconds`    | 整数   | 問題を開いてからデバッグヒントが利用可能になるまでの待機時間（秒）                                                                   |
| `fixHintWaitingSeconds`      | 整数   | 問題を開いてから修正ヒントが利用可能になるまでの待機時間（秒）                                                                       |
| `diffHintWaitingSeconds`     | 整数   | 問題を開いてから差分ヒントが利用可能になるまでの待機時間（秒）                                                                       |
| `submissionOpenedAt`         | 文字列 | 提出開始日時（ISO 日付文字列）                                                                                                       |
| `submissionSoftClosedAt`     | 文字列 | 提出ソフト締切日時（ISO 日付文字列、例: `2025-04-03T08:27:50.527Z`）。この日時を過ぎても提出は可能ですが、遅延提出として扱われます。 |
| `submissionHardClosedAt`     | 文字列 | 提出ハード締切日時（ISO 日付文字列、例: `2025-04-03T08:27:50.527Z`）。この日時を過ぎると提出ができなくなります。                     |
| `isAutoTranslationDisabled`  | 真偽   | 自動翻訳を**無効**にする                                                                                                             |
| `isMotivationFeatureEnabled` | 真偽   | モチベーション機能を**有効**にする                                                                                                   |

### 問題

リポジトリ内に`[id].problem.md`という名のファイルを作成してください。
IDは半角小文字アルファベット、数字、アンダースコア、ハイフンからなる、**Exercode全体で一意**の文字列です。
リポジトリ内であれば任意のディレクトリに配置できます。
