# new Proxy の get() の引数である receiver って何 ?

` new Proxy` のトラップ (trap)にある `get` メソッドの引数の `receiver` は何が渡ってきているのかを調べました。

```javascript
const target = {
  name: "k",
  get hello() {
    return this.name
  }
};

const handler = {
  get (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
};

const proxyObj = new Proxy(target, handler);
console.log(proxyObj.name)
```

> receiver
proxy、または proxy から継承するオブジェクトのどちらか
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get

MDN での receiver の説明にあるように、receiver で渡される値は、**proxy、または proxy から継承するオブジェクトのどちらか**です。

上記のコード例だと、`proxyObj.name` によって `get()` が呼ばれ、そのときに `receiver` に渡ってくる値は、`proxyObj`です。

`proxyObj` は、`new Proxy(target, handler)` によって、`target` を継承しているため、 **proxy から継承するオブジェクト**(= `target`) であると、私は解釈しました。


間違いがあればご指摘下さい。
