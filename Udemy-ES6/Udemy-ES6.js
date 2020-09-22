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