function findLargestNode (rootNode) {
  if(rootNode.right) 
    return findLargestNode(rootNode.right)

  return rootNode.value
}

function findSecondLargestNode (rootNode) {
  if(rootNode.left && !rootNode.right)
    findLargestNode(rootNode.left)

  if(rootNode.right && !rootNode.right.right && !rootNode.right.left)
    return rootNode.value

  return findSecondLargestNode(rootNode.right)
}


function largestNode (rootNode) {
  while(rootNode) {
    if(!rootNode.right)
      return rootNode.value

    rootNode = rootNode.right
  }
}

function secondLargestNode (rootNode) {
  if(!rootNode.right && rootNode.left)
    return largestNode(rootNode)

  while(rootNode.right) {
    if(rootNode.right && !rootNode.right.left && !currentNode.right.right)
      return rootNode.value

    rootNode = rootNode.right
  }
}
