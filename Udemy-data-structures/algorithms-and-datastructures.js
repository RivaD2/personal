 'use strict'

 // TIMING OUR CODE (BIG O)
 // Compare two solutions to the same problem

 /* Let's say we want to write a function that calculates 
 the sum of all nums from 1 up to (and including) some number (n)*/

 // First Solution
 function addUpTo(n) {
     //total is an acc in this case
     let total = 0;
     //start loop and go up until n each time
     for(let i = 1; i <= n; i++) {
         total += i;
     }
     return total;
 }
 console.log(addUpTo(6));
 //this adds 6 +5+4+3+2+1 for a total of 21

// Second Solution
function addUpTo(n) {
    // this is more of a mathmatical formula
    // We take 6 + 1 first. then multiply by 6 and divide by 2
    // Please Excuse My Dear Aunt Sally come to mind??
    return n * (n + 1)/2;
}
console.log(addUpTo(6))
// See notes on how we compare these first two functions on notes.md file


