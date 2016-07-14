// https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png

// https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/2000px-Sudoku-by-L2G-20050714_solution.svg.png

'use  strict';

var _ = require('underscore');

// constraints


var good_sudoku = [ [7,8,4,1,5,9,3,2,6], 
              [5,3,9,6,7,2,8,4,1], 
              [6,1,2,4,3,8,7,5,9], 
              [9,2,8,7,1,5,4,6,3], 
              [3,5,7,8,4,6,1,9,2], 
              [4,6,1,9,2,3,5,8,7], 
              [8,7,6,3,9,4,2,1,5], 
              [2,4,3,5,6,1,9,7,8], 
              [1,9,5,2,8,7,6,3,4] 
             ];

// part 1 - all rows have unique digits 1-9

// part 2 - all columns have unique digits 1-9

// part 3 - every 3x3 matrix (there are 9) have unique digits 1-9


function rowCheck (array) {
  var possibleValues = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  }
  
  for(var i = 0; i < array.length; i++) {
    if(possibleValues[array[i]])
       return false
       
    if(!possibleValues[array[i]])
      possibleValues[array[i]] = true
  }
  
  for (var key in possibleValues) {
    if(possibleValues[key] === false)
      return false
  }
  
  return true
}
// console.log(rowCheck(good_sudoku[0]))

function buildVerticalRows(matrix) {
  var flippedRows = []
  var currentRow = 0
  
  while(currentRow < 9 ){
    if(currentRow === 0) {
      matrix[currentRow].forEach(function(num) {
        flippedRows.push([num])
      })
      currentRow++
      continue
    }
    
    for(var i = 0; i < matrix[currentRow].length; i++) {
      flippedRows[i].push(matrix[currentRow][i])
    }
    currentRow++
  }
  return flippedRows
}

// console.log(buildVerticalRow(good_sudoku))

function buildSectors(matrix) {
  var sectorLevel = 0
  var sectors = []
  
  while(sectorLevel < 9) {
    for(var i = 0; i < 3; i++) {
      if(i === 0) {
        sectors.push(matrix[i + sectorLevel].slice(0,3))
        sectors.push(matrix[i + sectorLevel].slice(3,6))
        sectors.push(matrix[i + sectorLevel].slice(6,9))
        continue
      }

      sectors[sectorLevel + 0] = sectors[sectorLevel + 0].concat(matrix[i + sectorLevel].slice(0,3))
      sectors[sectorLevel + 1] = sectors[sectorLevel + 1].concat(matrix[i + sectorLevel].slice(3,6))
      sectors[sectorLevel + 2] = sectors[sectorLevel + 2].concat(matrix[i + sectorLevel].slice(6,9))
    }
    sectorLevel += 3
  }
  
  return sectors
}

console.log(buildSectors(good_sudoku))

function validateSudoku(matrix) {
  var validators = [
    function(matrix) {return matrix},
    buildVerticalRows,
    buildSectors
  ]

  for (var i = 0; i < validators.length; i++) {

    var currentMatrix = validators[i](matrix)
    for(var i = 0; i < currentMatrix.length; i++) {
      if(!rowCheck(currentMatrix[i]))
        return false
    }
  }
  return true
}

// console.log(validateSudoku(good_sudoku))

