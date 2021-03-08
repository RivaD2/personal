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
- Start by sorting array of nums
- Iterate over array using for loop
  - define three pointers:
    - left is assigned to current + 1
    - current = 0; (current index I'm on in loop)
    - right is assigned to last position in arr
- While iterating, I have sum which is curr + left + right
  - Is current greater or less than target?
    - If less than:
      - left++
    - If less reaches end of array and is still less than target:
      - current++
      - left = current + 1
    - If I find a solution, move both pointers:
        - push solution into results array
        - left++
        - right--
    - When left and right pointers meet:
      - reset current, current++
    - To cover duplicates:
        
*/
