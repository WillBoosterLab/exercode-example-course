---
name: 図形の描画（Java Swing）
isGui: true
isManualScoringRequired: true
---

## 問題文

好きな図形を描画するプログラムを作成せよ。

### 作問者向けの注意事項

手動採点する問題において、自動採点を無効化したい場合は、 `test_cases` ディレクトリを削除してください。
`test_cases` ディレクトリがあると、手動採点の問題でも、自動採点の結果が表示されます。

GUIプログラム向けの採点モードを有効にするためには、問題のFrontmatterに `isGui: true` を記載するか、
もしくは、模範解答プログラムに `JFrame` または `javax.swing` というキーワードを含めるようにしてください。