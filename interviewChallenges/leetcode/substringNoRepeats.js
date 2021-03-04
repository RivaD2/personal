'use strict';

/*
Given a string s, find the length of the longest substring without 
repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

/*
- I know that I have to return the length 
- Assuming that I will only look at lowercase letters (26 chars in total)
- If I first think of brute force solution, I could find all substrings
  of input and check if there are duplicate characters...

- OR, I can use the sliding window technique...
    - Go from left to right, see if substring has duplicates using while loop (or for loop)
    - Define two pointers, left and right
       - left pointer is farthest left letter in substring used to contract string
       - right pointer is the furthest right letter in substring used to expand string
       - To start, set both to 0;
    - Define variable 'maxLength' to keep track of substring length as I go
    - Check if substring has duplicates using Set (only unique values can be in a Set)
       - Check if letter at right pointer exist in Set
          - If it doesn't, add it to the Set
    - Check if new substring is longer than previous substring
            - If it is, update 'maxLength' 
            - As long as values in Set < maxLength,  maxLength stays the same
            - If it isn't continue, move right pointer over
*/

const lengthOfLongestSubstring = s => {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while(right < s.length) {
    if(!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      // Check if new string is longest substring so far
      // Which one is longer, current or size of new substring?
      maxLength = Math.max(maxLength, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLength;
}


/*
(Leetcode in JS Youtube example)
 - In this example, I am storing index in the storage variable
   - I use a for loop instead of a while loop
   - Letters in the string are keys, values are the indexes
   - At each step, I calculate size of longest substring
*/
const findLengthOfLongestSubstring = s => {
  let start = 0;
  let storage = {};
  let longest = 0;

  for(let i = 0; i < s.length; i++){
    let char = s[i];
    if(char in storage) {
      // Increment index if I;ve seen letter before
      start = Math.max(start, storage[char] + 1)
    }
    // Otherwise, keep adding char at particular index 
    storage[char] = i;
    // Calculate longest substring thus far
    longest = Math.max(longest, i - start + 1);
  }
}