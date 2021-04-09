/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

The steps:
- I can use the reverse() method
  1, 2, 3, 4, 5 , k = 2
  5, 4, 3, 2, 1

- reverse the k elements (the first 2 elements)
  4, 5
- reverse remaining elements
  4, 5, 1, 2, 3
- What if k is greater than arr.length?
  1, 2, 3, 4, 5  k= 7
  - I would have to use k % length of array
  - if k = 7, and length is 5, then I only have to rotate it 2 times!      
*/

const rotateArr = (nums, k) => {
  k = k % nums.length;
  // Reverse the ENTIRE arr
  // 1, 2, 3, 4, 5 ----> 5, 4, 3, 2, 1
  reverse(nums, 0, nums.length - 1);
  // Reverse 1st k elements in arr
   // 4, 5
  reverse(nums, 0, k - 1);
  // reverse rest of nums
  reverse(nums, k, nums.length - 1);
}

const reverse = (nums, start, end) => {
  while(start < end) {
    let firstElement = nums[start];
    nums[start] = nums[end];
    nums[end] = firstElement;
    start++
    end--;
  }
}
