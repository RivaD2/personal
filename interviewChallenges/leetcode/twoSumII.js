/*
Given an array of integers numbers that is already sorted in ascending order, 
find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, 
where 1 <= answer[0] < answer[1] <= numbers.length.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]

Pseudocode:
 - For regular twoSum challenge, I used an object to hold elements and count of those elements
 - I can use a two-pointer method
   - Create 'left' variable and set to 0;
   - Create 'right' variable and set to arr.length - 1;
- I know I have to return an arr holding indices of elements that add up to target
  - Create a variable 'results' and set it to empty arr. 
- I know the arr is sorted so this is helpful.
- I can use a while loop to iterate
  - While left < right
   - IF left + right === target, results.push(left + 1), results.push(right + 1)
  - If left + right's sum > target 
    - right--
  - else left++ (left + right < target)
  - Return results
*/

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  let result = [];

  while(left < right) {
    let leftNumber = numbers[left];
    let rightNumber = numbers[right];

    if (leftNumber + rightNumber === target) {
      result.push(left + 1);
      result.push(right + 1);
      break;
    } else if(leftNumber + rightNumber > target) {
      right--
    } else {
      left++;
    }
  }
  return result;
}