/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt.

Example 1:

Input: num = 16
Output: true

Example 2:
Input: num = 14
Output: false

Pseudocode:
- I could try a binary search to divide data into halves
- So if the number is 9, I find the midpoint and square it. If it is greater than 9, 
  I can elimate entire right half of data set.
  1234 5 6789 ---> 5 is mid, 5 * 5 is not 9.So I can remove right half of data
  - I do this process again, find new mid. Mid is now 2. 2 * 2 is less than 9. 
    - So I elimate left half of data set.
  - I have numbers: 3, 4. 3 is the mid. 3 * 3 is 9! boom!

- If num is < 1, it can't be a perfect sq as first perfect sq is 1, so I can return false
- Define two pointer variables, 'left' and 'right'
- Set left to 1 and right to the num

*/

const isPerfectSquare = num => {
 if(num < 1) {
  return false;
 } else if (num === 1) {
  return true;
 }

 let left = 1;
 let right = num;

 while(left <= right) {
   let midpoint = left + Math.floor(right - left / 2);
   if (midpoint * midpoint === num) {
    return true;
   } else if (midpoint * midpoint > num) {
    // Shift right pointer, as mid is too large. Reassign right to num left of midpoint
    right = midpoint - 1;
   } else if (midpoint * midpoint < num) {
    // Shift left pointer as mid is too low. Left pointer is shifted to num right of midpoint
    left = midpoint + 1
   }
 }
 // No number is square root of num
 return false;
}
