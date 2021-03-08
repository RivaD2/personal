'use strict';

/* Given a string, return the character that is most commonly used in the string.
Ex: maxChar('abccccccd') === 'c'
Ex: maxChar('apple 1231111') === '1'

Common variations of this question where similar solution/technqiue can be used:
1. What is the most common character in the string?
2. Does string A have the same characters as string B (is it a valid Anagram?)
3. Does the given string have repeated characters in it?

The questions above, any questions about comparing nums between two strings, or
counting nums, I can:

- Take string and convert it into an object
- The keys of the obj are characters from string
- Values are the number of times the character has been found
- Basically I create a character map, an object where I take every
character out of source string, add it to key and the value for each key is number of times
the letter has been found in the string.
*/

// THe only difference in maxChar vs maxWord, is I don't have 
// split the string...
const maxChar = str => {
 let charMap = {};
 // Iterate throgh map, if char has more uses than max, set max to new value
 // Set maxChar for character(key) that is responsible for num set to max
 let max = 0;
 let maxChar = '';

 for(let char of str) {
  if(charMap[char]) {
    charMap[char]++
  } else {
    charMap[char] = 1;
  }
 }
 // For in for object iteration to find letter most common 
 for(let char in charMap) {
   if(charMap[char] > max){
     max = charMap[char];
     maxChar = char;
   }
 }
 return maxChar;
};

