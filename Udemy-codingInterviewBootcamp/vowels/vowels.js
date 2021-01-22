'use strict';

/* Write a function that returns the number of vowels used in a string. 

Ex: vowels('Hi there') ---> 3
Ex: vowels('Why do you ask?') ---> 4
*/


/* Solution one

- Create counter var
   - initialize with default value of 0;
- Iterate through chars in string
   - If given char is a vowel, increment counter
- Return counter
*/
const vowels = str => {
 let count = 0;
 const checkVowels = ['a', 'e', 'i', 'o', 'u'];

 for(let char of str.toLowerCase()) {
   if(checkVowels.includes(char)) {
     count++
   }
 }
 return count;
};
console.log(vowels('My name is Riva'));

//Solution 2: Using Regex

const checkForVowels = str => {
  // Returns an array if matches are found
  // Returns null if no matches are found
  // g in Regex doesn't stop at first match, i handles cases for me (like toLowerCase())
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}