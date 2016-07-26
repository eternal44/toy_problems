// resin coding challenge

function bsearch(ns, n) {
  var resultInd = -1
  var midPoint
  var offset = Math.floor((ns.length) / 2)

  function divAndConquer(arr) {
    midPoint = Math.floor((arr.length) / 2)

    if(midPoint === 0)
      return -1 // check later.  set to resultInd?

    if(arr[midPoint] === n){
      resultInd = offset - midPoint
      console.log('found', midPoint)
      return

    } else if(arr[midPoint] > n) {
      offset -= midPoint - 1
      console.log('lower', midPoint)
      divAndConquer(arr.slice(0, midPoint))

    } else if(arr[midPoint] < n) {
      offset += midPoint + 1
      console.log('upper', midPoint)
      divAndConquer(arr.slice(midPoint))

    }

  }
  divAndConquer(ns)

  return resultInd

}


// console.log(bsearch([1,2,3,4,5,6,7,8], 4));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 4));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 2));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 1));
// console.log(bsearch([1,2,3,4,5,6,7,8,9], 7));
// console.log(bsearch([1,2,3,4,5,6,7,8], 10));
// console.log(bsearch([], 10));
