'use strict';
/* Return the 'middle' node of a linked list.
If the list has an even number of elements, return the node at the end of the first half of the list.
Do not use a counter variable, do not retrieve the size of the list, 
and only iterate through the list one at a time.

Ex: 
const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
// midpoint(l);// returns {data: 'b'};
*/

/*
- Create two variables, slow and fast
- Both will point at first node for starters
- Iterate through list
- For every iteration, advance the slow var forward by one node
- Advance the fast variable forward by two nodes
   - Check to see if the one after the fast node is defined and if the one after that is defined
   - If they exist, continue iterating
   - If they don't then fast must be at end of list which means slow is at the midpoint
*/
const midpoint = list => {
  let slow = list.head;
  let fast = list.head; // alteratively I can say, let fast = getFirst();
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}