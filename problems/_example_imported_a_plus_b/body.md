---
name: A + B
timeLimitMs: 2_000
testCases:
  - id: small_1
    name: 小さい整数 1
  - id: small_2
    name: 小さい整数 2
  - id: large_1
    name: 大きい整数 1
  - id: large_2
    name: 大きい整数 2
  - id: edge_1
    name: エッジケース 1
  - id: edge_2
    name: エッジケース 2
  - id: edge_3
    name: エッジケース 3
  - id: edge_4
    name: エッジケース 4
---

## 問題文

整数$A,B$が与えられます。
$A+B$の計算結果を出力してください。

## 入力データの特徴

- $0 \leq A,B \leq 10^9$
- 入力は全て整数である。

---

## 入力

入力は以下の形式で標準入力から与えられる。

```
$A$ $B$
```

## 出力

$A+B$を出力せよ。

---

## 入力例1

```
1 1
```

## 出力例1

```
2
```

---

## 入力例2

```
2 3
```

## 出力例2

```
5
```
