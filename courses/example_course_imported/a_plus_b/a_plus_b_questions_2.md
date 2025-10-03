---
name: 「A + B（選択・穴埋め問題のみ）」と完全に同じ中身の教材
---

選択肢問題や穴埋め問題を作成するには、`yaml` のコードブロックを作ります。
その際、`yaml`に空白を入れて`question`と書いて、`yaml question`とします。
なお、各問題には各マテリアル（資料）ファイル内でユニークなIDが必要です。

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

```yaml question
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
```

````yaml question
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
````

```yaml question
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
```

注意点：

- `select` 型の問題では、`answerIndex` は単一の数値または数値の配列で指定します。
- `select_multiple` 型の問題では、`answerIndices` は数値の配列で指定します。
- `text` 型の問題では、`answerPattern` は必須で、正解の正規表現パターンを指定します。
- `text` 型の問題では、`modelAnswer` はオプションで、模範解答を提供します。

```yaml question
id: web_mechanism_trace_q1
type: select
question: |
  ユーザーがブラウザのアドレスバーに http://example.com/news と入力してEnterキーを押しました。ブラウザが最初に行うと考えられる動作はどれですか？
options:
  - '`example.com` のWebサーバーに直接HTTPリクエストを送る'
  - 'DNSサーバーに `example.com` のIPアドレスを問い合わせる'
  - 'ローカルのキャッシュから `/news` のHTMLファイルを探す'
  - 'ユーザーにパスワードの入力を求める'
answerIndex: 1
```