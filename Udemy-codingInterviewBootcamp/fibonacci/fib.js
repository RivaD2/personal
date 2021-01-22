'use strict';
/* Print out the nth entry in the fibonacci series. The fibonacci series 
is an ordering of numbers where each number is the sum of the preceding two.

Ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// Forms the first ten entries of the fibonacci series
Ex: fib(4) === 3
*/

// Iterative: O(n)
const fib = n => {
 const result = [0, 1];
 for(let i = 2; i <= n; i++) {
   // Have to get previous two 
   const a = result[i - 1];
   const b = result[i - 2];
   result.push(a + b);
 }
 return result[n];
};

// Recursive Solution
const fibonacci = n => {
  if(n < 2) return n;
  fib(n - 1) + fib(n - 2)
  return n;
}

//Memoized Solution
const memoizedFib = (n, memo = {}) => {
  if(n in memo) return memo(n);
  if(n <= 2) return 1;
  // Recursive calls here 
  memo(n) = fib(n - 1, memo) + fib( n - 2 , memo);
  return memo(n);
}