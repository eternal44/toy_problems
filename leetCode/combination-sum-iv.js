/*
   nums = [1, 2, 3]
   target = 4

   The possible combination ways are:
   (1, 1, 1, 1)
   (1, 1, 2)
   (1, 2, 1)
   (1, 3)
   (2, 1, 1)
   (2, 2)
   (3, 1)

   Note that different sequences are counted as different combinations.

   Therefore the output is 7.

*/

var combinationSum4 = function(nums, target) {
  var cache = {}
  var count = 1
  nums = nums.sort(function(a,b){ return a - b})

  while (count <= target){
    for (var i = 0; i < nums.length; i++) {
      if(!cache[count])
        cache[count] = 0

      if(count === nums[i])
        cache[count]++
      else if(count > nums[i])
        cache[count] += cache[count - nums[i]]
    }
    count++
      console.log(cache)
  }
  return cache[target] ? cache[target] : 0
};

console.log(combinationSum4([4,2,1], 32))
// console.log(combinationSum4([4,2,1], 4))
console.log(combinationSum4([3,2,1], 5))

// console.log(combinationSum4([1,2,3], 4))
// console.log(combinationSum4([4,2,1], 32))
// console.log(combinationSum4([3], 4))
// console.log(combinationSum4([4,6,8,12], 12))

