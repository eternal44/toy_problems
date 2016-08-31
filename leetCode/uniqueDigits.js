/*
  ############
  # SOLUTION #
  ############
*/
// var countNumbersWithUniqueDigits = function( n, p = 9, f = 9  ) {
//   if( n > 10  ) return countNumbersWithUniqueDigits( 10  );
//   if( n > 1  ) return p * f + countNumbersWithUniqueDigits( n - 1, p * f, f - 1  );
//   if( n === 1  ) return 10;
//   return 1;
// };

function countNumbersWithUniqueDigits(power) {
  var num = Math.pow(10, power)
  var currentNum = 0
  var count = 0 

  while(currentNum < num) {
    var examNum = currentNum.toString()
    var digitMap = {}
    var foundRepeat = false

    for (var i = 0; i < examNum.length; i++) {
      if(digitMap[examNum[i]]) {
        foundRepeat = true
        break
      } else {
        digitMap[examNum[i]] = true
      }
    }

    if(!foundRepeat){
      count++
    }
    currentNum++
  }

  return count
}

console.log(countNumbersWithUniqueDigits(3)) // 739
console.log(countNumbersWithUniqueDigits(4)) // 5275
