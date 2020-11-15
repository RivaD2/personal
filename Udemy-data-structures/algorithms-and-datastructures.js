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

//Two more examples of How Big O works
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
// If I pass in 10, it prints 10
// What is the Big O here?
// This loop will either go to 5 or n, whichever is larger
// What I care about is what happens as n grows larger
// If n is 10,000 the loop runs that amount of tie
// BIG O here is O(n)

// Big O here is O(1)
function logAtLeast5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// Ex: 1: Focusing on Space Complexity, NOT time complexity
function sum(arr) {
    // Sums all items in array
    let total = 0;
    // Loop goes from 0 to end of array
    // Add value of each item in array to total
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
/* What parts of this function take up space?
  - One number, the variable total
  - Another number, i
  - THAT's it, for SPACE
  - No matter what the size is of arr, it doesn't have an impact on space
  - The two variables, i and total will always exist
  - So, the example above is O(1)
*/

//Ex: 2:: Focusing on Space Complexity, NOT time complexity
function double(arr) {
    // Takes an array and doubles values
    // This function makes a new array
    let newArr = [];
    //loops over length of first array and multiplies items
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

/* What parts of this function take up space?
    - The array gets longer, and longer, and longer directly in proportion to the  input
    - The space taken up is proportionate to input
    - So, it is O(n) space!!
*/

// STEP 3: Break Down the problem:
//Write a function which takes in a string, and returns counts of each character in the string
/*
 declare function name, charCount("My name is Riva");
    - do something, return an object with keys that are alphanumeric characters
    - Step 1, make object to return at the end
    - Step 2, Loop over string for each character...
      - IF char is a num/letter AND is a key in object, add 1 to count
      - IF char is a num/letter AND NOT in object, add it to object and set value to 1
      - If character is something else (a space, period etc.), don't do anything
    - Step 4, return object at end
*/

const countString = string => {
    const splitStringChars = string.split("");
   const result = splitStringChars.reduce((acc, curr) => {
        if(curr in acc) {
            acc[curr]++
        }
        else {
            acc[curr] = 1;
        }
        return acc;
    }, {})
    return result;
}
console.log(countString('Riva'));
