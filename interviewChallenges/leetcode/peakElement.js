/*
A peak element is an element that is strictly greater than its neighbors.
Given an integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

Pseudocode:
  - I can use a binary search to help me find the peak element
  - Create a variable called start and initialize it at 0;
  - Create an 'end' variable and set it arr.length - 1;
  - Find mid , which is Math.floor((start + end) / 2)
    - IF mid is already the peak element, return arr[mid]
     - If arr[mid] > arr[mid + 1], I need to look for peak on left half
     - Set 'end' to mid
     - ELSE the peak is on the right half of arr so
       I set 'start' to mid + 1;
 - return start
*/

const findPeakElement = nums => {
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let mid = Math.floor((start + end) / 2);
    if(nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

console.log(findPeakElement([1,2,1,3,5,6,4]))