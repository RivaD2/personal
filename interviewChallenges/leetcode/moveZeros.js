/*
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

- Create a variable called 'index' so I know where to put non zero nums
- Iterate over the nums arr 
- Initalize 'num variable at nums[i]
  - IF num is not equal to zero, place it at start of array
    - index++
- I will need to run a separate for loop to fill 
rest of input array with 0's
*/

// Time: O(n), Space: O(1)
const moveZeros = nums => {
  let index = 0;

  for(let i = 0; i < nums.length; i++){
  const num = nums[i];
    if(num != 0){
      nums[index] = num;
      index++
    }
  }
  for(let i = index; i < nums.length; i++){
    nums[i] = 0;
  }
}