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

/*
- Looking at this function above, one could start by creating an object
and focusing on handling one character in a string at time. This would
simplify the problem.
- Starting with the main logic first and dealing with uppercase/lowercase later
Point being, if a problem trips you up, go with what you know and write what you can
*/

//STEP 5: LOOK BACK AND REFACTOR
// Using the example below, how can this be refactored?
// Well, this can be done using reduce
//The problem could also be solved with a for in loop
//Reduce is above and for in is below
function charCount(str) {
    var obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            }else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
// This is a better version of the problem directly above
// How else can it be improved?
// How efficient is Regex?
function charCount(str) {
    let obj= {};
    for(var char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

//Another version of the above problem is to create a function 
// This function works with a single character at a time, getting a code at index 0
// Then we could pass this function into the above problem and get rid of the Regex
// if(isAlphaNumeric(char) instead of the Regex)
// Another question to ask, is when to use Lowercase()?
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
     return false;
    }
    return true;
}


// Ex 1 of Problem Solving Pattern: Frequency Counter
/* Write a function called `Same` which accepts two arrays. 
The function should return true if every value in the array has 
it's corresponding value squared in the second array. T
he frequency of values must be the same.*/

// Less efficient solution: 0(n^2) Quadratic Relationship: Nested loop
function same(arr1, arr2) {
    // If the arrays are different lengths, we're done! No way to be true
    if(arr1.length !== arr2.length) {
        return false;
    }
    //Loop over first array and call indexOf where we pass in square of each value
    for(let i = 0; i< arr1.length; i++) {
        // Using arrays below, start at 1, and ask, what is the index of 1^2 in array 2?
        
        let correctIndex = arr2.indexOf(arr1[i] **2)
        // If correctIndex is -1 means index of element does not match other array
        if (correctIndex === -1) {
            return false;
        }
        // If there is a match it removes the element from arr2
        arr2.splice(correctIndex, 1)
    }
    return true;
}
//Ex: first array below is arr1, second is arr2
// As I loop, I check values, if element from arr1 is squared in arr2, remove element from arr2
same([1, 2, 3, 2], [9, 1, 4, 4]) //true 1st iteration
                   [9, 4, 4] // 2nd iteration 
                   [9, 4] // 3rd iteration
                   [4] // 4th iteration


// REFACTOR of same()
/* Instead of looping over arr1 and checking for each value in subloop
 over arr2, I can loop over each array separately.
 - Two separate loops is much better than nested loops
 - 0(n) time
 - Main idea, use an object to construct a way to break down contents of array or string
 - Compare the objects allowing us to improve our code
 */
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    // Each object will count frequency of individual values in arrays
    // I will end up with two objects in the end
    // The key is the value and the value is the frequency
    let counter1 = {};
    let counter2 = {};
    // Loop over value in arr1
    // Val is placeholder for each element array
    for(let val of arr1) {
        // Add 1 to counter1 if it is already in there, or initialize it to 1
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }
    // Is the key in the arr2, also check the values
    console.log(counter1);
    console.log(counter2);
    for(let key in counter1) {
        // Using arrays below, is key 2 of first objc
        if(!(key ** 2 in counter2)) {
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]);
//{ '1': 1, '2': 2, '3': 1 }
//{ '1': 1, '4': 2, '9': 1 }


// Anagram Solution: Solving by using frequency counter pattern
/*Write a function called `Same` which accepts two arrays. 
The function should return true if every value in the array has it's 
corresponding value squared in the second array. The frequency of values must be the same*/

//O(n) time
// Function takes two args
// Edge case: if the lengths of two strings don't match, it can't be true, I return false right away
// Create an object first as frequency counter

const validAnagram = ((first, second)=> {
    // Immediately know that I have to return if first and second strings are not equal in length
    if(first.length !== second.length) {
        return
    }
    // Created an object, as I loop through I will create an object as a breakdown of first string
    const lookup = {};

    // Loop over the first string (first)
    for(let i = 0; i < first.length; i ++) {
        // Take first character first time through (letter) and check if lookup object has character inside it
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++) {
        // Compare each character to the lookup object based off first string
        let letter = second[i];
        // Can't find letter or letter is zero then it is NOT in anagram, otherwise, substract 1
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -=1;
        }
    }
    return true;
})

validAnagram('cinema', 'iceman');