/*
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.
Return the power of the string.

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Pseudocode:
 - This is really like longest substring, except I am returning the length
 - I can iterate over the string and check curr max vs the overall max length
 - First, create 'max' variable and set it to 0;
 - Second, create 'currentMax' variable and set it to 1
    - currentMax will always at least be 1, at least 1 letter.
- Iterate using for loop
  - I can create a variable to hold value of current char and next char
  - IF those two are the same thing,if there is a match, I can increase my currentMax
    - ELSE, if no match, I can set the max to be the highest of max and currentMax
- Return max
*/

const maxPower = s => {
  let max = 0;
  let currentMax = 1;

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    const nextLetter = s[i + 1];
    if (currentLetter === nextLetter) {
      currentMax++
    } else {
      max = Math.max(max, currentMax);
    }
  }
  return max;
}
