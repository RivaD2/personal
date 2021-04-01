/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 
How do I solve this?
 - If I have done the find vowels challenge, then this can be useful
 - I can create a storage variable that will hold all vowels (object, or arr...)
 - Iterate over the input string and get them in storage 
   - storage should tell me which chars are vowels using boolean
- Strings are immutable so I can turn the string into an arr using str.split('')
  - Once the str is an arr, I can modify it directly
- I know that vowels will have to swap, so I can create two pointers
  - Create 'left' pointer and set it at index 0
  - Create 'right pointer and set it arr.length - 1;
    - WHILE the left < right, make sure left is at valid vowel
     - IF not, move it up
    - Do the same for the right pointer, moving bounds down
  - I can swap the vowels by creating a swap function
*/
const reverseVowels = s => {
  const vowels = {};
  for(const char of 'aeiouAEIOU') {
    vowels[char] = true;
  }

  const characters = s.split('');
  let left = 0;
  let right = s.length - 1;

  while(left < right) {
    while(left < right && !(s[left] in vowels)){
      left += 1
    }
  
  while(left < right && !(s[right] in vowels)){
    right -= 1;
  }
  swap(characters, left, right);
  left += 1;
  right -= 1;
 } 
 return characters.join('');
}

const swap = (arr, i , j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}