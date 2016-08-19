function findRotationPoint(array) {
  var firstWord = array[0]
  var floorIndex = 0
  var ceilIndex = array.length - 1
  var guessIndex

  while (floorIndex < ceilIndex) {
    guessIndex = Math.floor(floorIndex + ((ceilIndex - floorIndex) / 2))

    if(array[guessIndex] < firstWord)
      ceilIndex = guessIndex
    else
      floorIndex = guessIndex

    if(floorIndex + 1 === ceilIndex)
      break
  }

  return ceilIndex
}

var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage'
];

console.log(findRotationPoint(words))

