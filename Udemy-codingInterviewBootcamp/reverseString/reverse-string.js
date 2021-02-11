'use strict';

// Write a function to reverse a string

/*
Solution 1:
Create empty string
Iterate over string provided
For each character in the provided str, take the character and add it to start of 'reversed'
Return variable reversed*/

const reverseString = str => {
  let reversedString = '';
  for(let character of str) {
    reversedString = character + reversedString;
  }
  return reversedString;
}

// Solution 2:
const reverseStr = str => {
  return str.split('').reverse().join('');
};

// Solution 3:
const reversedString = str => {
  // acc is reversed string and second arg is current element in array
  // Take curr and add it to reversed
  return str.split('').reduce((acc, curr) => curr + acc,'');
}