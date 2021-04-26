// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root) {
    // Your code here
    let newArr = [] 
    if(!root) return newArr  //base case
    // let current = root 
    newArr.push(root.val)
    newArr.push(...preOrderArray(root.left))
    newArr.push(...preOrderArray(root.right))

    return newArr

}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    // Your code here
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    // Your code here
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
