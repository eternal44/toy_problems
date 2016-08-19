function mergeSort(arr) {
  if(arr.length === 1)
    return arr

  var midPoint = Math.floor(arr.length / 2)
  var left = arr.slice(0, midPoint)
  var right = arr.slice(midPoint)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(arr1, arr2) {
  var mergedArr = []
  var i = 0
  var j = 0

  while (i < arr1.length && j < arr2.length) {
    mergedArr.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++])
  }

  return i < arr1.length ? mergedArr.concat(arr1.slice(i)) : mergedArr.concat(arr2.slice(j))
}

console.log(mergeSort([8,7,3,6,9,2,4,5,1]))
console.log(mergeSort([8]))


/*
 * OUTCO Solution
 */

var merge = function(arr1, arr2) {
  var result = []

  if (arr1.length === 0) {
    return arr2
  } else if (arr2.length === 0) {
    return arr1
  }

  var traverse = function(index1, index2) {
    if(idnex1 >= arr1.length) {
      result = result.concat(arr2.slice(index2))
      return
    } else if (index2 >= arr2.length) {
      result = result.concat(arr1.slice(index1))
      return
    }
    if(arr1[index1] < arr2[index2]) {
      result.push(arr1[index1])
      traverse(index1 +1, index2)
    } else {
      result.push(arr2[index2])
      traverse(index1, index2+1)
    }
  }

  traverse(0,0)

  return result
}
