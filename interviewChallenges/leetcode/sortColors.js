/*
Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You are not able to use library sort function

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/

/*
 - Here I need to put 0's to front, 2's to back and 1's will fall in middle
 - Assign variable 'first' the starting index (0)
 - Assign variable 'last' to end of nums array (nums.length -1)
 - Assign variable current to 0;
- Use while loop to iterate
   - while current <= end and start < end
     - use start to put 0's at front, it sits at next spot a zero should go at beginning of array
     - use end to put 2's at back, end sits where next two should go
         - I only swap elements if I see a 2
     - use current to move along to current number each pass

*/
const sortColors = nums => {
  if(nums.length == 0 || nums.length == 1) return;
  
  let first = 0;
  let last = nums.length - 1;
  let current = 0;
  
  while(current <= last && first < last) {
    if(nums[current] === 0){
      // Swap to front
      nums[current] = nums[first];
      nums[first] = 0;
      first++
      current++
    } else if(nums[current] === 2){
      nums[current] = nums[last];
      nums[last] = 2;
      last--
    } else {
      current++
    }
  }
}

const sortTheColors = nums => {
  let first = 0;
  let last = nums.length - 1;
  let temp;

  for(let i = 0; i <= last;){
    let num = nums[i];
    // Update variables and do the switch
    if(num === 0){
     temp = num;
     nums[i] = nums[first];
     nums[first] = temp
     i++
    } else if(num === 2){
        temp = num;
        nums[i] = nums[last];
        nums[last] = temp;
        last--
    } else {
      i++
    }
  }
}