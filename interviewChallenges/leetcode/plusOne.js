'use strict';

/*
Given a non-empty array of decimal digits representing a non-negative integer, 
increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, 
and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, 
except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/*
- I need to work through the input array backward 
- What happens when digits are greater than 9, how to do I handle those?
- O(n) time and O(1) space
- If last element is not a 9, increment it
*/
const plusOne = digits => {
    for(let i = digits.length - 1;i >= 0; i-- ){
      // no carry operation needs to be done if less than 9
      if(digits[i] < 9) {
        digits[i] = digits[i] + 1;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
    // if digits are all 9's, add change them to 0's
    // add one to front of array
    digits.unshift(1);
    return digits;
};

/*
- Key here is to look at last element in the array
- If it is not a 9, then I increment the number
- If it is a 9, what do I do?
  - Change 9 to 0 and keep looping until next element
  - Check if next element is a 9
    - If it isn't, increment it by 1
- What if each of the nums is 9?
  - Check if first num is 9, if so, change it to zero and keep doing this...
  - When last number is a 9, I have to change it 0 and add element to front of array
*/
const plusOneToInt = digits => {
 for(let i = digits.length - 1; i >= 0; i--){
   if(digits[i] !== 9){
     digits[i]++;
     return digits;
   } else {
     digits[i] = 0;
   }
 }
 digits.unshift(1);
 return digits;
}