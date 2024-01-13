
// 1) Node runs on server not in browser
// 2) Console is terminal window
console.log('Hello World')
// 3) global object instead of window object
//console.log(global)
// 4) CommonJS module

const os = require('os')
const path = require('path')
const math = require('./math')
const {add, substract, multiply, divide} = require('./math')

console.log(math.divide(6,3))

console.log(add(6,3))
console.log(substract(6,3))
console.log(multiply(6,3))
console.log(divide(6,3))



/* console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename)) */