function bstChecker (root) {
  var nodePile = []
  nodePile.push({
    node: root,
    lowerLimit: -Infinity,
    upperLimit: Infinity
  })

  while(nodePile.length) {
    var currentNode = nodePile.pop()
    if(currentNode.node.right > upperLimit || currentNode.node.left < lowerLimit)
      return false

    if(currentNode.left) {
      nodePile.push({
        node: currentNode.left,
        lowerLimit: currentNode.lowerLimit,
        upperLimit: currentNode.value
      })
    }

    if(currentNode.right) {
      nodePile.push({
        node: currentNode.right,
        lowerLimit: currentNode.value,
        upperLimit: currentNode.upperLimit
      })
    }
  }

  return true
}

function bstChecker(node, upperLimit, lowerLimit) {
  if(!node) return true

  if(node.value > upperLimit || node.value < lowerLimit)
    return false

  return bstChecker(node.left, node.value, lowerLimit) &&
    bstChecker(node.right, upperLimit, node.value)
}
