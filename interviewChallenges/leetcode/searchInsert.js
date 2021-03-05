'use strict';
/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/*
 - Well, I have a sorted array, so binary search time it is!
 - Create left and right pointers
   - Set  left to 0
   - Set right to nums.length - 1;
   - If target < nums[left] return 0
   - If target > nusm[right] return nums.length;

  - Iterate through nums using while loop
    - while left <= right
        - Shrink search  by setting mid
    - If target === the new mid nums[mid] return mid;
       - Else if target < nums[mid] 
           - right = mid -1 (move right down)
       - Else 
          - left = mid + 1 (move left up)
    - return left;
*/
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  if(target < nums[left]) return 0;
  if(target > nums[right]) return nums.length;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(target === nums[mid]) return mid;
    else if(target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
console.log(searchInsert([1, 2, 3, 4, 5, 6], 4))
