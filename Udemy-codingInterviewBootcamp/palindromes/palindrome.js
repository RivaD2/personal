'use strict';

/* Given a string, return true if the string is a palindrome or false 
if it is not. Palindromes are stings that form the same word if it is reversed.
**DO** include spaces and punctuation in determining if the string
is a palindrome.

Ex: isPalindrome('abba') === true
Ex: isPalindrome('abcde') === false
*/

const isPalindrome = str => {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const isItAPalindrome = str => {
  // Using every() array helper
  // Does a boolean check on every element of an array
  return str.split('').every((char, i) => {
    // Start at index 0 and get access to element on opposite site
    return char === str[str.length - i - 1];
  })
}