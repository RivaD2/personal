'use strict';

/* Given a linked list and integer n, return the element n spaces
from the last node in the list. Do not call the 'size' method of the
linked list. Assume that n will always be less than the length of the linked list.

const list = new List();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
fromLast(list, 2).data; //'b'
*/

/* 
- Create two pointers fast and slow
- Set them both to start at head, or first node
- One pointer isn't necessarily moving faster, it is just that one pointer is ahead in list
- Advance fast to whatever n is, don't touch slow
- After fast has moved, then I can enter second phase
- Advance slow and fast by one index
- Ask, is fast pointing at last element in list?
   - If no, move pointers forward one node again
- Once fast is looking at last element(last elements next property is null), slow must be n elements behind it
- Return slow
*/

const fromLast = (list, n) => {
  let slow = list.head;
  let fast = list.head;

  while(n > 0) {
    // Move fast n elements forward
    fast = fast.next;
    n--
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};