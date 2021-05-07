/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Psedocode:
 - Declare a variable called storage and set to empty object
   - I have to keep track of all elements in array so an object assists me with this
  - Declare a variable called totalSum and set it to 0
 - loop over nums array using for of
   - Create condition to see if the object doesn't contain key,
     - itialize it
     - increment storage
- Loop over storage object
  - Elements that have value of 1 are unique 
  - Loop through elements in object using for in
   - I can use destructuring and Object.entries
    - Here I know that if val of storage is equal to one, then I need to add the val
      to totalSum;
    - Since Object.entries will turn keys into strings into an array, I need to turn
     the key back into a number (use Number)
    - return totalSum
*/

let sumOfUnique = function(nums){
  let storage = {};
  let totalSum = 0;

  for (let key of nums) {
    if(!storage[key]){
      storage[key] = 0;
    }
    storage[key]++
  }
  
  for(const [key, val] of Object.entries(storage)) {
    if(val === 1){
      totalSum += Number(key);
    }
  } 
  return totalSum;
}
console.log(sumOfUnique([2, 2, 4, 4, 1, 6]));

var sumOfUniqueNums = function(nums) {
  let sum = 0;
  const storage = {};
  
  for (let i = 0; i < nums.length; i++) {
    storage[nums[i]] = (storage[nums[i]] || 0) + 1;
    if (storage[nums[i]] === 2){
      sum -= nums[i];
    }
    if (storage[nums[i]] === 1) {
      sum += nums[i];
    }
  }
  return sum;
};
