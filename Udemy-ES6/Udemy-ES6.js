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

/****************************************** */
/*DESTRUCTURING
    - it allows us to unpack arrays or objects into a bunch of
    variables which makes working with them more convenient
    - SYNTAX:
        let[a,b] = [1,2,3,4,5];
        let{name,age} = {firstName: 'John, lastname:'Wick', age:30};
        */

//object are in curlies and arrays are in brackets

const name = 'Ragnar NMN Lothbrok';
const nameArray = name.split(' ');
//this would split the string into three parts of name
// what if we wanted first name and middle name section

let firstName = nameArray[0];
let middleName = nameArray[1];
//there is a better way...destructuring!

let [firstName, middleName] = nameArray;
//Here the first and second element were selected
//Sequence does matter when writing vars

//if we wanted firstName lastName:
let [firstName, , lastName] = nameArray;


const laCroix = {
    flavor:'Razzberry Deliciousness',
    canColor: 'Pink',
    yummy: true
}
let {flavor,yummy} = laCroix;

//to create a new object

let firstName = 'Anthony';
let lastName = "van Winkle";
let age = 36;

const personObj = {
    firstName, // this pulls the variable value in
    lastName,
    age

}
//This creates a key and gives it a value
//It is still the same object, but it works if you want the keys with same variable name

/********************************** */
//ARRAY METHODS IN ES6 -reduce, map, filter, find

/*reduce()
 - iterates through array and accepts callback function to perform
 some action on the array
 - reduce PASSES the RESULT of the callback from one iteration to the next
 - the callback result is the acc
 - the acc can be pretty much anything (integer, string, object etc.)
 - the acc must be instantiated and passed when calling reduce()
 SYNTAX:
 arr.reduce((acc, item) => {
     //callback function body
 }, acc_default_value);
 */

const newArray = [1.2, 3, 4, 5, 6];

newArray.reduce((acc, item) => {
    console.log(item);
    console.log(acc);
    return acc + 1
}, 0);
//I take the acc value and add one and pass it to next iteration;

//to add all nums in array
const numbersArray = [1.2, 3, 4, 5, 6];

const result = numbersArray.reduce((acc, item) => {
    return acc + item;
}, 0);


/*map()
 - map iterates through array to create a new array
 - I can decide which elements should be added to array based off conditions
 SYNTAX: arr.filter(item => {
     //return true/false to add
 })*/

const catsArray = ['ragnar', 'kittenMitten', 'simba'];
const newArray =[];

const doubleValues = item => {
    return item * 2;
}
catsArray.forEach(cat => {
    newArray.push(doubleValues(cat[i]));
});

//lets use map
let newArray = catsArray.map((item) => {
    return item * 2;
    //we iterate through list and double the names
});
//the arg can be named anything
//only the new array has the doubled values



//if this was an object, we can access the obj

const namesArray = [
    {
        name: 'John',
        age: 33,
        career: 'engineer'
    },
    {
    name: 'Mary',
    age: 44,
    career: 'travelWriter'
    }
];
let newArray = namesArray.map((data, pos) => {
    //return new array with only name and career props
    return {
        name: data.name,
        career = data.career
    }
});

/************************************* */
/*Classes in ES6:
    - to create obj factories we can use the class keyword
    - SYNTAX:
    class ClassName {
        constructor() {
            //intialize the props here
        }
        //Methods outside constructor
        methods1 = () => {
            //method body
        }
    }
    //This is syntax-sugar bedhind the scenes everything works the same
    */

function Person(name, birthYear) {
    this.name = name;
    this.yearOfBirth = birthYear;

    this.getDetails = function() {
        return "Name: " + this.name +
        "and Age: " + (2020 - this.yearOfBirth);

    }
}
var riva = new Person('riva', 34);

//NOW LETS USE CLASSES:

class Plants {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
    getPlantDetails = () => {
        return `Name: ${this.name} and Age: ${type}`;
    }
}
const plant1 = new Plants('africanMilkTree', 'succulent');
// whatever values are passed above are sent to constructor
// the constructor defines props and intializes with the values

/************************************************* */
//INHERITANCE
/* ES6 provides us with a keyword called 'extends' to inherit classes
SYNTAX:
class ChildClass {
    //Classbody
}
class ChildClass extends ParentClass {
    //Classbody
}
*/

// create class followed by classname

class Plants {
    constructor(type, name, easyCare) {
        this.type = type;
        this.name = name;
        this.easyCare = easyCare;
    }
    getPlantDetails = () => {
        return `Name: ${this.name} and Age: ${type}`;
    }
}

class PlantsTwo extends Plants {
    constructor(type, name, color) {
        //super calls constructor of previous class
        super('tropical','zZ');
        this.type = type;
        this.name = name;
        this.color = color;
    }
    getData = () => {
        console.log(`This plant is a ${this.type} and it is a ${this.name} and it's ${this.color}`)
    }
}
const zigZag = new PlantsTwo ('cactus', 'zizZag', 'green');
zigZag.getData();

const snakePlant = new Plants('mother in law tongue', 'sanseveria', 'various');
snakePlant.getData();
//this would return details of first and second objects