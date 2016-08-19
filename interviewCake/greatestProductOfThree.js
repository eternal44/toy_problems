function greatestProductOfThree(array) {
  var highestVal = Math.max(array[0], array[1])
  var lowestVal = Math.min(array[0], array[1])
  var highestProduct = array[0] * array[1]
  var lowestProduct = array[0] * array[1]
  var highestProductOf3 = highestProduct * array[2]

  for (var i = 2; i < array.length; i++) {
    highestProductOf3 = Math.max(
      highestProductOf3,
      highestProduct * array[i],
      lowestProduct * array[i]
    )
    highestProduct = Math.max(
      highestProduct,
      array[i] * highestVal,
      array[i] * lowestVal
    )

    lowestProduct = Math.min(
      lowestProduct,
      array[i] * lowestVal,
      array[i] * highestVal
    )

    highestVal = Math.max(highestVal, array[i])
    lowestVal = Math.min(lowestVal, array[i])
  }

  console.log(highestVal, lowestVal, highestProduct, lowestProduct)
  return highestProductOf3
}

console.log(greatestProductOfThree([-100, 10, 10, 10, -500]))
// console.log(greatestProductOfThree([-10,-10,1,3,2, 4,-4, 6]))










































// function greatestProductOfThree (array) {
//   var highestVal = Math.max(array[0], array[1])
//   var lowestVal = Math.min(array[0], array[1])

//   var highestProductOf2 = array[0] * array[1]
//   var lowestProductOf2 = highestProductOf2
//   var highestProductOf3 = highestProductOf2 * array[2]

//   var currentVal

//   for (var i = 2; i < array.length; i++) {
//     currentVal = array[i]

//     highestProductOf3 = Math.max(
//       currentVal * lowestProductOf2,
//       currentVal * highestProductOf2
//     )

//     highestProductOf2 = Math.max(
//       highestProductOf2,
//       highestVal * currentVal,
//       lowestVal & currentVal
//     )

//     lowestProductOf2 = Math.min(
//       lowestProductOf2,
//       lowestVal * currentVal,
//       highestVal * currentVal
//     )

//     highestVal = Math.max(highestVal, currentVal)
//     lowestVal = Math.min(lowestVal, currentVal)
//   }

//   return highestProductOf3
// }

// // We can do this in O(n) time and O(1) space.

// console.log(greatestProductOfThree([-100, 10, 10, 10, -500]))
// // console.log(greatestProductOfThree([-10,-10,1,3,2, 4,-4, 6]))
