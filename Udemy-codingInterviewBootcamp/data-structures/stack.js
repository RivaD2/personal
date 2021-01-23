'use strict';

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

/*
Two become One: Queue from a Stack question
Implement a queue data structure from two stacks.
Queue should implement the methods 'add', 'remove' and 'peek'.
DO NOT create an array inside of the 'Queue' class

- I will create stackA and stackB
- I don't want stack behavior, but rather FIFO behavior
- How can I use two stacks to make FIFO behavior?
- For add, I have to take the record and add it to stackA
- Then I can add in another record to stackA etc.
- If I call pop on StackA, the records I got out would be reverse of what I want(FILO)
- With stacks, I can't reach to the very bottom automatically...
- To remove the first element I added in the stack, I will have to pop records out of stackA one at a time
- For every record popped, I take it it and push it into stackB (so it goes to the bottom)
- I will use peek to see if there are other records left
- I then continue to pop and push into stackB
- Peek at stackA, pop and push etc.
- When it is empty, I can then say that the one I want is at the top of stackB, so I can pop one time
- Then I have to prepare for next operation by popping/push out remaining elments back into stackA.

*/

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }
  
  add(data) {
   this.firstStack.push(data);
  }

  remove() {
    while(this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    // Restore state of stack before returning 
    const record = this.secondStack.pop();

    while(this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return record;
  }

  peek() {
    while(this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    const record = this.secondStack.peek();
    // Take everything out of second stack and move it back to first
    while(this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return record;
  }
}

