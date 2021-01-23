'use strict';

/*Create a queue data structure. The queue should be a class
with the methods 'add' and 'remove'. Adding to the queue should 
store an element until it is removed.
*/

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    this.data.pop()
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

/* Weave: Implement a weave function. Weave receives two queues as args and combines
the contents of each into a new, third queue. The third queue should contain
the alternating content of the two queues. The function should handles queues of 
different lengths without inserting 'undefined' into the new one.
*/

const weave = (sourceOne, sourceTwo) => {
  const q = new Queue();
  // As long as element is returned from peek...
  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if(sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
};


