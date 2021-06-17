/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray 
[numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target.

If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Pseudocode:
 - I need the smallest sum of contiguous elements
 - A two pointer problem:
    - I can create two variables that represent pointers and set them to starting index (0)
    - One holds left boundary of left boundary of sub array, other holds the right boundary
- Create a variable 'result' and set it to Infinity
 - Loop through the array and increment sum
    - while the sum is >= target, (I am over the sum I want)
    - set result to hold value from min value calcuated 
    - set sum to be the value from -= nums[pointerTwo]
    - move PointerTwo

  As i iterate, I am moving on from elements in the front of array and adding them
  on from back, trying to find the smallest subarray that equals the target
*/
const minSubarraySum = (arr, target) => {
  let pointerTwo = 0;
  let runningSum = 0;
  let result = Infinity;

  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];
    // Once I am over the sum I want, I need to update the min subarray length
    // remove value present and move pointerTwo 
    while (runningSum >= target) {
      result = Math.min(result, i - pointerTwo + 1);
      runningSum -= arr[pointerTwo];
      pointerTwo++;
    }
  }
  if (result === Infinity) {
    return 0;
  } else {
    return result;
  }
}
console.log(minSubarraySum([2,3,1,2,4,3], 7))