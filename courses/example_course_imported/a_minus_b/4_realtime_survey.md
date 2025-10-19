---
name: 'リアルタイムアンケート'
isRealtimeSurvey: true
---

リアルタイムアンケート機能を有効にしたマテリアルの例です。

### 選択肢問題

```yaml question
id: q1
type: select
question: |
  好きなプログラミング言語を一つ選んでください。
options:
  - C++
  - Java
  - Python
  - TypeScript
answerIndex: 0,1,2,3
isResubmittable: true
```
