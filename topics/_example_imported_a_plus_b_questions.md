---
name: A + B (questions)
questions:
  - id: _example_imported_a_plus_b_questions_2719cf96
    type: select
    options: ['+', '++', '-', '--']
    answerIndex: 0
  - id: _example_imported_a_plus_b_questions_9bff0bf7
    type: select_multiple
    options: ['**', '*', '/', '%', '<']
    answerIndices: [0, 1, 2, 3]
  - id: _example_imported_a_plus_b_questions_b3fb9f7c
    type: text
    # HTMLのpattern属性同様、先頭に`^(?:`が、末尾に`)$`が含まれているかのように扱われる。
    answerPattern: 'a\s*\+\s*b'
    modelAnswer: 'a + b'
  - id: _example_imported_a_plus_b_questions_e5c0201f
    type: select
    options: ['はい', 'いいえ']
    answerIndex: [0, 1]
---

Pythonなどのプログラミング言語において加算を表す演算子を、次の選択肢から1つ選びなさい。

@[question](_example_imported_a_plus_b_questions_2719cf96)

Pythonにおいて加算演算子よりも優先順位が高い（先に演算される）演算子を、次の選択肢からすべて選びなさい。

@[question](_example_imported_a_plus_b_questions_9bff0bf7)

次のソースコードの`sum`は引数`a`と`b`の和を返す関数である。
①にあてはまる式を答えなさい。

```py
def sum(a, b):
    return ①
```

@[question](_example_imported_a_plus_b_questions_b3fb9f7c)

次の選択肢から1つ選びなさい。どちらを選択しても正解になります。

@[question](_example_imported_a_plus_b_questions_e5c0201f)
