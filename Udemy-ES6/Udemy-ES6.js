/* ES6 Features:
    - variables using let and const
    - template strings
    - arrow functions
    - Rest and Spread Operators
    - Destructuring
    - Array methods find(), findIndex()
    - Classes
    - Promises and more!
    */

    //let is equal to var
    //const can't be updated later
    //both are used to create vars
let num1 =10;
console.log(num1);

let name = 'Riva';
let isOldEnough = true;
let marks = [9.5, 11, 15];
let blogObj = {
    title: 'My recipes',
    description:'Lorem ipsum dolor'
};

const num2 = 20;
num2 =30; //this will throw an error!
console.log(num1);

//WHAT ARE THE BENEFITS OF USING LET AND CONST
/* these are block scoped and are not hoisted
    - we can't access vars before initialization
    */


    /********************************************* */
//TEMPLATE STRINGS
 /* - A template string embeds expressions inside it
    - TO create one, we use backticks, not quotes
    - These expressions are embedded by using ${}
    */

const name = 'Riva';
const mGreeting = `Hello ${name}`;
//this returns 'Hello Riva'

const firstName = 'John';
const lastName = 'Snow';
function getFullName(firstName, LastName) {
    return `${firstName} ${lastName}`;

};
const newGreeting = `Hello ${getFullName(firstName, lastName)}`;


let red = 200;
let green = 155;
let blue = 100;
let alpha = 0.8;
const rgbaExp = `rgba(${red}, ${blue}, ${green}, ${alpha})}`;

/************************************************* */
//ARROW FUNCTIONS
//Arrow functions bring clarity and code reduction:

function greetings(name) {
    return('Welcome' + name);
}

const mGreetings = (name, age) => {
    return(`Welcome ${name} ${age}`);
}
greetings(mGreetings('John', 28));//calling the function

//if there is only ONE ARG, there are no parens needed
/* if there is only one function in the statement,
then we don't even need the curly braces*/

const mGreetingsTwo = name => `Welcome ${name}`
console.log(mGreetingsTwo('Riva'));

/**************************************** */
/*REST AND SPREAD OPERATORS
    - both start with ...
    - they are called by different names based on
    how they are used */

const mSum = (num1, num2) => console.log
    (num1 + num2);

    mSum(1,2,3,4,5);

    //NOW LET'S LOOK AT SPREAD OP IN AN EXAMPLE
const mSumTwo = (...args) => {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i]
    }
}

mSumTwo(1, 3, 3, 4, 5, 6, 7, 8);
//eveything was passed as an array to the function

const mSumThree = (num1, num2, ...args) => {
    let sum = num1 + num2;
    for(let i=0; i<args.length;i++) {
        sum += args[i]
    }
    console.log(arr);
}
mSumThree(1, 2, 4, 5, 6, 7)
//the rest operator needs to be at the end of the args list

//MORE ON SPREAD OPERATOR:
/* Spread syntax allows arrays and objects to be expanded into:
    - elements in case of an array
    - key-value pairs in case of object
    */

let newArray = [1, 2, 3, 4,5];
let newArrayTwo = [...newArray];
newArray.push(6);
console.log([...newArray]);
/*this prints 5 elements that were in array
    - created a new array with the same elements with spread operator
    - For the second array, we still get the same result
    - A copy of the original is made
    - the spread operator creates copies of arrays or concantenate multiple arrays
    - if I push on a value to newArray, only that array will take the new value;
*/
let jamArray = ['strawberry', 'lingonberry', 'marionberry'];
let toastArray = ['brioche', 'wheat', 'white', 'rye'];

let breakfastToast = jamArray.concat(toastArray);
let breakfastToast = [...jamArray,...toastArra];
// both of these ways concat and combine the values in each earray together
//SEQUENCE MATTERS WHEN USING SPREAD

//we can also add new elements to start and end of array

letpersonEatingAllToast = ['Riva', ...jamArray, ...toastArray,'french'];

//Spread can be used on objects as well

let obj1 = {
    name ='Riva'
}

let obj2 = {
    age: 34
}
let obj3 = {...obj1,...obj2};
console.log(obj3);
//this would give us new obj with keys from obj1 and obj 2
//if I added in a new value to obj1, the new obj would hold all values from each obj