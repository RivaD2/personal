'use strict';

/* Given a node, validate the binary search tree, ensuring that
every nodes's left hand child has a value less than the parent and every 
node's right hand child is greater than the parent.
*/

/*
- I have to assume that the tree has something wrong with it
- Can use min and max variables to help me through this one
- When validate function is called over and over again, I want to pass some info to each call
- I have to communicate min and max values to each call so I pass those in as params
- If move to left, max will update, and right, min will update
- Inspect current node and compare to min and max
- Every step we update max if move to left, update min if move to right
*/

const validateBst =  (node, min = null, max = null) => {
  // If current node is out of max bounds, something is wrong
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
  
  // If calling validate with node on left returns false, something is wrong
  if(node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  if(node.right && !validate(node.right, node.data, max)) {
    return false;
  }r
  return true;
}