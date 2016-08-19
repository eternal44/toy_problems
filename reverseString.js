function reverseString(string){
  var midpoint = Math.floor(string.length/ 2)
  var strArr = string.split('')

  for(var i = 0; i < midpoint; i++) {
    var temp = strArr[i]
    strArr[i] = strArr[strArr.length - 1 - i]
    strArr[strArr.length - 1 - i] = temp
  }

  return strArr.join('')
}

console.log(reverseString('parameter'));
console.log(reverseString('mississippi'));
