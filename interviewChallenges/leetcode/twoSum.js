'use strict';

/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

/*
- Ok, so the brute force way here would be to run two for loops
  - compare i an j and if i plus j is equal to target, then boom!
  - Time complexity on this is not ideal
- So,what are other ways to solve this?
  - I can go through length of nums once and identify whether second num exists
  - BUT HOW?
  - What do I have available to me, what data structures do I have?
  - As I iterate, I can store the values into storage (in an object!)
     - keys would be nums and value in obj are indexes 
  - On each iteration, I add values to dict 
*/
// time: O(n) space: O(n)
const twoSum = (nums, target) => {
  let storage = {};
  
  // As I iterate, I am extracting index and value out
  for(let [index, num] of nums.entries()) {
    if(storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }

}