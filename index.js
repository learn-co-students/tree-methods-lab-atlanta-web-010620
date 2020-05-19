function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data); 
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode){
    if (rootNode.data > newNode.data){
        // check if root node has left and if it is larger than newNode
        if (rootNode.left){
            findOrAdd(rootNode.left, newNode); 
        }else{
            rootNode.left = newNode; 
        }
    }
    if (rootNode.data < newNode.data){
        if (rootNode.right){
            findOrAdd(rootNode.right, newNode); 
        }else{
            rootNode.right = newNode; 
        }
    }
    return true; 
}

function max(node){
    if (node.right !== null){
        return max(node.right)
    }
    return node; 
}

function min(node){
    if (node.left !== null){
        return min(node.left); 
    }
    return node; 
}