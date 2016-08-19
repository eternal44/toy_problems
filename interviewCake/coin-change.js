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
  if(num < 0)
    throw new Error('Negative number')

  if(num === 0 || num === 1)
    return num

  return fib(num - 1) + fib (num - 2)
}

/*
   You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

   Example 1:
   coins = [1, 2, 5], amount = 11
   return 3 (11 = 5 + 5 + 1)

   Example 2:
   coins = [2], amount = 3
   return -1.

Note:
You may assume that you have an infinite number of each kind of coin.
*/

function findMinimumChange(denominationsLeft, amountLeft) {
  if(amountLeft === 0)
    return 1

  if(amountLeft < 0)
    return 0

  if(denominationsLeft.length === 0)
    return 0

  var numPossibilities = 0

  var currentCoin = denominationsLeft[0]
  var restOfCoins = denominationsLeft.slice(1)

  while(amountLeft >= 0) {
    numPossibilities += findMinimumChange(restOfCoins, amountLeft)
    amountLeft -= currentCoin
  }
  return numPossibilities
}

findMinimumChange = memoize(findMinimumChange)

var denominations = [1,2,3]
console.log(findMinimumChange(denominations, 20)) // 44
console.log(findMinimumChange(denominations, 10)) // 14
















































// //MKS

// /*
//   ######################
//   # RECURSIVE SOLUTION #
//   ######################
// */

// // NOTES:  sort denomiations from largest to smallest
// // if you can find a combo while recursing over the largest denomination - no need to continue on to the smaller denominatin
// //   break out of recursion and return combolength
// var coinChange = function(coins, amount) {
//   if(amount === 0) return 0;
//   var shortestComboLength;
//   coins = coins.sort(sortNumber);

//   var subroutine = function(currentComboLength, currentSum){
//     if(currentSum > amount) return;
//     if(currentSum === amount){
//       if(!shortestComboLength) shortestComboLength = currentComboLength;
//       if(currentComboLength < shortestComboLength){
//         return shortestComboLength = currentComboLength;
//       } else {
//         return;
//       }
//     }

//     for(var i = 0; i < coins.length; i++){
//       subroutine(currentComboLength + 1, currentSum + coins[i]);
//     }
//   }
//   subroutine(0, 0)

//   return shortestComboLength ? shortestComboLength : -1;
// };

// /* 
//   ##################################
//   # RECURSIVE SOLUTION WITH MODULO #
//   ##################################
// */

// // var coinChange = function(coins, amount){
// //   var sortedCoins = coins.sort(sortNumber);
// //   var coinCount = 0;
// //   var balance = amount;

// //   coins.forEach(function(denomination){
// //     coinCount += Math.floor(balance / denomination);
// //     console.log('balance: ', balance)
// //     balance = balance % denomination;
// //     console.log('balance: ', balance)
// //   });

// //   return balance ? -1 : coinCount;
// // }

// function sortNumber(a,b) {
//   return b - a;
// }

// // console.log(coinChange([1, 2, 5], 11)) // 3
// // console.log(coinChange([3], 11)) // -1
// console.log(coinChange([186,419,83,408], 6249))// 20
// console.log('hi');
