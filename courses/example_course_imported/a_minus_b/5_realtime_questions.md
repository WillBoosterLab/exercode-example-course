---
name: 'リアルタイム問題'
isRealtimeSurvey: true
---

リアルタイムで回答する設問です。

### 選択肢問題

```yaml question
id: q1
type: select_multiple
question: |
  基盤モデルに基づくシステムのアーキテクチャ体系について誤っているものはどれか？
options:
  - A. 文脈内学習やファインチューニング、知識蒸留によりモデルを適応させられる
  - B. 基盤モデルと既存モデルは併用できない
  - C. 責任あるAIに向けたガードレールとしてプロンプトの拒否や修正、自動生成がある
  - D. 検証の方法は、人による検証とAIによる検証のいずれかである
answerIndices:
  - 1
  - 3
isResubmittable: true
```

```yaml question
id: q2
type: select
question: |
  パターンの説明として正しいものはどれか？
options:
  - A. パターンは、限られた同一の立場の中で用いる
  - B. パターンにより解決を再利用できるが、問題は再利用できない
  - C. デザインパターンは、設計上の繰り返される問題と解決をまとめている
  - D. アーキテクチャパターンは、デザインパターンに比べてより具体的である
answerIndex: 2
isResubmittable: true
```

```yaml question
id: q3
type: select
question: |
  機械学習デザインパターンの説明として正しいものはどれか？
options:
  - A. 特徴量ハッシュパターンにより、様々なデータ表現を連結できる
  - B. 埋め込みパターンにより、関係性の近さを保持したままデータを低次元の空間にマッピングできる
  - C. 特徴量クロスパターンにより、カテゴリ型特徴量の多くの値を少数のまとまりへ集約できる
  - D. マルチモーダル入力パターンにより、複数の入力値の間の関係・組み合わせを考慮した特徴量を扱える
answerIndex: 1
isResubmittable: true
```

```yaml question
id: q4
type: select
question: |
  Attribute-Driven Design (ADD)の説明として誤っているものはどれか？
options:
  - A. 要求を優先順位付けし、優先順位が一定以上のものをすべて一度に扱う
  - B. 参照アーキテクチャやデザインパターン等の過去の優れた知見を参照する
  - C. イテレーションごとにアーキテクチャを段階的に洗練化する
  - D. アーキテクチャドライバには機能要求や品質要求、制約、関心事が含まれる
answerIndex: 0
isResubmittable: true
```
