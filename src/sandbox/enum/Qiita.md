# コンパイルされた Typescript の列挙型( Enums )のコードを見てみる

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

Object で言う key を引数に value を取得したいとき、逆に value を引数に key を取得したい時はちょくちょくあります。上記のコードだとシンプルすぎますが、例えば、カレンダーを Enum で持つ場合はけっこう実用的かと思います。

```typescript
enum Month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

console.log(Month.May)
// 出力結果: 5

console.log(Month[5])
// 出力結果: May
```


## Javascript で Enums 型が欲しいときは...

言うてしまえば、key と value どちらも重複して持つ Object があれば完全に同じことができます。

```javascript
const sampleObj = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  a: 0,
  b: 1,
  c: 2
}
```

key と value が 3つとかなら、そのまま書いてもいいですが、わりと自分は Array を元に Object を作ったりします。

```javascript
const sampleArray = [
  'a',
  'b',
  'c'
]

const sampleObj = Object.assign(
  ...Object.entries(sampleArray).map(value => ({ [value[1]] : value[0] })),
  ...Object.entries(sampleArray).map(value => ({ [value[0]] : value[1] }))
)

console.log(sampleObj)
// 出力結果: { '0': 'a', '1': 'b', '2': 'c', a: '0', b: '1', c: '2' }

console.log(sampleObj.a)
// 出力結果: 0

console.log(sampleObj[0])
// 出力結果: a
```

## Enum も結局は同じことをしている

以下のように定義した Enum をコンパイルして、Javascript のコードにすると結局は自分がやっていることと同じであることがわかります。ただ、Object の生成コードは違うねん。

```typescript
// コンパイル前
enum People {
  a,
  b,
  c
}
```

```javascript
// コンパイル後
var People;
(function (People) {
    People[People["a"] = 0] = "a";
    People[People["b"] = 1] = "b";
    People[People["c"] = 2] = "c";
})(People || (People = {}));

console.log(People);
// 出力結果: { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }
```

出力結果を見れば分かる通り、key と value どちらも重複して持つ Object が出力されている。


## といいつつ、コンパイル後のコード意味わからん

Enum のコンパイル後のコードの出力結果を見たところで、目的の8割達成やねんけど、どうにもコンパイル後のコードの意味がわからんので、解明だけしておきます。


```javascript
var People;
(function (People) {
    People[People["a"] = 0] = "a";
    People[People["b"] = 1] = "b";
    People[People["c"] = 2] = "c";
})(People || (People = {}));
```

関数の中身から見ていくと、`a` を key にして、`0` という value の Object を作っています。

```javascript
People["a"] = 0
// 出力結果 : 0
```

代入演算子( `=` ) は、右から解釈されるので、出力対象は `People["a"]` となり、結果は `0` が出力される。  

解釈される順序は以下を参照。  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

次を見てみると、`People["a"] = 0` は `0` を返しているから、解釈は以下になります。

```javascript
// People[People["a"] = 0] = "a";
People[0] = "a";
```

ここまで来ると、以下のコードでどんな Object が生成されているかがわかります。

```javascript
People[People["a"] = 0] = "a";
People[People["b"] = 1] = "b";
People[People["c"] = 2] = "c";
// 出力結果: { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }
```

あんまり自分は使わないが、以下は即時実行関数として実行されている。  
https://developer.mozilla.org/ja/docs/Glossary/IIFE

```javascript
// (function () {
//   ...省略
// })();
(function (People) {
    People[People["a"] = 0] = "a";
    People[People["b"] = 1] = "b";
    People[People["c"] = 2] = "c";
})(People || (People = {}));
```

以下の部分は、即時実行関数にわたす引数として `People` と `People = {}` は定義されています。そして、`People` と `People = {}` は OR 条件(`||`)で評価されます。

```javascript
})(People || (People = {}));
```

`People` と `People = {}`がそれぞれどのように評価されているか、を見ていくねん。  
`(People || (People = {}))` に渡される `People` は、即時実行関数の前に定義されている `var People;` になります。定義されて値が設定されていない変数は、undefined なので、false として扱われます。(`Boolean(undefined)` を実行すると実際に確認可能です)

以下は Javascirpt が false として扱う一覧で、undefined の他に 0 とかがあります。
https://developer.mozilla.org/ja/docs/Glossary/Falsy

`(People = {})` は true として扱われます。(`Boolean({})` を実行すると実際に確認可能です)  
外側の`()`は、Object を返す場合の構文で、評価の対象ではないので、実際に評価されるのは `People = {}` になります。空の Object は true として扱われます。  
https://developer.mozilla.org/ja/docs/Glossary/Truthy

```javascript
var People;
(function (People) {
  ...省略
})(People || (People = {}));
```

これで `function (People)` の `People` に渡される値がわかりました。  
評価としては以下のように解釈されているため、true である右側の引数が `function (People)` に渡されています。ってことは、`People = {}` ってことやなー。

```javascript
var People;
(function (People) {
  ...省略
})(false || true);
```

これで全ての要素を分解しきったので、以下のコードが腹に落ちました。

```javascript
var People;
(function (People) {
    People[People["a"] = 0] = "a";
    People[People["b"] = 1] = "b";
    People[People["c"] = 2] = "c";
})(People || (People = {}));
```

## 結局わからないこと

(その1) コンパイルした後のコードってこれでよくないのか？？  
`People ||` は、`var People`である限り、false 扱いやから、いる意味がよくわからない。  

```javascript
var People;
(function (People) {
    People[People["a"] = 0] = "a";
    People[People["b"] = 1] = "b";
    People[People["c"] = 2] = "c";
})(People = {});
```

(その2) コンパイルした後のコードってこれでよくないのか？？  
即時実行関数で実行する必要あるのか？  

```javascript
var People;
People[People["a"] = 0] = "a";
People[People["b"] = 1] = "b";
People[People["c"] = 2] = "c";
```

Typescript 本体のコードとか色々と見たらわかるのかもしれないから、見てみよう。

## まとめ

以上、終わり！
