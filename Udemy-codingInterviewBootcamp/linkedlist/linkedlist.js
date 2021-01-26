'use strict';


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Creates a node out of data and assign it to head
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
   let counter = 0;
   let currentNode = this.head;
   while(currentNode) {
     counter++;
     currentNode = currentNode.next;
   }
   return counter;
  }
  
  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) return null;
    let currentNode = this.head;
    while(currentNode) {
      if(!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
   }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) return;
    this.head = this.head.next;
  }
  
  removeLast() {
    if(!this.head) return;
    // If only one node
    if(!this.head.next) {
      this.head = null;
      return;
    }
    // Using two pointers basically
    // Iterate until there is no next
    let prev = this.head;
    let currentNode = this.head.next;
    while(currentNode.next) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    prev.next = null;
  }

  insertLast(data) {
  // I have to get reference to last element of course
  // I have getLast() or I can iterate again
  const last = this.getLast();
    if(last) {
      // There are some exisiting nodes in chain
      last.next = newNode(data);
    } else {
       // Chain is empty!
      this.head = new Node(data);
    }
  }
  
   // Returns element at given Index
  //Linked lists are 0 indexed, like arrays
  getAt(index) {
    let currentNode = this.head;
    let counter = 0;
    while(currentNode) {
      if(counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    } 
    return null;
  }

  removeAt(index) {
    if(!this.head) return;
    if(index === 0) {
      this.head = this.head.next;
      return;
    }
    // Node before the one I want to remove
    const prev = this.getAt(index - 1);
    // Handling out of bounds index
    if(!prev || !prev.next) return;
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }
    if(index === 0) {
      // Create new node then move pointer to head to new node
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    let node = new Node(data, prev.next);
    prev.next = node;
  }
}

module.exports = {Node, LinkedList};