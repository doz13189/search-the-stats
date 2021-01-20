# コンパイル後の Typescript の列挙型( Enums )のコードを見てみる（記事未完成）

## Enums とは

> 列挙型は、関連する値の集合を編成する方法です。  
https://typescript-jp.gitbook.io/deep-dive/type-system/enums

```typescript
enum People {
  a,
  b,
  c
}

console.log(People.a)
// 出力結果: 0

console.log(People[0])
// 出力結果: a
```

他の多くのプログラミング言語(C/C#/Java)はenumデータ型を持っているらしいですが、使ったことないので知りませんでした。

Javascript で Enums 型が欲しいときは...

```typescript
const sampleArray = [
  'a',
  'b',
  'c'
]

const a = Object.assign(...Object.entries(sampleArray).map(value => ({ [value[1]] : value[0] })), {})
const b = Object.assign(...Object.entries(sampleArray).map(value => ({ [value[0]] : value[1] })), {})
console.log(a)
console.log(b)
console.log(a.a)
console.log(b[0])
```

```typescript
{ '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }
```