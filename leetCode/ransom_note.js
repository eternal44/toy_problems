var canConstruct = function(ransomNote, magazine) {
  function mapStr(str) {
    return str.split('').reduce(function(memo, el) {
      memo[el] ? memo[el] += 1 : memo[el] = 1

      return memo
    }, {})
  }

  var noteMap = mapStr(ransomNote)
  var magMap = mapStr(magazine)

  for (var key in noteMap) {
    if(!magMap[key] || noteMap[key] > magMap[key])
      return false
  }

  return true
};

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'videloaaa')) // true
console.log(canConstruct('aa', 'videloaba')) // true
console.log(canConstruct("fffbfg","effjfggbffjdgbjjhhdegh")) // true


