/*
Given an unsorted integer array nums, find the smallest missing positive integer.
Try and implement an algorithm that runs O(n) time and constant space.

Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2

Alrighty, how can I find the solution? The steps:
I will start first with bruteforce and then try and improve the algorithm.

- I can first remove duplicates by using a Set()
  - Set() holds unique values. I can use the spread operator with Set
    to get array without duplicates.
     - nums = [... new Set(nums)]
  - Filter out any negative nums or 0's
    - nums = nums.filter()- filtering out all nums > 0
  - Sort the array as well
  - Iterate over nums arr and check each number to see if it matches the index
    - Create variable j and initialize to 1
    - As I iterate, I ask,at index 0, do I have 1? at index 1, do I have 2? etc...
    

*/
const firstMissingPos = nums => {
  nums = [...new Set(nums)];
  nums = nums.filter(num => num > 0).sort((a, b) => a - b);
  
  let j = 1;
  for(let i = 0; i < nums.length; i++) {
    if(j === nums[i]) {
      j++
    }else {
      return j;
    }
  }
  return j;
}
console.log(firstMissingPos([2, 2, 2, -1, -4, 0, 1, 3]));

/* Now that I have bruteforce, how can I improve this solution?
- Because the  input arr is not sorted, it is hard to find things
- I can use an object to tell me all values
- Iterate over arr using for of loop

The steps:
- Create a variable called storage and set it to empty obj
- Iterate over nums using for loop and save each num into storage obj
  - storage[nums[i]] = 1;
- Run a second for loop, a separate loop
  - Set i to 1 this time as I know I want to see if first index value is 1
  - If I don't have storage[i], then I can return i
- If I can't find anything, return next value which is nums.length + 1;
  - Biggest missing positive I can have is the length + 1

O(n) Space and Time
*/

const firstMissingPositive = nums => {
  const storage = {};
  // Saving each num into storage obj
  // Finding something in obj should be constant time
  for(let i = 0; i < nums.length; i++) {
    storage[nums[i]] = 1;
  }
  // I can check if 1 is there, if so, check next num
  // If 1 is not inside obj, return i, which will be 1
  // If one is there, next num is checked. If it is not there, it is the new i.
  for(let i = 1; i <= nums.length; i++) {
    if (!storage[i]) {
      return i;
    }
  }
  return nums.length + 1;
}
console.log(firstMissingPositive([-2, 1, 0, 23, -5, 3]));

