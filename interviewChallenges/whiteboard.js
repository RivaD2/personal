'use strict'
// Practice with Dynamic Coding with Alvin Zablan from Coderbyte


/* Challenge 1: Fibonacci Pattern
Write a function fib(n) that takes in a number as an argument.
The function should return the nth number in the Fibonacci sequence.
The first number in the sequence is always one.
To generate the next number in the sequence, we sum the previous two nums
*/

// Big O: time: O(n) and Space of O(n) using Recursion
// Implementing memoization by using a fast acting data structure
// Use an object where the keys will be argument to our fn and value will be return value
// Memoization can help us solve dynamic JS problems
// If I don't pass in a second arg in fn call, by default a memo with a new JS object will be created
// Memoization cuts down our recursive calls


const fib = (n, memo = {}) => {
    // Is arg in memo?
    if(n in memo) return memo(n);
    if(n <= 2) return 1;
    // Recursive calls here 
    memo(n) = fib(n - 1, memo) + fib( n - 2 , memo);
    return memo(n);
}

/* Challenge 2: gridTraveler
Say that I am a traveler on a 2D grid. I begin in the top-left corner and 
my goal is to travel to the bottom-right corner. I can only move down or right.

In how many ways can I travel to the goal on a grid with dimensions m * n?
Write a function gridTraveler(m,n) that calculates this.
*/

// I will still memoize this function so that time complexity is better
// Memoization allows us to store keys in memo and shorten recursive calls
// We pass down memo object to recursive calls
// Keys of object are args to fn, and values are values from function calls
// Big O time: O(m * n), space: O(n + m)
const gridTraveler = (m, n, memo = {}) =>{
  // Making sure nums don't get mixed
  const key = m + ',' + n;
  if(key in memo) return memo[key];
  // Are args in memo?
  // If the grid is only (1, 1) then we only have 1 way to go.
  // The start is the end.
  if(m === 1 && n === 1) return 1;
  // If either dimension is 0, the grid is invalid and there is no way to travel. 
  if(m === 0 || n === 0) return 0;
  // I have to sum going down and going right
  // If I am going down, I am decreasing rows(m) by 1
  // If I go right, I have same num of rows, but decrease n (columns)
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}
console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));

//Challenge 3: canSum
/* Write a function canSum(targetSum, nums) that takes in a targetSum and an 
arr of nums as args.
The function should return a boolean indicating whether or not it is possible to generate
the targetSum using the nums from the arr.
   - I can use an element of the arr as many times as needed
   - I can assume that all input nums are not negative
*/
// m = target sum, n = arr length
// Big O time: O(m * n), space: O(m)
const canSum = (targetSum, nums, memo ={}) => {
    if(targetSum in memo) return memo[targetSum];
    // Base cases: If targetSum reaches value 0 (in my tree) then I can always generate 0 by taking no nums from array
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    // Iterating through every element of nums arr
    for(let num of nums) {
        // I need branching logic (transiting from one node of tree to next)
        const remainder = targetSum - num;
        // I can resuse nums of arr as many times as I like
        // This function should return boolean 
        // If it is possible to generate reminder with nums of arr, then return true for targetSum
        if(canSum(remainder,nums, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

// Challenge 4: howSum
/* Write a function howSum(targetSum, nums) that takes in a targetSum and an arr of nums as args.
The function should return an arr containing any combination of elements that add up to exactly the targetSum.
If there is no combo that adds up to targetSum, return null.
If there are multiple combinations, just return a single one.
*/

// This is similar to the canSum. I am not returning a boolean
// Big O: Time is O(n^m * m) brute force without memo, space is O(m) 
// With memo: Time is O(n * m^2), space is O(m^2)(m keys and each key has a value)
const howSum = (targetSum, nums, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]
    // Base cases
    // 0 means that it is possible to generate targetSum
    if(targetSum === 0) return [];
    // Nums are only positive in this challenge
    if(targetSum < 0) return null;
    // Recursive call for every num in array
    for(let num of nums) {
        const remainder = targetSum - num;
        // Recursive call on howSum
        // Assigned to variable as we can return two different results
        const remainderResult = howSum(remainder, nums, memo);
        // In the tree, we wanted to return as soon as it is possible to generate remainder
        if(remainderResult !== null) {
            // The nums are the edges from the tree diagram(which are the nums in arr)
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;
};

//Challenge 5: howSum
/* Write a function bestSum(targetSum, nums) that takes in a targetSum and an arr
of nums as args. The function should return an arr containing the shortest combination of nums
that add up to exactly the targetSum.
If there is a tie for the shortest combo, return one of those*/


// This challenge is similar to howSum and canSum, but now I have to consider the shortest way
// Target sum is key in memo object
// Big O: time is O(m * n^2) and space is O(m^2)
// m = targetSum and n is length of arr
const bestSum = (targetSum, nums, memo = {}) => {
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  // Create variable to compare recursive calls to see which is shorter
  let shortestCombo = null;

  for(let num of nums) {
      const remainder = targetSum - num;
      // Reminder combo is shortest way to generate remainder
      const remainderCombo = bestSum(remainder, nums, memo);
      if(remainderCombo !== null) {
          // Created combo that gives me targetSum
        const combination = [...remainderCombo, num];
        // If combination is shorter than current shortest combo
        if(shortestCombo === null || combination.length < shortestCombo.length) {
            // The shorter combination wins out and can stay
            shortestCombo = combination;
        }
      }
 }

  memo[targetSum] = shortestCombo;
  return shortestCombo;
};

console.log(bestSum(7, [5, 3, 4,7]));
console.log(bestSum(8, [2, 3, 5]));

// howSum = Combinatoric problem/ How will you do it?
// canSum = Decision problem/ Can you do it? Ye sor no?
// bestSum = Optimization Problem/ What is the best way to di it?

/*************************************************************** */
// Inputs are not always nums in dynamic programming

// Challenge 6: canConstruct
/* Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.
   The function should return a boolean indicating whether or not the target can be constructed
   by concatenating elements of the wordBank arr. I can resuse as many elements in wordBank as needed.
   
   Ex: canConstruct(abcdef, [ab, abc, cd, def, abcd])----> true;*/

//m = target.length and n= wordBank.length, m is target
// Big O: time is O(n * m^2) as I don't have to explore duplicate subtrees
// Big O space is O(m^2)
const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    // Iterating through wordBank
    for(let word of wordBank) {
      // When is ok to make recursive call using that word
      // Have to make sure word is a prefix of target (I have a prefix, use it to shrink target)
      if(target.indexOf(word === 0)) {
        const suffix = target.slice(word.length);
        // Make recursive call on suffix, can I construct the suffix?
        // If suffix can be made and word is in wordBank, then target can be made
        if(canConstruct(suffix, wordBank, memo) === true) {
            memo[target] = true;
            return true;
        }
     }
  }
  memo[target] = false;
  return false;
};
