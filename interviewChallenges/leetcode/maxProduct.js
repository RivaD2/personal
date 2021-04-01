/*
Given an integer array nums, find a contiguous non-empty subarray within the array 
that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

How do I solve this?
- I need to calculate the smallest product up to a given index
  and the maximum product up until a given index
- Create a max variable to hold 'max' value 
- Iterate through nums using for loop
- Get max and min values, this way I can track the negatives
  - negative numbers can be handled by using Math.min()
   - If prev product is min and multiplied by negative, it will be a max num
   - If prev product is maximum and multiplied by negative, it will be a minimum
- Return max product after updating the max to whichever value is larger
*/
//O(n) Time and space
const maxProduct = nums => {
  // same length as input arr
   let maxUpToIndex = [nums[0]];
   let minUpToIndex = [nums[0]];
   let max = nums[0];

   for(let i = 1; i < nums.length; i++){
     const num = nums[i];
     maxUpToIndex[i] = Math.max(
       // Input num itself 
       num, 
       // Input times largest product to left
       // or input times smallest product to the left
       num * maxUpToIndex[i - 1], 
       num * minUpToIndex[i - 1]
       );
       minUpToIndex[i] = Math.min(
        num, 
        num * maxUpToIndex[i - 1], 
        num * minUpToIndex[i - 1]
        );
        // Update max to whichever is larger, previous max or maxUpToIndex
        max = Math.max(max, maxUpToIndex[i]);
   }
   return max;
}