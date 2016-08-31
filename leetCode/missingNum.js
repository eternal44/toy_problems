function findMissingNum(arr) {
  if(arr.length === 1) {
    if(arr[0] === 0)
      return 1
    return 0
  }

  var total = ((arr[0] + arr[arr.length - 1])/2) * (arr.length + 1)

  return arr.reduce(function(total, num){
    return total -= num
  }, total)
}

var numArr = [2,3,5,6]
console.log(findMissingNum(numArr))
