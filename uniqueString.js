function uniqueString (str) {
  var charMap = {}
  var found

  for (var i = 0; i < str.length; i++) {
    if(charMap[str[i]])
      return false

    charMap[str[i]] = null
    // if(charMap[str[i]] === undefined) {
    //   charMap[str[i]] = true 
    // } else {
    //   return false
    // }
  }
  return true
}

console.log(uniqueString('ionl'))
console.log(uniqueString('bionac'))
