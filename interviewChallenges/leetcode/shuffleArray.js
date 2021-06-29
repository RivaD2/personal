/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

Ok, how do I approach this problem?
Pseudocode:


- Create 'shuffled' variable and set to empty arr (this is the return value)
- Create 'pointer' variable and set to n
- Loop through the nums arr, up until n (this covers first half of nums if looking at first example)
- push nums[i] to the 'shuffled', then push nums[j]
- Increment j
- Return ShuffledArr

first iteration (using first example above):
 - nums[i] is 2, j = n, and n is 3. so in shuffledNums I have [2, 3]
 second iteration
 - pointer has moved up, nums[i] = 5, j = 3,  so shuffledArr is now [2, 3, 5, 4]
etc.
*/

const shuffleArr = (nums, n) => {
  let shuffledNums = [];
  let j = n;

  for(let i = 0; i < n; i++) {
    shuffledNums.push(nums[i], nums[j]);
    j++;
  }
  return shuffledNums;
}

// I can do this without declaring extra variable, and just push all nums[i] as I am iterating up until n, then
// just directly push nums[i + n]. I will always push both the current element I am on at
// that time AND the current element that is n spaces from current.

const shuffleTheArr = (nums, n) => {
  let shuffledNumsArr = [];
  for(let i = 0; i < n; i++) {
    shuffledNumsArr.push(nums[i], nums[i + n]);
  }
  return shuffledNumsArr;
}