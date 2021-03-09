'use strict';

/*
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum 
and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1
*/


/*
- Solution will be at least one number
- I know I have to add as I go
-  Brute force here would be to check every element as I iterate
- I can think about total over time, accumulated value
- I also need to think about starting index, as no value is accumulated yet
- I need to know:
   - Do I need to add to current sum?
   - Or, do I need to restart count?
- I need to iterate and take largest possible sum at every index
  - sum = max(curr _ sum, curr)
- Create 'max' variable to keep track of max as I go
  - max = max(max, sum)
*/
const maxSubArray = nums => {
  let solution = nums[0];

  for(let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
}

// Big O(n)
// Space: constant
const maxSubArraySum = nums => {
 let sum = nums[0];
 let max = nums[0];

 for(let i = 1; i < nums.length; i++){
   // On each iteration, recalculate sum
   // Sum is equal to max of sum plus current value and current
   sum = Math.max(sum + nums[i], nums[i]);
   max = Math.max(max, sum)
 }
 return max;
}