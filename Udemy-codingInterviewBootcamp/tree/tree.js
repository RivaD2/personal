'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    })
  }
}

class Tree {
  constructor() {
   this.root = null;
  }
  
  /*
  - Create an empty array
  - Take root node and stick it into array
  - Iterate through array
     - While there is still some element in array, take out first element
     - Retrieve the nodes children and stick them in array
  - Call function to traverse method with the node
  - Throw node away as it has been processed
  - Look at array again, and if there are still elements inside, then we iterate and repeat steps above
*/
  breadthFirst(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      // Take every element out of node.children and push them one by one into arr
      arr.push(...node.children);
      fn(node);
    }
  }
  
  /*
  - Create array and initialize with root node
  - Iterate with while loop as long as there are some amount of elements
      - Retrieve the child nodes of node but instead of adding them to end of arr, add them to start
  - In DFS, I have to add children to the front/start (like a stack)
  **ONly difference is whether or not children are added to start or end of arr**
  */
  depthFirst(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}