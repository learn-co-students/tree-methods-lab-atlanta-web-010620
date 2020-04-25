function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode){
    if (rootNode.data === newNode.data) {
        return true
    } 
    if (rootNode.data > newNode.data) {
        if (!rootNode.left) {
            rootNode.left = newNode
        } else {
            return findOrAdd(rootNode.left, newNode)
        }
    } else {
        if (!rootNode.right) {
            rootNode.right = newNode
        } else {
            return findOrAdd(rootNode.right, newNode)
        }
    }
}

function max(rootNode) {
    if (!!rootNode.right) {
        return max(rootNode.right)
    } else {
        return rootNode
    }
}

function min(rootNode) {
    if (!!rootNode.left) {
        return max(rootNode.left)
    } else {
        return rootNode
    }
}