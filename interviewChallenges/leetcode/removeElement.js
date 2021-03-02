/*
Given an array nums and a value val, remove all instances 
of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by 
modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. 
It doesn't matter what you leave beyond the new length.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, 
with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. 
For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], 
your answer will be accepted.

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, 
with the first five elements of nums containing 0, 1, 3, 0, and 4. 
Note that the order of those five elements can be arbitrary. 
It doesn't matter what values are set beyond the returned length.
*/

/*
- I know I have to iterate over every single num (0(n) very least)
  - I know I check if curr num is equal to value
  - DO something...
  - I have to find a way to delete the num if equal to value or move it
    - Perhaps I can splice...
    - I know that I am given x amount of space...
      - If not splice, then what are data structures I can use that is O(1) space?
      - Maybe I can create a pointer to check if current num matches value
        and store it at pointers reference
        
*/
const removeElement = (nums, val) => {
  if(!nums) return 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === val) {
      nums.splice(i, 1);
      //reset position after splice
      i--
    }
  }
  return nums.length;
}
console.log(removeElement([1, 2, 2, 2, 4, 5, 5], 2));

// I am shuffling nums around here, not deleting
const removeGivenValue = (nums, val) => {
  if(!nums) return 0;

  let pointer = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      // incrementing pointer if num !== val, movin' it on up
      nums[pointer] = nums[i];
      pointer++
    }
  }
  return pointer;
}

console.log(removeGivenValue([1, 4, 4, 2, 4, 5], 4));