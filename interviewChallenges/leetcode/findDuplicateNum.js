/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [1,1]
Output: 1

- create an object so I have a count of all the numbers
- Use for of loop to iterate over nums arr
  - If the number is not in storage, set the count to 1;
   - else return the number
*/

const findDuplicateNum = nums =>{
  let storage = {};
  for(let number of nums) {
    if(!storage[number]){
     storage[number] = 1;
    } else {
      return [number];
    }
  }
}