/*
Detect Capitals:

We define the usage of capitals in a word to be right when one of the following cases holds:

- All letters in this word are capitals, like "USA".
- All letters in this word are not capitals, like "leetcode".
- Only the first letter in this word is capital, like "Google".


Given a string word, return true if the usage of capitals in it is right.

Example 1:

Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false

Pseudocode:
 - Regex would be one way to solve this
 - I can get a count of how many capitals there are in the input string
   - Iterate over every character in the string
     - I can increase this IF there are capitals
   - if the current character I'm is equal to itself in uppercase,
     then that means it was originally uppercase. Same goes for lowercase.
     - If so, then increment the count
  - I have three conditions above that return true.
    - If count ==== word.length, or it is equal to 0, OR the first char is 
    uppercase then I know I can return true;
*/

const detectCapitals = word => {
  let capitalsCount = 0;
  for(let i = 0; i < word.length; i++) {
    let currentChar = word[i];
    if(currentChar === currentChar.toUpperCase()) {
      capitalsCount++;
    }
  }
  return (
    capitalsCount === word.length || 
    capitalsCount === 0 || 
    word[0] === word[0].toUpperCase() 
    && capitalsCount === 1
  ) 
};