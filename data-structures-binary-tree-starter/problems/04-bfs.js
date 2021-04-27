// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    // Your code here
    if (!root) return []
    let queue = [root]
    let nodes = []

    while (queue.length){
        let node = queue.shift()
        nodes.push(node.val)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return nodes
}

module.exports = { bfs };