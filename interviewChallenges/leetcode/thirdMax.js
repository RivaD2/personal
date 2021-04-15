/*
Given integer array nums, return the third maximum number in this array. 
If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Pseudocode:
- Create three variables:
   - max, secondMax, thirdMax
  - Set max to the first num, so max = nums[0];
  - Set secondMax and thirdMax to smallest possible num, -Infinity
- Loop over elements in arr
  - Ex: [1, 11, -4, 0, 1, 5]
  - Is 11 greater than the max (which is 1)?
    - Yes? Set max to 11, and secondMax to 1
    - Is -4 greater than max? No. Greater than secondMax? No. Greater
      than thirdMax? yes! thirdMax becomes current element (-4).
  - If secondMax is greater than or equal to secondMax, don't do anything, move on
  - max = 11, secondMax = 5, thirdMax = 0;
  - Keep repeating this until I've found thirdMax
  - If the arr has no thirdMax, then I can return
    the check on thirdMax and whether or not is is === -Infinity
    - If it is, then return max, not thirdMax
*/

const thirdMax = nums => {
  let max = nums[0];
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for(let num of nums) {
   let current = num;
   if(current > max) {
     thirdMax = secondMax;
     secondMax = max;
     max = current;
    // Making sure I don't have duplicates
   } else if (current > secondMax && current < max) {
      thirdMax = secondMax;
      secondMax = current;
    // Making numbers distinct here as well
   } else if (current > thirdMax && current < secondMax) {
      thirdMax = current;
   }
  }
  return thirdMax === -Infinity ? max : thirdMax;
}