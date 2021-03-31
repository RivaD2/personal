/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []
*/

/*
- This challenge is similar to finding two nums that add up to a target num
- I know that the target has to be 0
- Assign a variable, 'combos' to empty array to hold combinations of nums
- Loop over all nums and create three pointers:
  - Create variable to keep track of index ( index = 0)
  - Keep track of j, j = i + 1
  - Keep track of k, k = j + 1
- As we iterate:
   - we are moving each pointer individually down the loop
   - Once k hits end of array, j++
     - set k to k= j + 1
     - Once j hits end, j++
     - Set i to i = j + 1
- This should give us all combinations
- If i, j and k pointers add up to 0 and wwe have NOT seen element at pointer before
   - push element into combos arr
- Sum triplet pairs up to see if they equal 0
*/

// Three for loops here is brute force solution

const threeSum = nums => {
  const combos = [];

  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = i + 1; j < nums.length - 1; j++){
      for(let k = j + 1; k < nums.length; k++) {
        const iPointer = nums[i];
        const jPointer = nums[j];
        const kPointer = nums[k];
        if(iPointer + jPointer + kPointer === 0 && combos.indexOf(combos) === -1) {
          combos.push(`${iPointer} ${jPointer} ${kPointer}`);
        }
      }
    }
  }
  return combos;
}

/*
- Assign variable 'results' to empty array to hold combinations of nums
- Start by sorting array of nums from negative to positive
- I can use two pointer technique here
 - Create left and set to 0;
 - Create right and set to nums.length - 1;
  
- Iterate over array using for loop
  - If i > 0 and the current element is equal to the one before, continue
    (this covers duplicates, it will pass over value if two are equal)
  - Reassign left and right pointers
    - i is current index I start from
    - i, left and right would be three pointers
  - Use while loop to iterate, checking if left is less than right
    - while that is the case, if sum is zero, then I can push the 
      current element, the left element and the right element
      - otherwise I will move left up and then decrement right pointer
  - I will need to check if there are duplicates
    then return the results array
- Need to get return value showing as a set of nums
*/
const threeSumChanged = nums => {
  nums.sort((a, b) => a - b);
  let result = [];

  let left = 0;
  let right = nums.length - 1;

  for(let i = 0; i < nums.length - 2; i++) {
    if(nums[i] === nums[i - 1]) continue;
    
    left = i + 1;
    right = nums.length - 1;
    let sum = 0;

    while(left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if(sum === 0){
        result.push(nums[i], nums[left] + nums[right]);
        left++;
        right--;

        //check dupes
        while(left < right && nums[left] === nums[left -1]) {
          left++;
        }
        while(left < right && nums[right] === nums[right - 1]){
          right--;
        } 
      } else if(sum < 0) {
        right++;
      } else {
        left++;
      }
    }
  }
  return result;
}

console.log(threeSumChanged([-1,0,1,2,-1,-4]));