# 

## Testable

以下のコーディングだと`<Error>`単体でテストがしづらい。  
Error.vue のテストとして以下のテストケースを確認したい。
- (テストケース) HTTP リクエストを API に送ったときに、ステータス 200 以外のレスポンスを受け取る
- (テストケース結果) "Error" の文字列が描画される

```html
<!-- Parent.vue -->
<template>
  <button>request</button>
  <Error v-if="players.error.value"/>
</div>
</template>
```

Parent.vue のユニットテストでは、スタブを使っているため、子コンポーネントである`<Error>`は描画されないため、レスポンスのステータスが 200 以外であっても、"Error" は表示されない。

これは Error.vue の描画の条件分岐を Parent.vue で実行しているため、Error.vue の単体テストが Error.vue のみで閉じない。

```html
<!-- Parent.vue -->
<template>
  <button>request</button>
  <Error :loading="players.error.value"/>
</div>
</template>
```

`props` として子コンポーネントに値を渡すことで、Error.vue の単体テストを Error.vue のみで実行することができる。


