// // 'AAAABBCDDDEEAA' => 'A4B2C1D3E2A2'

// function countChars (str) {
//   var currentChar = str[0];
//   var charCount = 1;
//   var results = [];

//   for (var i = 1; i < str.length; i++) {
//     if(str[i] === currentChar) {
//       charCount++;
//     } else {
//       results.push(str[i - 1], charCount);
//       charCount = 1;
//       currentChar = str[i];
//     }
//   }

//   return results.join('');
// }

function countChars (str) {
  var currentChar = str[0];
  var charCount = 1;
  var results = [];

  Array.prototype.forEach.call(str, function(char, index) {
    if(index === 0) return

    if(str[index] === currentChar) {
      charCount++;
    } else {
      results.push(str[index - 1], charCount);
      charCount = 1;
      currentChar = str[index];
    }
  })
  return results.join('');
}
console.log(countChars('AAAABBCDDDEEAA'))
