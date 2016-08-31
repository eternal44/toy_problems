var findTheDifference = function(s, t) {
  function sortString(str) {
    return str.split('').sort()
  }

  var str1 = sortString(s)
  var str2 = sortString(t)

  var longestStrArr = str1.length > str2.length ? str1 : str2

  for (var i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]){
      return longestStrArr[i]
    }
  }

  return longestStrArr[longestStrArr.length - 1]
};

console.log(findTheDifference('hello', 'hellos'))
console.log(findTheDifference('hellos', 'hello'))
