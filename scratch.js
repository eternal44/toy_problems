function bsearch(ns, n) {
  var startPoint = 0
  var endPoint = ns.length - 1
  var midPoint

  while((startPoint < (endPoint + 1))) {
    midPoint = Math.floor((endPoint - startPoint) / 2) + startPoint

    if(ns[midPoint] === n){
      return midPoint
    } 

    if(ns[midPoint] > n) {
      endPoint = midPoint - 1

    } else if(ns[midPoint] < n) {
      startPoint = midPoint + 1

    }

  }

  return -1
}

console.log(bsearch([1,2,3,4,5,6,7,8], 4));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 4));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 2));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 1));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 9));
console.log(bsearch([1,2,3,4,5,6,7,8,9], 7));
console.log(bsearch([1,2,3,4,5,6,7,8], 10));
console.log(bsearch([], 10));
