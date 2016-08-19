function checkPerm (str1, str2) {
  if(str1.length !== str2.length)
    return false

  var sorted1 = str1.split('').sort().join()
  var sorted2 = str2.split('').sort().join()

  return sorted1 === sorted2
}

console.log(checkPerm('hellomother', 'motherhello'))
