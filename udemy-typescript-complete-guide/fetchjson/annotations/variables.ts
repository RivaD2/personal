// Annotations with Variables
// If I remove the colon and 'number' from apples variable I still see that apple is of type number.
// In other words, none of these type annotations are needed! So there is more going on
// here than meets the eye. This is the type inference system.

let apples: number = 5;
let speed: string = 'fast';
let hasName:boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
// Can only assign this a value of type Date
let now: Date = new Date();


// Assign array that contains nothing but strings inside
// Something assigned to colors that is type array that contains strings
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

// Object Literal
// Declaring point variable and assigning it an object with x and y property
// Can only every assign an object to point that has x and y property that is a number
let point: { x: number; y: number } = {
  x: 10,
  y:20
};

// Function
// Everything up to void is the annotation and everything on right hand side
// is of course the function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations:

// 1) Function that returns the 'any' type
// TS does not know what type coordinates is

// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

// Let's fix the 'any' type from above
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y:number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
// added in type annotation here as foundWord is intialized later in for loop
let foundWord:boolean;

for(let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we want a variable to have a type that can't be inferred
// Corner case example, not ideal code example
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i=0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    // Trying to assign a number to a variable that is supposed to reference boolean
    // Type inference as it doesn't understand intent here
    // I had to add type annotation with pipe to say that I can assign two different types to variable
    numberAboveZero = numbers[i];
  }
}




