'use strict';

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/*
  - Could use Horizontal method...
    - Take first and second word in array and compare letter by letter
      - Take the common prefix from 1st and 2nd words, and compare it to NEXT word in array
      - Move on to next word in array and compare that prefix to previous word prefix
    - This method wastes time 
  
  - Could use Vertical method...
    - Instead of comparing two words at a time, compare all words at once, 
      one letter at a time
    - IF all letters are the same, continue on
    - As soon as letters are different, we STOP
  
  - These have same space/time complexities, however, 
    Horizontal requires us to go through all the letters!

  - First, define prefix variable and set it to ''
  - Loop through characters(char, index) 
     - Loop through strings, returning single strings
     - If str[index] == char, then I can continue
     - If str[index] !== char, return prefix // strings don't match
    - If I get outside entire loop for strings, all prefixes match,
       - prefix = prefix + char
*/
const longestCommonPrefix = strs => {
 let prefix = '';
 if(strs.length === 0) return prefix;
 if(strs.length === 1) return strs[0];

 // Loop through characters in first string
 for(let i = 0; i < strs[0].length; i++) {
   console.log('length of string', strs[0].length);
  const character = strs[0][i];
  console.log('character = ', character);
  for(let j = 0; j < strs.length; j++) {
    console.log('what is j', j)
    if(strs[j][i] !== character) return prefix;
    console.log('what is strs[j][i] and character', strs[j][i], character)
  }
  prefix = prefix + character;
  console.log('what is prefix and character', prefix, character)
 }
 return prefix;
}
console.log(longestCommonPrefix('flower', 'flow', 'florist'));
