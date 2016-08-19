function countObjKeys(arr) {
  var keyCount = 0

  function traverseObj(obj) {
    for (var key in obj){
      if(typeof obj[key] === 'object')
        traverseObj(obj[key])

      keyCount++
    }
  }

  arr.forEach(function(obj) {
    traverseObj(obj)
  })

  return keyCount
}

var objArr1 = [
  {1: 'one', 2: 'two'},
  {3: 'three', 4: 
    {
      5: 'five',
      6: 'six',
      7: {
        8: 'eight',
        9: 'nine',
        'some': 'thing'
      }
    }
  },
  {10: 'ten', 11: 'eleven'},
  {12: 'twelve'}
]

var objArr2 = [
  {1: 'one', 2: 'two'},
  {3: 'three', 4: 
    {
      5: 'five',
      6: 'six',
      7: {
        8: 'eight',
        9: 'nine',
        'some': 'thing',
        'nestedObj': {
          'another': 'one'
        }
      }
    }
  },
  {10: 'ten', 11: 'eleven'},
  {12: 'twelve'}
]

var objArr3 = [
  {1: 'one', 2: 'two'},
  {3: 'three'}, 
  {10: 'ten', 11: 'eleven'},
  {12: 'twelve'}
]


console.log(countObjKeys(objArr1)) // 13
console.log(countObjKeys(objArr2)) // 15
console.log(countObjKeys(objArr3)) // 6

