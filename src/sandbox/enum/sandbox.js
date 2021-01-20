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