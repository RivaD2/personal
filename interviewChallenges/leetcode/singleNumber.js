'use strict';

/*
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.
Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
*/

/* Create a storage object to hold count of elements as I iterate
(O(n)) time and space
-  I have to intialize storage[num] to 1 if not seen
   and if it's already in storage, storage[num]++
  - Then I can run a separate loop, this time checking
  if storage[key] === 1
- return the key
  */
   
const singleNumber = nums => {
  const storage = {};
  for(let num of nums) {
    storage[num] = storage[num] + 1 || 1;
  }
  for(let key in storage) {
    if(storage[key] === 1) return key;
  }
}
console.log(singleNumber([2, 4, 4, 4, 5, 5]));

