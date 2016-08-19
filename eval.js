// reverse polish notation
// shunting-yard algorithm - edskar dykstra (post fix notation
function evalParens(string) {
  var result = [] 
  var start = 0
  var end
  // map chnages to another string and recurse?
  // use for.. in loop to take care of ending index reference?
  for (var i = 0; i < string.length; i++){
    if (string[i] === '(') {
      result.push(i)
    } else if (string[i] === ')') {
      var start = result[result.length - 1] + 1
      var end = i

      console.log(evalPureNumbers(string.slice(start, end)))
      // console.log(string[result[result.length - 1] + 1], string[i - 1])

    }
  }
}


function evalPureNumbers(str) {
  if(str === '')
    return ''

  var ops = []
  var numbers = []
  var calc

  str.split(/([*/+-/(/)])/).forEach(function(item) {
    isNaN(item) ? ops.push(item.trim()) : numbers.push(item.trim())
  })

  while(numbers.length > 2) {
    if(ops[1] === '/' || ops[1] === '*') {
      calc = baseCalc(numbers[1], numbers[2], ops[1])
      ops.splice(1, 1)
      numbers.splice(1, 2, calc)
    } else {
      calc = baseCalc(numbers[0], numbers[1], ops[0])
      ops.splice(0, 1)
      numbers.splice(0, 2, calc)
    }
  }

  return baseCalc(numbers[0], numbers[1], ops[0])
}

function baseCalc(num1, num2, op) {
  if(op === '+') return parseInt(num1) + parseInt(num2)
  else if(op === '-') return num1 - num2
  else if(op === '/') return num1 / num2
  else if(op === '*') return num1 * num2
  else return 'Not a valid equation'
}

// console.log(baseCalc('1', '1', '+'))
// console.log(baseCalc(' 11 ', '1', '+'))
// console.log(baseCalc('3 ', '-6', '+'))


var str = 'hellohello'
for (var i in str) {
  if(i % 2 === 0) 
    console.log(str.slice(i, 2))
  console.log('hi')
    // [].splice.call(str, i, 2)
}
// console.log(evalParens("(123+6) * 2"));// 258
// console.log(_eval("(1 + 3*2*3) - 6 / (1 + 2 ) + 14 * ((5 - 2) * 0)"));
// console.log(evalPureNumbers(""));// 19
// console.log(evalPureNumbers("1 + 3*2*3"));// 19
// console.log(evalPureNumbers("33 *2*3 + 1")); //199
// console.log(evalPureNumbers("3+4*2+5+8+7*3*2+3")); // 69
// console.log(evalPureNumbers("3-4*2-5-8-7*3*2+3")); // -57
