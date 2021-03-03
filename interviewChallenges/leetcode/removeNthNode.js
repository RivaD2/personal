'use strict';

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

/* 
  - I know that the index starts from 1, rather than 0
  - I know that this is a singly linked list
  - What if I have to delete from front of list?
     - I could traverse list twice, but this would increase time
  - Instead, I can use the two-pointer method
     - Create a dummyNode in front of head to prepare for removing reference of node to be deleted
    - create start/front (fast) pointer
    - create end/back (slow) pointer
      -set each pointer to dummyNode
      - We create these pointers so that slow is 2 behind fast
    - These would move at same speed until front pointer hits end of list
    - Run a for loop
  - I need to remember that I can't simply move to node I want to delete
    - I have to change the reference of the previous node to node.next.next
*/
// space O(1), space O(l)
const removeNthFromEnd = (head, n) => {
  const dummyNode = new ListNode();
  dummyNode.next = head;

  let front = dummyNode, back = dummyNode;
  for(let i = 0; i < n; i++) {
    front = front.next;
  }
  while(front.next) {
    // move front and back pointer
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return dummyNode.next;
}

const removeNthNode = (head, n) => {
  const dummyHead = new ListNode(null);
  dummmyHead.next = head;

  let fast = dummyHead, slow = dummyHead;

  for(let i = 1; i < n + 1; i++){
    fast = fast.next;
  }
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
}