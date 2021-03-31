/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. 
Its maximum jump length is 0, which makes it impossible to reach the last index.

Alright, how can I solve this?
- I know that a 0, we can't move forward...but I can't just look for 0's.
- Why can't I just start at last index?
  - If I am on the last index, of course I can get to the last index!
  - I look to indices of left...
   - Are there any steps to get me back to the end?
   
- How do I know what leftmost index is that can get me to the target index (the final index)?
- I need to take index 0 and see if I can get to the target index
  - So, if I check the index I'm on is greater than or equal to the target index.
  [2, 3, 1, 1, 4], leftmost index is 4
  - Iterate backward
    [2, 3, 1, 1], on index 3, can I get to 4? 3 + 1 is 4, so yes!
    - move to next element
     [2, 3, 1], on index 2, can I get to index 3? 1 + 3 is >= 3 so yes!
     - Move up again
       [2, 3] on index 1, can I get to index 2? 1 + 3 >= target so yes!
       - Move again
        [2], final index, at 1. 0 + 2 >= 1, so yes!
- So I can get to last index from the first one!

*/

const canJump = nums => {
  // leftmost valid index is final index in arr
  let lastIndex = nums.length - 1;
  for(let i = nums.length - 1; i >= 0; i --){
    // Is index I'm on the leftmost valid index?
    if(i + nums[i] >= lastIndex) {
      // Update last index to be index i'm on
      lastIndex = i;
    }
  }
  return lastIndex === 0;
}