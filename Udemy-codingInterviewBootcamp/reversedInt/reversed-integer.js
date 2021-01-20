'use strict';

/*Given an integer, return an integer that is the reverse ordering
of numbers

Ex: reverseInt(15) === 51
Ex: reversedInt(981) === 189
Ex: reversedInt(-15) === -51
Ex: reversedInt(500) === 5
Ex: reversedInt(-90) === -9;

Input: num
Output: num

- First, I know how to reverse a string
- However, I can turn nums into strings by using toString() method and the parseInt() method to turn it back into a num
- I can also use Math.sign(), by passing in num (if positive it returns 1, if negative returns -1)
- 
*/

const reverseInt = n => {
  // Reverse num 1st
 const numToStringReversed = n.toString().split('').reverse().join('');
 if(n < 0) {
   return parseInt(numToStringReversed) * -1;
 }
 return parseInt(numToStringReversed);
}

const reverseInteger = n => {
 const numToStringReversed = n.toString().split('').reverse().join('');
  // Math.sign() takes place of if statement above
  return parseInt(numToStringReversed) * Math.sign(n);
};