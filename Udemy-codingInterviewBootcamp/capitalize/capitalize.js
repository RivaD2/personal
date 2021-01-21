'use strict';

/* Write a function that accepts a string. The function should capitalize the 
first letter of each word in the string then return the capitalized string.

capitalize('a short sentence') ---> 'A Short Sentence'
capitalize('a lazy fox') ---> 'A Lazy Fox'

*/

/*
Solution 1:
Make and empty array 'words'
Split the input string by spaces to get an array
For each word in array
  - Uppercase the first letter of each word
  - join the first letter with the rest of the string using slice
  - push the result into 'words' array
- Join 'words' array into string and return it
*/
const capitalize = str => {
  const words = [];
  for(let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
};

/* Solution 2: 

- Create 'result' string which is the first char of the input
  string capitalized
- For each character in the string, 
    - IF the character to the left has a space, 
    capitalize it and add it to 'result'
    - ELSE, add it to 'result' without capitalizing it

    Weakness here is that it doesn't work well with the very first
    character. To solve this, when initial result string is created, 
    I need to create 'result' as first character of string capitalized
*/
const capitalizeFirstLetter = str => {
 let result = str[0].toUpperCase();
 for(let i = 1; i < str.length; i++) {
   // Look to the left to see if there is a space
   if(str[i -1] === ' ') {
     result += str[i].toUpperCase();
   } else {
     result += str[i];
   }
 }
 return result;
};
