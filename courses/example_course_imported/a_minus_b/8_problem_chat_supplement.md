---
name: '問題Markdownにチャット専用プロンプトがある問題'
debugHintWaitingSeconds: 0
fixHintWaitingSeconds: 0
diffHintWaitingSeconds: 0
---

## 問題Markdownにチャット専用プロンプトがある問題

下の問題は、問題Markdownに `<!-- chat -->` 区切りを入れた場合の動作確認用です。

- [AI向け補足指示の確認問題](problems/example_course_imported_chat_supplement)
  - `problems/chat_supplement_example/example_course_imported_chat_supplement.problem.md` を参照のこと。

## 動作確認の観点

問題画面には「合言葉: PROBLEM_CHAT_PROMPT_OK」が表示されないことを確認してください。

そのうえで、誤ったコードを提出して「ヒントをリクエスト」を押してください。
ヒント2以降の説明文に「PROBLEM_CHAT_PROMPT_OK」が含まれていれば、問題Markdownの `<!-- chat -->` より後ろがSmart Hint向けの補足指示として使われています。

ヒント1は修正コードの差分なので、合言葉の確認対象ではありません。

確認しやすい誤答例:

```python
n = int(input())
print(n + 2)
```
