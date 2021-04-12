/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time 
results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

- bruteforce is to manually check every element...
- If I have a sorted arr, I can use a binary search.
  - But how as the numbers might not be sorted anymore after rotation?
  - First check if arr is rotated in the first place
    - An un-rotated array's first value is always < last value
    - IF the arr is not sorted, then the minimum number HAS to be the FIRST value
  - If sorted arr is rotated, the first value is > last value

- To find min:
   - Look for inflection point
   - If number to left is larger, then I know I'm at a minimum
     - OR, if number to the right is smaller, then number to right is the minimum
- Use the binary search, having left and right pointer
      - Calc mid value and check if mid is at inflection point
      - If num to right of mid is smaller, right is the minimum
      - If num to left of mid is larger, I'm at the minimum
  - If mid value IS NOT at the inflection point,
    - calclulate mid value with value at left pointer
      - If mid is greater than left, move left up to mid to focus on right
      - if mid is smaller than left, move right down to mid
*/

const findMin = nums => {
 let left = 0;
 let right = nums.length - 1;

 if (nums.length === 1) return nums[0];
 // Arr is not rotated at all, so return min which is always on left
   // in normal sorted arr
 if (nums[left] < nums[right]) return nums[left];

 // In rotated sorted arr now, so run binary search
 while(left <= right){
   const mid = Math.floor(left + right / 2);
   const leftValue = nums[left];
   const midValue = nums[mid];
   const leftOfMidpoint = nums[mid - 1];
   const rightOfMidpoint = nums[mid + 1];

   // If mid is at inflection point, all values should be smaller
   // If this never runs, mid value is not at inflection point
   if(midValue > rightOfMidpoint) {
     return rightOfMidpoint;
   } else if (leftOfMidpoint > midValue) {
     return midValue;
   }
   
   // Mid not at inflection point, so shift left and right accordingly
   if(midValue > leftValue){
     left = mid + 1;
   } else {
     right = mid - 1;
   }
 }
}