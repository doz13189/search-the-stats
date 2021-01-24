// const sampleArray = [
//   'a',
//   'b',
//   'c'
// ]

// const sampleObj = Object.assign(
//   ...Object.entries(sampleArray).map(value => ({ [value[1]] : value[0] })),
//   ...Object.entries(sampleArray).map(value => ({ [value[0]] : value[1] }))
// )

// console.log(sampleObj)
// console.log(sampleObj.a)
// console.log(sampleObj[0])

// var People;
// (function (People) {
//     People[People["a"] = 0] = "a";
//     People[People["b"] = 1] = "b";
//     People[People["c"] = 2] = "c";
// })(People = {});


"use strict";
var People;
(function (People) {
    People[People["a"] = 0] = "a";
    People[People["b"] = 1] = "b";
    People[People["c"] = 2] = "c";
})(People || (People = {}));
(function (People) {
    People.hoge = 10;
    function huga() {
        return "huga";
    }
    People.huga = huga;
})(People || (People = {}));


"use strict";
var People;
People[People["a"] = 0] = "a";
People[People["b"] = 1] = "b";
People[People["c"] = 2] = "c";
People.hoge = 10;
People.huga = function huga() {
    return "huga";
}

console.log(People)
