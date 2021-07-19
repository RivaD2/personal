import { Sorter } from './Sorter';

class Node {
  // Defined standalone notation as I don't want to define next node in chain
  // I want to create node first and then associate it with another node in chain later on
  next: Node | null = null;
  constructor(public data: number){}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    // If there is no head/list is empty, the new node becomes the head
    if (!this.head){
      this.head = node;
      return;
    }
    // Already have a head node, find last node in chain and add new node to that
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // Need ability to get node at specific index (kind of like using [] notation)
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  // Find node at left index and right index and compare
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex:number, rightIndex: number): void {
    // Not really swapping nodes here, swapping values
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHandValue = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHandValue;
  }

  print():void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}