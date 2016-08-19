var _ = require('underscore')

function fib(num) {
  var cache = {}

  function innerFib(number) {
    if(cache[number])
      return cache[number]

    if(number === 0 || number === 1)
      return number

    var result = innerFib(number - 1) + innerFib(number - 2)

    cache[number] = result
    return result
  }
  innerFib(num)

  return cache[num]
}
// console.log(fib(-1))
console.log(fib(4))
console.log(fib(1))
// console.log(fib(155)) // 8
// console.log(fib(30)) // 832040
