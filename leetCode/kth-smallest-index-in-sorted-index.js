var kthSmallest = function(matrix, k) {
  var length = matrix[0].length
  var height = length

  var sortedMatrix = matrix
    .reduce(function(memo, el) {
      return memo.concat(el)
    }, [])
    .sort(function(a, b){
      return a - b
    })
    .reduce(function(memo, el, index, coll) {
      if((index + 1) % length === 0){
        memo.push(coll.slice(index - length + 1, index + 1))
      }
      return memo
    }, [])

  var col = Math.ceil(k / height) - 1
  var row = k % height ? k % height - 1 : k / (col + 1) - 1

  return sortedMatrix[col][row]
};

var matrix = [
  [ 1,  5,  9 ],
  [10, 11, 13],
  [12, 13, 15]

]
var k = 8

console.log(kthSmallest(matrix, 8)) // 2,1
console.log(kthSmallest(matrix, 4)) // 1,0
console.log(kthSmallest(matrix, 1)) // 0,0
console.log(kthSmallest(matrix, 9)) //2,2
console.log(kthSmallest(matrix, 3)) //0,2


var matrix1 = [
  [1,2],
  [1,3]
]

console.log(kthSmallest(matrix1, 2))
