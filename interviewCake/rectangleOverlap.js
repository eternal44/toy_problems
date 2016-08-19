function findXOverlap (x1, width1, x2, width2, y1, height1, y2, height2) {
  var xRange = findRange(x1, width1, x2, width2)
  var yRange = findRange(y1, height1, y2, height2)

  return {
    overlapLeftX: xRange.coord,
    overlapWidth: xRange.extends,
    overlapBottomY: yRange.coord,
    overlapHeight: yRange.extends
  }
}

function findRange (coord1, extends1, coord2, extends2) {
  var smallerEnd = Math.min(coord1 + extends1, coord2 + extends2)
  var largerStart = Math.max(coord1, coord2)

  // if it doesn't overlap
  if (smallerEnd <= largerStart)
    return -1

  var coordExtends = smallerEnd - largerStart

  return {
    coord: largerStart,
    extends: coordExtends
  }
}

var rectangles = [
  {
    leftX: 0,
    bottomY: 5,
    width: 4,
    height: 4
  },
  {
    leftX: 2,
    bottomY: 6,
    width: 5,
    height: 4
  }
];

console.log(findXOverlap(
  rectangles[0].leftX,
  rectangles[0].width,
  rectangles[1].leftX,
  rectangles[1].width,
  rectangles[0].bottomY,
  rectangles[0].height,
  rectangles[1].bottomY,
  rectangles[1].height
))
