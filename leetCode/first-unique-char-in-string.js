var firstUniqChar = function(s) {
  var strMap = s.split('').reduce(function(memo, el) {
    memo[el] ? memo[el] += 1 : memo[el] = 1

    return memo
  }, {})

  for(var i = 0; i < s.length; i++) {
    if(strMap[s[i]] === 1)
      return i
  }

  return -1
};

console.log(firstUniqChar("loveleetcode"))
