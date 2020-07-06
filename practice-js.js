// CODE PRACTICE AND NOTES

var name = "riva"
console.log(name);

let firstName = "riva";
let LastName = " davidowski"

var interestRate = 0.3;
interestRate = 1;
// the value of var can change but value of constant can't change
 
const interestRate = 0.3;
// can not reassign a constant
// if you need to reassign var, use let


//values assigned to var
// Value types:
//strings, numbers, booleans, undefined and null

var name = "Riva"; //string literal
var age = 30 ; //number literal
let isApproved = true; //boolean literal
//true and false can't be var names
letFirstName = null; //used to clear value of var

typeof //reserved keyword in js

let name ="Riva";
let age = 30;

//Declaring an obj
var person = { // object literal syntax
    name: "Riva", //these are key value pairs
    age: 30
};
//Two ways to work with properties
//Dot notation to access property
person.name = "Tim" //name is a property
console.log(person.name) ;//dot notation will read value of prop

//other way is using bracket notation
person["name"] = "Tim"; //changes name from riva to Tim

//Arrays store lists or more than one value
let selectedColors = ["red", "blue"];
selectedColors[1]; "green"; //this one add another element into string
//each element has an indes [0,1]

//to access element in array, use index
console.log(selectedColors[0]);

//an array IS an object and can be accessed using dot notation
console.log(selectedColors.length);
//length prop returns items in arrays
//arrays represent list of items

//functions are a set of statements that calculate a value
function greet() { //body of the function in curly braces
    console.log("Hello World");
} //no semicolon at end

greet(); //this is calling the function
//functions can have inputs
function greet(name) { //parameter should only be used inside this function
    console.log("hello" + name);
}
greet("Riva"); //this is an argument
//parameter happens at time of declaration
greet ("Mary"); 
//functions can have multiple parameters
//you have to pass a value into parameters to avoid undefined
// functions perform a task or calculate and return a value

//calulating value
function square(number) {
    return number * number;
}
square(2); //we call function and need to return value
//this returns a value to intialize a variable
let number = square(2);
//console.log is calling the function
/* Write a fucntion to check two numbers and return true
if one of the numbers is 100 or if the sum 
of the two numbers is 100 */

const isEqualTo100 = (a,b) ==> a === 100 || b=== 100 || (a + b) === 100;
console.log(isEqualTO100(10,0));

//FOR LOOPS
//two loops, for and while

for (var i=0; i <=15; i++) { //change number 15 to 100 and the loop would run 100 times
    console.log(i); //as long as i is less than or equal to 15, it will keep running
}
//three statements are happening:
//the intializer or starting point
//condition for when the loop should end
//then we have the incrementor--is the loop continuing up or down (decrementing)
//use FOR keyword then the three statements separated by semicolon
//every iteration, i = i+1 (every loop this is happening)
// i = i +1;// i= 0 + 1 //i =1
//i = i + 1:// i= 1 + 1// i= 2 //so this will continue happening until condition is met 15 = 15

var sum = 0; //this sum is a collector//every cycle, current number will be added to total
for(var num =1;num < 11; num++) {
    console.log(num);
    total += num;   // Here we are incrementing by num 
}
console.log("The total is: " + total);

//HOW TO LOOP THROUGH ARRAY
var fruits = ["mango" ,"banana", "apple"];
for (var i = 0; i < 3; i++) { // BAD FORM! Use array.length
    console.(fruits[i]);//adding fruits in will return "mango", etc..
} //we would have numbers print out, 0, 1, 2 //stops at 2 because 3 is not less than 3
//WE USE AN INDEX OF THE ELEMENT TO GET ELEMENT OF ARRAY
console.log(fruits[0]);
//this will return "mango"
//right now loop is still printing out 0, 1,2--the indexes
//Here, I can't add another item in array because my condition asks the loop to run 3 times, not 4

//How to loop through another OBJECT that is NOT an array
var  data = {
    name: "John",
    age: 28,
    maritalStatus: true
}
for (var elem in data) {
console.log(elem);
}
//we access objects by their properties
console.log(data["maritalStatus"]);
console.log(elem,data[elem]); //if you want the value and not a property,you can do this

//FUNCTIONS AND VARIABLES
//var store static info, arrays,strings, numbers etc.
//functions store tasks--they are like verbs
function catGreeter() {
    console.log("Hey cat you are cute");
    console.log("Meooowww!")
}
catGreeter(); //this is calling the function
//lets make a function that is personalized
function specialGreeter(name) { //function takes an input or parameter
    console.log("Hey ") + name + "You have a cool attitude") ;
}
specialGreeter("joe");

function adder(a,b,c,d) {
    console.log(a + b + c + d);
}
adder(2, 2, 2, 2); //this would give us a sum of 8

function printerArr(animals) {
    for (var i =0; i < mango.length; i++){
        console.log(animals[i]);
    }
}
printerArr(["cat", "kangaroo", "spider"]) 
// this function takes in an array of animals and loops through the animals

//RETURN STATEMENTS
function sum(num1,num2) {
    return num1 + num2;
}
adder(2,4);

// a return statement gives us an output. Returns go into the functin
//function takes an input and returns an output
//console.logging is not outputting anything, it is just showing us where we're at
// you can use console.log for debugging etc.

function doesExist(nums,num) {
    for (var i =0; i < nums.length; i++) {
        if (num === nums[i]) {
            return true;//if at any point, any number in array equals 1, return true
    }
}
return false; // if nums in array never match the num (1), then it will return false
}
doesExist([1,3,5,7], 1)// true

//MORE ON LOOPS
for (let i = 0;i < 5; i++) { //i stands for index
    console.log('loop' + i); //keep going until 5, which would run 4 times because 5 is not less than five
}
// if you decrement, you'll start at higher number and use greater than sign
//you can break early
for (let i = 0; i < 5; i++) {
    console.log('loop' + i);
    if (i === 3) break;  // it would run until 3 
}
//Conditionals
// if statements are used to check conditions or check test to see if it's true
//if it is not true, then we ask it to do something else
//IF STATMENTS AND EQUALITY OPERATORS
//WHAT ARE ASSIGNMENT OPS AND LOGICAL OPS

var num = 20;

if (num > 0) { //this statement has to evaluate to true to console log a positive num
    console.log("The Number is a positive");
}
var = -4
if (num < 0) { // console would return number is negative
    console.log("the num is negative");
}
var num = 10;
if (num > 10) {
    return "The num is large"
} else if (num < 10) {
return "The number is small" // The code stops executing at the return statement
}
}
// ELSE IF using ALERT FUNCTION
if (num > 0) {
    alert("The number is large")  //alert will give us A pop up on screen! (Think pancake code I made)
} else if (num < 0) {
    alert("The number is small") 
} else {
    alert ("The number is zero")
}
// ELSE IF USING PROMPT FUNCTION
var num = prompt ("Enter a number"); //this will ask the user to enter a number 
if (num > 0) { // a regular = sign assigns a value to a variable
    alert("The number is large")  // prompt with alert will create pop up on screen
} else if (num < 0) {
    alert("The number is small") //user will then be PROMPTED by a question, or to do something
} else {
    alert ("The number is zero")

var isRaining = prompt("Is it raining?");
if (isRaining === "yes") { //this checks to see if a side is equal to b side
    alert("Go get an umbrella");
}else {
    alert("It's ok, you don't need anything")
}

//LOGICAL OPERATORS
// &&, ||, ! (last one is not) // These are used to combine conditions 
//Let's check more than one condition below:
// true && true == true      // true || true == true       !true == false
//true && false == false     // true || false == true      !false == true
// false && true == false    // false || true == true
// false && false == true    // false || false == true

var name = "Lexie";
var age = 17;
var highSchoolDegree = true;
// Lexie is looking for job at Apple
// job requirements are over 18 and high school degree
if (age >=18 && highSchool === true) { // Both conditions have to be true to run and they are not
    alert("you are ready to apply!") // therefore, the code will not run here
} // the code does not run because she is not 18 or older but she has graduated which equals true && false = false


// JOB AT AMAZON
// job requirements are over 18 applicant OR, someone who has degree
var name = "John";
var age = 28;
var highSchool = false;
if (age >=18 || highSchool === true) { //here the code will run because we need only one parameter of job requirement to match
    alert("You can apply!") // we are saying if he is over 18 OR has a degree
}

function myFunction() {

}
// Object oriented programming!!!
// core concepts: encapsulation, abstraction, inheritance, and Polymorphism
// we combine a group of related functions and variablesinto a unit or object (ENCAPSULATION)
// we refer to this combination as methods 

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) { // functions have so many parameters in procedural code
    return baseSalary + (overtime * rate);
}
// LET's take a look at object -oriented  programming
let employee = { // This is LITERAL NOTATION OF FORMING AN OBJECT
    baseSalary: 30_000,
    overtime: 10,   // With object-oriented programming, we have less parameters
    rate: 2,       
    getWage: function() { // this function has no parameters, all parameters (baseSalary, rate etc.) are properties of the object getWage
        return.this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();
//inheritance : allows us to avoid redundant code
// we can have other objects inherit properties and methods (Think of the hotel example in book, there are multiple hotels)
// Polymorphism allows us to get rid of if else and switch statements

//Benefits of Object Oriented programming
//1. Encapsulation - reduces complexity, and increase reusability
//2. Abstraction - Reduce complexity + isolate impact of changes
//3. Inheritance- Eliminates Redundant code
//4. Polymorphism- Refactor ugly switch case statements
// 5. Cleans up code, reduces use of so many variables and functions

//MORE ON CONSTRUCTING OBJECTS
// THIS IS THE CONSTRUCTOR NOTATION FOR CREATING OBJECTS
let person = new Object(); //first, define object and we can create a new object like this

person.name = "Daniel"; //next we assign values to the object
person.eyeColor= "blue"; //these values become properties 
person.age = 27; 
console.log(person.name); /*we can call on props and methods inside object by calling object name and then 
                          saying which property or method we'd like to access */
person.updateAge = function() {
    return ++person.age; //now we have a method inside the object which will update the age
}
console.log(person.age);
person.updateAge();
console.log(person.age);
// THIS IS THE SHORTHAND VERSION or LITERAL NOTATION
// THIS IS PROBLEMATIC IF WE NEED TO CREATE MORE THAN ONE PERSON
let person = {
    name: "Daniel",
    eyeColor: "blue",
    age: 27,
    updateAge: function() {
        return ++person.age;
    }
}
// OBJECT CONSTRUCTORS
// A way for us to create an object template or blueprint
// We will have placeholders that we will later fill in with CONSTRUCTORS
function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;    // this is used to refer to the object we are INSIDE of
    this.age = age;
    this.updateAge = function() {
        return ++this.age;  // we add 1 to age then return it
    };
}
//now we create a constructor
let person1 = new Person("Daniel", "Blue", 27); // inside parenthesis here, we will pass in all info in parenthesis above
 console.log(person01.updateAge());  // we pass in information inside constructor 
 // this way allows us to create many copies of different objects

 

