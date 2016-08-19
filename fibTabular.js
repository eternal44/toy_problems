function fib(num) {
  if(num === 0 || num === 1)
    return num

  var prev = 1
  var prevPrev = 0
  var current

  for (var i = 2; i <= num; i++) {
    current = prev + prevPrev
    prevPrev = prev
    prev = current
  }

  return current
}
console.log(fib(4))
// console.log(fib(1350))
