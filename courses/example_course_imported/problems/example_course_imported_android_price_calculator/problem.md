---
name: 商品の合計金額
timeLimitMs: 120000
canCreateFiles: true
requiredSubmissionFilePaths:
  - PriceCalculator.kt
---

## 問題文

Androidアプリで商品の合計金額を計算する関数を作成します。

`PriceCalculator.kt`にある`calculateTotal`関数を完成させてください。
この関数は、商品の単価`unitPrice`と個数`quantity`を受け取り、合計金額を返します。

## 制約

- $0 \leq unitPrice \leq 10^6$
- $0 \leq quantity \leq 100$
- 引数と戻り値は全て`Int`型である。
- 関数名、引数、戻り値の型を変更してはいけない。

---

## 入力

標準入力は使用しません。
採点時にAndroidプロジェクトのローカルユニットテストから関数を呼び出します。

## 出力

標準出力は使用しません。
全てのユニットテストに成功すると正解です。

---

## サンプルケース

`calculateTotal(120, 3)`は`360`を返します。
