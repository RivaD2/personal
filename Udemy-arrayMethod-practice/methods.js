'use strict';
//Array Properties:
//Array properties include length, constructor and prototype

//Length: this property returns the length of the array of num of elements
let numbers = [1, 2, 3, 4, 5, 6, 7];
// This will return 7 as there are 7 items in the array
console.log(numbers.length);

/*************************************** */

//Constructor property: It returns the function reference on the array
// function functiontype() {[native code]}
let fruits = ['apple', 'orange', 'banana'];
// this will return function Array() {[native code]}
console.log(fruits.constructor);

// You can use this on strings, booleans
let fruit = 'Mango';
// this log will say function String() {[native code]}
console.log(fruit.constructor);
/*************************************** */

//prototype() : This method is used as an array constructor property 
// Using it, we can construct new array methods that we need

Array.prototype.thirdItem = function() {
  if(this.length >= 3) {
    //the third element will be at index 2
    return (this[2])
  }
  else {
    // if the array has less than three items, then it wont work so return undefined
    return ("undefined")
  }
};
const letters = ['a', 'b', 'c', 'd'];
//this will return the third item which is 'd'
console.log(letters.thirdItem());

//MUTATOR METHODS:

/*copywithin(): copies elements in an array from one location to another
---> Syntax: array.copyWithin(x, y, z)
---> Where x = where you want to copy
           y = starting index of 'to be copied items'
           z = ending index (next index of copied items)
           */

let word = ['x', 'r', 'r', 'a', 'y'];
word.copyWithin(0, 3, 4);
// this log will return ['a'. 'r', 'r', 'a', 'y']
// we replaced 'x' at index 0 and said to replace it with index 3 and then the ending index was 4
console.log(word);

//fill: This method fills the items in an array with a specified value
// args are (value, start, end)
//array.fill('value','start', 'end');

let scores = [12, 22, 90, 100, 45, 32];
// here I just passed value of 0 so all values of array are 0
console.log(scores.fill('0'));
//Here I will just fill first three values of array with different values
// So, this will return array of ['0','0', '0', 45, 32]
console.log('0', '0','3');

//sort: sort is used to sort items in array
// it converts items in an array to strings and sorts them based on first character in an item
// Syntax: array.sort();
let word = ['a', 'd', 'b', 'c'];
// this will arrange strings in alphabetical order
word.sort();
console.log(word);

let numbers = [7, 2, 1, 0, 3];
// this log will sort numbers in ascending order
numbers.sort();
console.log(numbers);

let numbers = [700, 234, 1000, 44, 29];
//when numbers or strings are not single digits or letters, they will not be integers
//sort turns everyting into a string
/*so first character in every item is compared: 7 is compared with 1, compared with 4, conmpared with 2*/

//WE HAVE TO USE A COMPARE FUNCTION
// Compare functions define an order in which an array needs to be sorted
//Syntax: array.sort([compare function]);
//function compare(a, b) {
  //if else statement that says if(negative number) then a is moved to lower index than b
  // if (zero) then (both a and b remain unchanged)
  // if (positive number) then a is moved to higher index than b

let numbers = [4, 23, 100, 0, 130];
//every pair of items is compared so first 4 and 23 are compared
numbers.sort(function(a,b) {
  return b - a; //(23-4) so a is higher than b so this is ascending order
  // return a -b is descending order 4-23 is a negative num so a is lower index than b
});
console.log(numbers);

//splice(); adds/removes/replaces selected elements in an array
// Syntax: array.splice(x, y, z)
// x is the pointing index, y is the number of elements to delete and z is data to add or replace

const vowels  = ['a','e','i','o','u'];
// I said that I want to start at index 2, replace one item and replace that item with 'r'
vowels.splice(2,1,'r');
// this log returns ['a','e','r','o','u']
console.log(vowels);
