/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

- Create an empty object to keep track of how many times something appears
- This problem starts off similar to 'mostRepeatedWords'
- Initialize num to 1 if not seen in obj, or, increase count
- IN separate loop, iterate over keys in storage obj
- if obj[key] > Math.floor(nums.length / 2), then I return the key
    - I use Math.floor here to round down
*/

const majority = nums => {
  const storage = {};
 
  for(let num of nums) {
      storage[num] = storage[num] + 1 || 1;
  }
  // Iterating over keys
  for(let key in storage) {
    if(storage[key] > Math.floor(nums.length / 2)) {
      return key;
    }
  }
}