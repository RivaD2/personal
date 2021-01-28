'use strict';

/* Given a linked list, return true if the list is circular, false if it is not.

Ex: const l = new List();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
circular(l); //true
*/

const circular = list => {
  let slow = list.head;
  let fast = list.head;
  
  // If one of these is falsy, while loop ends and list is not circular
  while(fast.next && fast.next.next) {
    // Slow moves up one, fast moves up two
    slow = slow.next;
    fast = fast.next.next;

    // Is slow looking at node that is exact same instance in memory as fast?
    // If so, then I have myself a good ol' circular list!
    if(slow === fast) {
      return true;
    }
  }
  return false;
};