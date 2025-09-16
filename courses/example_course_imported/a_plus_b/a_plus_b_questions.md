---
name: A + B（選択・穴埋め問題のみ）
---

選択肢問題や穴埋め問題を作成するには、`yaml` のコードブロックを作ります。
その際、`yaml`に空白を入れて`question`と書いて、`yaml question`とします。
なお、各問題には各マテリアル（資料）ファイル内でユニークなIDが必要です。
詳細は [マテリアル内に挿入可能な問題の作問ガイドライン](/howToWriteQuestions.md) をご覧ください。

~~~yaml question
id: q1
type: select
question: |
  Pythonなどのプログラミング言語において加算を表す演算子を、次の選択肢から1つ選びなさい。
options:
  - +
  - ++
  - '-'
  - --
answerIndex: 0
~~~

~~~yaml question
id: q2
type: select_multiple
question: |
  Pythonにおいて加算演算子よりも優先順位が高い（先に演算される）演算子を、次の選択肢からすべて選びなさい。
options:
  - '**'
  - '*'
  - /
  - '%'
  - <
answerIndices:
  - 0
  - 1
  - 2
  - 3
~~~

~~~yaml question
id: q3
type: text
question: |
  次のソースコードの`sum`は引数`a`と`b`の和を返す関数である。
  ①にあてはまる式を答えなさい。

  ```py
  def sum(a, b):
      return ①
  ```
answerPattern: a\s*\+\s*b
modelAnswer: a + b
~~~

~~~yaml question
id: q4
type: select
question: |
  次の選択肢から1つ選びなさい。どちらを選択しても正解になります。
options:
  - はい
  - いいえ
answerIndex:
  - 0
  - 1
~~~
