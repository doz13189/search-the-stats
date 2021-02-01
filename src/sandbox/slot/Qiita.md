# Web Components の Slots Proposal から見る Vue の Slot

## Vue の Slot って何のためにあるのか？
もう既に Slot を使いこなしている方は即答できる疑問かとは思うのですが、私は中途半端に Vue を使ってきたこともあり、Slot を特に使用していませんでした。
Vue 3 のキャッチアップをするついでに Vue のおさらいを兼ねて公式ドキュメントを見ていたところ、Slot の章に以下の気になる記載がありました。

> Vue には Web Components spec draft (opens new window)にヒントを得たコンテンツ配信 API が実装されており、 <slot> 要素をコンテンツ配信の受け渡し口として利用します。
https://v3.ja.vuejs.org/guide/component-slots.html#%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84

Slot をこれまで使用してこなかったのは、Slot が本当にやりたい目的がわかっていないため、使い方と利用シーンが結びつなかったのだと考え、ならば、Vue の Slot がインスパイアを受けている大本の Web Components の Slot について学べば、Vue の Slot の本当にやりたい目的がわかり、かつ、利用シーンにも結びつくと思い、 Web Components の Slot について調べました。

## Slot は Web Components の一部の仕組みだが、そもそも Web Components とは
ブラウザには様々な仕組みを API で提供していますが、Web Components はそのうちの一つであり、ウェブアプリを構築する上で再利用可能なカスタム要素を作成するための仕組みです。

以下は、MDN に記載されている Web Components の説明です。
> Web Components は、再利用可能なカスタム要素を作成し、ウェブアプリの中で利用するための、一連のテクノロジーです。
https://developer.mozilla.org/ja/docs/Web/Web_Components

再利用可能なカスタム要素を作成すると、ウェブアプリを構築する上で色々と助かることがあり、**単純に同じコードを何回も書かなくていいようにテンプレート**にする、であったり、**名前空間をカスタム要素の中だけに絞ることでグローバルでの名前の競合を防げる**、といったメリットもあります。


例えば、Web Components には Shadow DOM という仕組みがあり、Shadow DOM は自己完結型のコンポーネントを作成することができ、**名前空間をカスタム要素の中だけに絞ることでグローバルでの名前の競合を防げる**というメリットをもたらします。
`<video> ` は  Shadow DOM を使って実装されており、このタグには様々な DOM が組み込まれていますが、まるっと `<video> ` として定義されており、`<video> ` の中で定義されている CSS はグローバルに影響は与えません。


## Web Components の Slot とは？ ~その1~

Slot は、`<template>` の中で使用されるコンテンツの差し込み口です。では、`<template>` とは Web ページ上で同じ構造を繰り返し使用する必要がある場合にテンプレートとしてまとめる機能のことです。

```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>
```

上記のように`<template>`で定義した内容を以下のように Javascript で利用できます。

```javascript
let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);
```

これだとシンプルすぎますが、実例としては`<template>`の内容をカスタムコンポーネントとして定義して使用します。以下のように `customElements` によってカスタムコンポーネントを定義します。カスタムコンポーネントの名称は、 `my-paragraph` として、`<template>` の内容を定義します。このとき、`<video>` と同じように Shadow DOM (`attachShadow`) を使って実装します。こうすることで、カスタムコンポーネントの中で定義する CSS などがグローバルに影響しません。

```javascript
customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('my-paragraph');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
  }
})
```

カスタムコンポーネントとして登録すれば、`<body>` で好きに使うことができます。

```html
<body>
  <my-paragraph></my-paragraph>
  <my-paragraph></my-paragraph>
  <my-paragraph></my-paragraph>
  <my-paragraph></my-paragraph>
</body>
```

## Web Components の Slot とは？ ~その2~

`<my-paragraph>` は、`<p>My paragraph</p>` という文章が差し込まれていますが、これを `<p>Your paragraph</p>` にしたいときもあります。他にも `<button>` をカスタムコンポーネントとして登録したときに、そのボタンの名前は「送信」や「戻る」など様々です。そのため、`<template>` はカスタムコンポーネントとして定義した後にコンテンツを差し込めるようにしたほうが便利であり、それが Slot です。

```html
<my-paragraph>
  <span slot="my-text">Your paragraph</span>
</my-paragraph>
```

developers.google.com の Slot の説明は以下です。

> スロットはコンポーネント内にあるプレースホルダで、ユーザーはこれに独自のマークアップを入れることができます。
https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ja


## Vue の Slot

Vue の Slot でも、インスパイアを受けていることもあり、Web Components の Slot と想定の利用シーンは同じです。`<slot>` 要素をコンテンツ配信の受け渡し口として利用しており、例えば、以下のような子コンポーネントを定義したとすると...

```javascript
// 子コンポーネント(<navigation-link>)
<template>
  <a
    v-bind:href="url"
    class="nav-link"
  >
    <slot></slot>
  </a>
</template>
```

親コンポーネントで子コンポーネントを呼び出し、`Your Profile` という文字列を `Slot` に受け渡します。

```javascript
// 親コンポーネント
<navigation-link url="/profile">
  Your Profile
</navigation-link>
```

## 参考
Slots Proposal
https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md

スロット
https://v3.ja.vuejs.org/guide/component-slots.html#%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84

0001-new-slot-syntax.md
https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md

Shadow DOM v1: 自己完結型ウェブ コンポーネント
https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ja

template と slot の使い方
https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_templates_and_slots

web-components-examples
https://github.com/mdn/web-components-examples/tree/master/simple-template

Web Components
https://developer.mozilla.org/ja/docs/Web/Web_Components

Window.customElements
https://developer.mozilla.org/ja/docs/Web/API/Window/customElements

