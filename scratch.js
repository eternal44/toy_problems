function permutator(inputArr) {
  if(typeof inputArr === 'string')
    inputArr = inputArr.split('')

  var results = [];

  function permute(arr, memo) {
    var cur
    var memo = memo || []

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);

      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }

      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}


// permutator('cate')
console.log(permutator('cat'))
