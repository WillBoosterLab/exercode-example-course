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
  - C
  - C++
  - C#
  - Java
  - Python
  - Ruby
  - TypeScript
answerIndex: 0,1,2,3,4,5,6
isResubmittable: true
```

```yaml
id: q2
type: select_multiple
question: |
  Power BIの学習を始めようと思った理由は何ですか？
options:
  - 現在の仕事で必要になったため(例：上司や同僚から勧められた、担当業務で必須となった)
  - 業務の効率化・自動化のため(例：手作業のレポート作成をなくしたい、データ集計を楽にしたい)
  - データ分析・可視化のスキルを身につけたいため(例：データに基づいた意思決定がしたい、専門スキルを習得したい)
  - 転職やキャリアアップのため(例：市場価値の高いスキルを身につけたい、より良い条件の職に就きたい)
  - 個人的な興味・関心のため(例：データ活用に興味があった、趣味や自己学習の一環として)
  - その他
answerIndices:
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
isResubmittable: true
```
