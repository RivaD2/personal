/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity 
and O(n) runtime complexity?

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
2 is the missing number in the range since it does not appear in nums.

How can I do this? The steps:
- I have to add up what total of indices should be and then compare it to total of 
  nums in arr
    - Ex: input: [3,0,1], missing Num: 2 --> Total: 4
      [0, 1, 2, 3] ---> Total: 6
      - Difference here is 2, which is the missing num
  - Create a variable to hold sum if no num is missing
    - Ex: [0, 1, 3], i = 0, 1, 2
      If no nums are missing, I would have one more index, i = 3 
      3 is the same as length of the arr, so sum = length + sum of indices
  - Create a variable to hold ACTUAL sum
    - sum = 0, 1, 3 (4)
      sumIfNoNumMissing = 3 + 0 + 1 + 2 (6)
  - Calculate diff between sumWithNoNumMissing and actual sum (2)
  - Return diff
*/

const missingNum = function(nums) {
  let sumIfNoNumMissing = nums.length;
  let actualSum = 0;
  
  // As I iterate, I have to add index to sum
  for (let i = 0; i < nums.length; i++) {
    sumIfNoNumMissing += i;
    // Actual Sum is all nums in arr 
    actualSum += nums[i];
  }
  return sumIfNoNumMissing - actualSum
}

