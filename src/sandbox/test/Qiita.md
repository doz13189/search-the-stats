# フロントエンド( Vue )の単体テスト( Jest )のテストケース作成とテストコード作成

## 環境
- Vue.js  
https://github.com/vuejs/vue-next  

- Jest  
https://github.com/facebook/jest

- vue-test-utils  
https://github.com/vuejs/vue-test-utils-next


## 単体テスト対象

初期表示
image 1

入力ボックスに検索キーワードを入力
image 2

検索待ち
image 3

検索結果(検索結果あり)
image 4

検索結果(検索結果なし)
image 5

上記の画面は、Search.vue で処理されており、画面遷移はない。  
単体テストの実施対象は Search.vue とする。Search.vue の中で呼び出されている別のコンポーネントは、Search.vue の単体テストでは単体テスト対象としない。

結果として、ざっくり Search.vue の単体テスト対象は青色の範囲で、赤色の範囲は範囲外とする。

```
/src
  /views
    - Search.vue <- 単体テスト対象
  /components
    - Player.vue <- 検索結果を表示するコンポーネント。単体テスト対象外。
    - Loading.vue <- 検索待ちのローディングを表示するコンポーネント。単体テスト対象外。
  /api
    - api.ts <- 検索時に実行される Http リクエスト。単体テストではモックにする。
```

## 単体テストケースを作成する

## 単体テストのケース作成方針

私のような SIer 所属の人間は、単体テストとなると、コードベースのC1（分岐網羅）でテストケースを作成する、としたくなるが、vue-test-utils にそれはしないほうがいいよ、ということが書かれている。

> #何をテストするかを知る  
UI コンポーネントでは、コンポーネントの内部実装の詳細に集中しすぎて脆弱なテストが発生する可能性があるため、完全なラインベースのカバレッジを目指すことはお勧めしません。
代わりに、コンポーネントのパブリックインターフェイスを検証するテストを作成し、内部をブラックボックスとして扱うことをお勧めします。単一のテストケースでは、コンポーネントに提供された入力（ユーザーのやり取りやプロパティの変更）によって、期待される出力（結果の描画またはカスタムイベントの出力）が行われることが示されます。  
https://vue-test-utils.vuejs.org/ja/guides/#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%92%E3%83%B3%E3%83%88

上記を読み替えると、**コンポーネントに提供された入力**をテストケースとし、**期待される出力**をテストケース結果として検証していく、形になる。
**コンポーネントに提供された入力**って何となるが、vue-mastery に以下のものがコンポーネントに提供される入力であると書かれている。

- Component Data (コンポーネントに定義されたデータが変更される)
- Component Props (親コンポーネントからプロップが渡される)
- User Interaction (ユーザーが画面を操作する)  
Ex: user clicks a button
- Lifecycle Methods (Vue ライフサイクルが変わる)  
mounted(), created(), etc.
- Vuex Store (Vuex にストアされているデータが変更される)
- Route Params (URL のパラメータによってデータが渡される)

次に**期待される出力**って何となるが、同じく vue-mastery に以下のものが期待される出力となると書かれている。

- What is rendered to the DOM (表示内容が変わる)
- External function calls (外部関数の実行される)
- Events emitted by the component (親コンポーネントのイベントを発火させる)
- Route Changes (画面が遷移する)
- Updates to the Vuex Store (Vuex にストアしているデータを変更する)
- Connection with children (子コンポーネントを呼び出す)
i.e. changes in child components

> コンポーネントに提供された入力の種類  
> 期待される出力の種類  
https://www.vuemastery.com/courses/unit-testing/what-to-test/

単体テストのケース作成方針は、テストケースで確認することは、**コンポーネントに提供された入力**であり、テストケース結果は**期待される出力**である。この方針でテストケースを作成していると、例えば、開発した人がテストケースを作成すると陥りがちなラインベースでのテストケースになる、という事象は結構防げる。


### Search.vue にコンポーネントに提供される入力と期待される出力を洗い出す

以下のフォーマットで書く。
コンポーネントに提供される入力 : 期待される出力

- input にフォーカスする : タイトルが変更される
- input からフォーカスを外す : タイトルが変更される
- input に文字を入力する : 検索ボタンが有効になる(押せるようになる)
- input に文字を入力して検索ボタンを押す : current　page が表示される
- input に文字を入力して検索ボタンを押す : previous ボタンが表示される
- input に文字を入力して検索ボタンを押す : このイベントの期待される出力多いのであとは省略
- previous ボタンを押す : 次のページが表示される
- next ボタンを押す : 次のページが表示される

洗い出し終わったら、これら分類していく。例えば、コンポーネントに提供される入力の場合は、「input にフォーカスする」はユーザーインタラクションであり、その期待される出力は「タイトルが変更される」であるため、表示内容が変わる、であるという感じ。

このときに悪い洗い出し方の例として、期待される出力が「loadingFlag が true になる」となっていた場合、期待される出力の分類のどれにも該当しないため、適切な期待される出力ではない、となる。

拙い英語で恐縮だが、私はソースコードに以下のような形でコンポーネントに提供される入力と期待される出力を、分類も含めて書くようにしている。

```html
// Press the search button (User Interaction) -  "current_page" is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  "total page" is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  previous button is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  next button is rendered (What is rendered to the DOM)
```

## テストコード作成

テストコードの作成対象は以下のテストケースにする。
- input に文字を入力して検索ボタンを押す : current　page が表示される

ポイントとしては以下
- shallowMount  
Search.vue で呼び出しているコンポーネントはスタブで扱う。呼び出しているコンポーネントは単体テストの対象ではないため。
- axios はモック化する  
検索ボタンを押したときに Http リクエストが発行され、そのレスポンスに検索結果があるのだが、これはモック化する。Search.vue の表示などの単体テストをしたいので、Http リクエストの発行などは確認対象外である。モック化して受け取るレスポンスは、response.js に定義しており、そこにテストケースが消化できるようなデータを用意しておく。



```javascript
import axios from 'axios'
import { shallowMount } from "@vue/test-utils";
import flushPromises from 'flush-promises'

import Search from "@/views/Search.vue";
import {
  firstResponse200,
} from './response.js'

jest.mock('axios')

describe("Search.vue", () => {
  it('Press the search button (User Interaction) -  "current_page" is rendered (What is rendered to the DOM)', async () => {
    
    // モックが返すレスポンスを定義
    axios.get.mockResolvedValueOnce(firstResponse200)

    // shallowMount で Search.vue が呼び出しているコンポーネントはスタブにする
    const wrapper = shallowMount(Search)

    // input に test という文字列を入力する
    const searchInput = wrapper.find('[data-testid="search-input"]')
    searchInput.setValue('test')

    // 画面の更新処理
    wrapper.vm.$nextTick()
    await flushPromises()
    
    // 検索の実行
    wrapper.find('[data-testid="search-button"]').trigger('click')
    
    // 画面の更新処理
    wrapper.vm.$nextTick()
    await flushPromises()

    // 期待する出力の検証
    expect(wrapper.find('[data-testid="current-page-paragraph"]').html()).toMatch('<p class="title" data-testid="current-page-paragraph">1</p>')
  })
})
```

## 余談 & まとめ

これは余談なんですが、テストケース作成したからと言って、全てをテストコード化するわけではないです。テストコードを作成せずに手で画面を操作して確認して終わりにすることもあります。当然のことですが、テストコードの作成はそれなりに時間がかかります。感覚ベースですが、2 時間で開発したコードのテストコード作成は 2 時間ほどかかります。たまにですが、コードを書き終わったはいいが、テストコードにしづらいため、コードを書き直すこともあります。とにかくテストコード化はそれなりに大変であるということ。書かなくていいなら、書かないほうがいい、と思っています。書く書かないは開発物の対象の性質に依存するので、それぞれの現場で判断するべき内容になるので、なかなか一概には言えないところです。少なくとも私のように趣味で書いてあるコードに対してテストコードを書くのは過剰であると、そう思います。






<!--
## きっかけ
2020年の9月から社内でお試しでアジャイル開発手法を取り入れてみよう、という試みの元に素人エンジニアが5人集められました。Javascript が書けるのが私だけということもあり、フロントエンド周りはまるっと担当になったので、コーディングからテストまで任されることになりました。フロントエンド( Vue )は趣味程度でやっていたのですが、テストコードは書いたことはないため(趣味でテストコード書くやつなんていないので当たり前...)、試行錯誤でした。3ヶ月ほど経ち、テスト方針・テストケース作成・テストコード作成の一通りを経験したので、ここらで言語化して記録しようと思い、この記事を書いています。

## 前提
- 単体テストとは?  
この記事では、フロントエンドに限定された範囲でのテストを意味しています。私のプロジェクトでは、フロントエンドと API サーバーがアーキテクチャ上に存在しますが、フロントエンドと API サーバー間の確認は連結テストの範囲です。現場ごとに範囲の定義が異なる、まずは範囲の認識を合わせるところから。

- 単体テストの呼び方  
一般的には Unit Test のほうが使われている雰囲気を感じ取っていますが、社内では単体テストと呼ぶ派閥が強いので、私は単体テストと呼びます。

- 単体テスト = 自動化  
基本的には単体テストは Jest によるテストコードの実行を指しています。手動による単体テストは、明示的に手動の単体テストと記載しています。

- TDD（テスト駆動開発）ではない  
この記事では、一切、テスト駆動開発（TDD）には触れていないです。そもそも私が TDD にあまり詳しくないです。開発工程はオーソドックスに、設計 → 開発 → テストです。


## 単体テストを実施する目的
機能追加時のデグレードの回避です。色々と議論の余地はありそうですが、私のプロジェクトでは、機能追加をする上のノンデグレーションテストにかかる工数の増加を防ぐためです。そのため、1回目のリリースまでは、ほとんど手動による単体テストでした。
-->


<!-- 
## そもそも単体テストってするべきか？
アジャイル開発チーム内でまず最初に話したことから書きます。
単体テストをするべきか。これは開発対象のシステムの重要度によって大きく変わります。今回の開発対象は社内向けの業務で使用するシステムであり、システムが止まれば被害は甚大だが、業務の代替手段はある、という立ち位置のシステムでした。求められる品質のレベルは、感覚だと3段階中の2でしょうか。東証の発注システムのように止まれば日本経済、いや、世界に影響を及ぼすような外部に公開されたシステムではないが、一担当者の業務がちょっと楽になる便利ツールほど軽くもない。求められる品質上、単体テストは実施することになりました。本題から逸れるため深くは書きませんが、求められる品質のレベルを考慮し、単体テスト・連結テスト (Unit Test / Integration Test) までは実施するが、総合テスト (System Test) は実施しない、という結論になりました。

## テストって時間かかる
テストを実施する、ということになれば開発にかかる見積もりの時間は大幅に増えます。プロダクトオーナーにそのことを伝えることが次のミッションでした。

- 設計(30%)
- 開発(30%)
- テスト(40%)
-->

