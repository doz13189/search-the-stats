const target = {
  name: "K",
  get hello() {
    return this.name
  }
};

const target2 = {
  name: "T",
  get hello() {
    return this.name
  }
};

const handler = {
  get (target, key, receiver) {
    // return Reflect.get(target, key, receiver)
    // return target
    return arguments
  }
};

const handler2 = {
  get (target, key, receiver) {
    return target[key]
  }
};


const proxy = new Proxy(target, handler);
const proxy2 = new Proxy(target, handler2);
console.log(proxy.name)
console.log(proxy2.name)

console.log(Reflect.get(target, 'hello', target))
console.log(Reflect.get(target, 'hello', target2))
console.log(Reflect.get(proxy, 'hello', target2))

// const target2 = {
//   name: "t"
// };


// console.log(Reflect.get(target, 'hello'))

// console.log(proxy.name)
// console.log(Reflect.get(target, 'hello', target2))

// const inherits = Object.create(proxy);
// console.log(inherits)
// console.log(Reflect.get(inherits, 'hello'))
