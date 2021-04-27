/*
Write a function to delete a node in a singly-linked list. 
You will not be given access to the head of the list, instead 
you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Pseudocode:
4 -> 5 -> 1 -> 9 -> null
 - Usually I have access to node in front of what I want to delete
 - The node in front would be set to node after the node I want to remove
 4 -> 1 -> 9 -> null
- This question doesn't give me access to node in front
 5 -> 1 -> 9 -> null
- Each node of course has it's next property that points to next node
- Each node has a value and next property
- I need to make the node I'm on look like node that is after
  - The next property needs to point to node after the node I'm pointing to now
  - Using example above, I can make 5 a 1;
   4 -> 1 -> 1 -> 9 -> null
          - This arrow needs to point to node after the next node ( I skip over next 1, next.next)
    4 -> 1 -> 9 -> null
*/

const deleteNode = node => {
  // In example, 5 becomes a 1
 node.val = node.next.val;
// change next reference of node I'm on
// In example above, 1 now points all the way to 9
 node.next = node.next.next;
}