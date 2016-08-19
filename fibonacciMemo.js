var _ = require('underscore')
/*
 ######################
 # MEMOIZED RECURSIVE #
 ######################
*/
function memoize (func) {
  var cache = {}
  return function() {
    var args = [].slice.call(arguments)

    if(cache[args])
      return cache[args]


    var result = func.apply(null, args)
    cache[args] = result

    return result
  }
}

function fib (num) {
  if(num < 0) return 'no negative numbers'
  if(num <= 1) return num

  return fib(num - 1) + fib(num -2)
}

var fib = memoize(fib)

console.log(fib(42))
console.log(fib(1350))
// console.log(fib(60))
// console.log(fib(100))
// console.log(new Fib().fibber(-1))



/*
 ###################
 # BRUTE RECURSIVE #
 ###################
*/
// function fib(num) {
//   if(num < 0)
//     return 'Invalid input: negative number'

//   if(num === 0 || num ===1)
//     return num

//   return fib(num - 1) + fib(num - 2)
// }

// console.log(fib(-1))
// console.log(fib(1))
// console.log(fib(4))





// function Fibber() {
//   this.memo = {};
// }

// Fibber.prototype.fib = function(n) {

//   // edge case
//   if (n < 0) {
//     throw new Error('Index was negative. No such thing as a negative index in a series.');

//     // base cases
//   } else if (n === 0 || n === 1) {
//     return n;
//   }

//   // see if we've already calculated this
//   if (this.memo.hasOwnProperty(n)) {
//     console.log('grabbing memo[' + n + ']');
//     return this.memo[n];
//   }

//   console.log('computing fib(' + n + ')');
//   var result = this.fib(n-1) + this.fib(n-2);

//   // memoize
//   this.memo[n] = result;

//   return result;
// }

// console.log(new Fibber().fib(8))

