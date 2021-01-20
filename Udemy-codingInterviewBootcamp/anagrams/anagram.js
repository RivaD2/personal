'use strict';

/* Check to see if two provided strings are anagrams of eachother. 
One string is an anagram of another if it uses the same characters in the same
quantity. Only consider characters, not spaces or punctuation. Consider capital letters
to be the same as lowercase.

Ex: isValidAnagram('rail safety', 'fairy tales') ---> True
Ex: isValidAnagram('RAIL! SAFETY!', 'fairy tales')----> True
Ex: isValidAnagram('Hi there', 'Bye there') ----> False
*/

/*Solution 1:

// Build character map of strA and strB and compare two maps
// Write helper function to help me with looping over strings
*/
const isValidAnagram = (strA, strB) => {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);
  
  // Compare keys of each map 
  if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
  // Iterate over one charMap, look at characters in it and compare to other charMap
  for(let char in charMapA) {
    if(charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
};

const buildCharMap = str => {
  const charMap = {};
  // Remove whitespace in string and change to lowercase
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    // Take map and assign a key of current character I am looking at
    // Increment value at that character
    // If char is not in charMap, add 1
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

/* Solution 2:

- Create helper function to remove space and punctuation
- Sort strings so characters in same order
- If they are identical, I have an anagram
*/

const isAnagram = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};

const cleanString = str => {
  // Make and array and sort, then change it back to str
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};