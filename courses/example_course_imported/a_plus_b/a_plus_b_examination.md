---
name: '小テスト'
isExamination: true
isProblemGradingResultHidden: false
submissionOpenedAt: '2025-07-01T13:00:00+09:00'
submissionSoftClosedAt: '2026-06-30T13:00:00+09:00'
---

この教材は、2025年07月01日13時から閲覧できるようになり、2026年06月30日13時に閲覧できなくなります。


### 選択肢問題

```yaml question
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
```

````yaml question
id: q2
type: select
question: |
  次のJavaScriptプログラムを実行した際の出力結果として正しいものを選びなさい。

  ```javascript no-execute
  const list = [10, 20, 30];
  console.log(list[1]);
  ```
options:
  - '10'
  - '20'
  - '30'
  - 'undefined'
answerIndex: 1
explanation: >-
    JavaScriptでは、配列のインデックスは0から始まるため、`list[1]`は2番目の要素である20を指します。
````

### コーディング問題

`a_plus_b_general.md` と同じコーディング問題を参照してみる。

- [CUI問題](problems/example_course_imported_a_plus_b)
- [GUI問題](problems/example_course_imported_java_gui)
