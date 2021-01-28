'use strict';

/*Given a root node of a tree, return an array  where each elemetn is the 
width of the tree at each level.

**Width tells us we should do BFS**

//Given:
    0  ---> 1
  / | \
1   2  3 ----> 3
|      |
4      5 ----> 2

// Answer: [1, 3, 2];
*/

/*
 - Create two arrays, counter and arr
    - counters is initialized with index 0
    - arr is initalized with root and some pointer/character variable inside
- Iterate through array with while loop
     - While there is still some element in array, take out first element
     - Retrieve the nodes children and stick them in array at end
     - Increment counter by 1(when there are no children, counter is incremented)
     - remove node as it has been processed
     - Once we hit character variable or stopper variable, we know we have completed a level
     - Get stopper variable, and put it at end of array
     - Add on a 0 to end of counter arr to signify we are moving on to next level of tree
- Once arr length === 1, we must be done and can stop iterating
- Return counter
*/
const measureLevelWidth = root => {
  // Holds root and stopper variable
  let arr = [root, 's'];
  // Holds width at each level
  let counters = [0];
  
  while(arr.length > 1) {
    const node = arr.shift();
    // Inform counter I am processing a new row
    // Add 's' to end of arr
    if(node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
};