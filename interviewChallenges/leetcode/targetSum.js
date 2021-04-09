
/*
(Not exactly a leetcode solution, but it is similar to twoSum challenge)
Given an integer arr that is sorted, 1-10, find all the pairs from the arr
that equal the target num

input: arr (with ints)
output: integer pairs that add up to target

- This problem reminds me of twoSum, but this time, I don't need 
to find the indices that add up the target but rather the elements 
themselves that add up the target num. I can still use and object literal 
here to help me in storing elements in the nums arr.


How can I solve this?
 - If arr is sorted I could use binary search...
 - In this case, I can use an object to store elements 
- Create a variable named 'results' and set it to array
  - I can then push the pairs that add up to the target sum into this arr and return at end
- I can iterate using a for loop
  - if the key and the value add up to the target, push that pair into results arr
- When the elements is larger that the target sum, I can substract the target
  from the current element and set it to be the current element.
- Return the results array
*/
const pairsToTargetSum = (nums, target) => {
  let storage = {};
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (storage[nums[i]]){
      results.push([storage[nums[i]], nums[i]])
    } else {
      storage[target - nums[i]] = nums[i];
    }
  }
  return results;
}

console.log(pairsToTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10], 6));