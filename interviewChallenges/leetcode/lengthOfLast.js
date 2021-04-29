/*
Given a string s consists of some words separated by spaces, return the length of the last word in the string. 
If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5

Example 2:
Input: s = " "
Output: 0

Pseudocode:
- Create a variable to hold length of str (lastWordLength)
  - if string length is 0, then return the current length
  - This variable serves as a counter' to hold count of letters
  - I have to count number of letters until I get a space
- Create a variable that will be set to boolean (true)
  - this variable tells us if the current element is an empty char
- loop through string backward
- If the character is not empty, boolean changes to false
  - length++
  - else, if I am not on an element before the non empty char,
   then I can break out of loop;
- return length
*/

const lengthOfLast = s => {
  let lastWordLength = 0;
  let beforeNonEmptyChar = true;
  
  if(s.length === 0) return lastWordLength;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      lastWordLength++;
      // Non longer before first non-empty char
      beforeNonEmptyChar = false;
    } else {
      // I've already hit letters by this point
      if (!beforeNonEmptyChar) {
       break;
      }
    }
  }
  return lastWordLength;
}
console.log(lengthOfLast("Hello World"));