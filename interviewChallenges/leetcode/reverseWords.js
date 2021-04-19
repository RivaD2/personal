/*
Given an input string s, reverse the order of the words.A word is defined as a sequence of non-space characters. 
The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Pseudocode:
 - Like many string challenges, I will need to split the string
 - Loop through the string
*/

const reverseWords = s => {
  const newString = s.split(' ');
  for(let word of newString) {
    let current = reverse(newString[word]);
    console.log('what is current', current)
  }
  return newString.join(' ');
}
console.log(reverseWords('the sky is blue'));

const reverse = s => {
  let newString = '';
  for(let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }
  return newString;
}

