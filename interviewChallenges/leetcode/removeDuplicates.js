/*Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
*/

const removeDuplicates = nums => {
  // If arr is sorted, any dupes would be right after the one I'm currently on
  // I have to compare two elements next to another ALWAYS
  // Keep track of index of where I am placing things
  // First number is always unique, meaning it will never be a duplicate

  // start after first num
  const index = 1;
  for(let i = 0; i < nums.length - 1; i++) {
    // If two nums adjacent are NOT the same
    if(nums[i] !== nums[i + 1]) {
      // Place current number at index I'm on
      // If everything is at correct index, index should hold last unique element of array (length of new arr)
      nums[index++] = nums[i + 1]
    }
  }
  return index;
}
console.log(removeDuplicates([1, 1, 4, 4, 4, 5, 6]));

const removeDuplicateNums = nums => {
  // Use two pointer technique
  // Slow pointer starts at index 0
  // The second pointer, fast,  starts right after index 0;
  // Check is done to see if fast pointer is equal to slow pointer
  // Fast keeps moving forward each time it hits duplicate element
     // Fast is constantly compared to slow

  //slow
  let i = 0;
  //fast
  for(let j = 1; j < nums.length; j++) {
    // if slow is equal to fast
    if(nums[i] != nums[j]) {
      nums[++i] = nums[j];
    }
  }
  // length
  return i + 1;
}
console.log(removeDuplicateNums([1, 1, 2, 3, 4]))