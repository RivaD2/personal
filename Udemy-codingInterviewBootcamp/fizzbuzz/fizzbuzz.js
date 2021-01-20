'use strict';

/* Classic fizzbuzz challenge:

Write a program that console logs the numbers from 1 to n.
For multiples of 3, print 'fizz', instead of the number and for
multiples of 5 print 'buzz'. For numbers which are multiples of 
both 3 and 5, print 'fizzbuzz'.

Ex: fizzBuzz(5);
// 1
// 2
// fizz
// 4
// buzz

- Can use modulo for this challenge to determine remainder of num
- Can use ternary ops etc. 
- I can condense multiplies of 3 and 5 to  if(i % 15 === 0);
*/


const fizzBuzz = n => {
 for(let i = 1; i <= n; i ++) {
   // Is num multiple of 3 and 5?
   if(i % 3 === 0 && i % 5 === 0) {
     console.log('fizzbuzz');
   } else if(i % 3 === 0) {
     // Is num multiple of 3
     console.log('fizz');
   } else if (i % 5 === 0) {
     console.log('buzz');
   } else {
     console.log(i);
   }
 }
};