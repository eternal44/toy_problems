var isSelfCrossing = function(x) {
  var north = x[0];
  var west = x[1];
  var south = x[2];
  var east = x[3];

  return south <= north && west <= east ? true : false;
};

console.log(isSelfCrossing([1,2,3,4]))
console.log(isSelfCrossing([2,1,1,2]))
