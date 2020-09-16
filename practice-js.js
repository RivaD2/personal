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

var favoriteCharacterAnswer = prompt("Do you like Buffy, Giles or Willow Better?");
  alert('Oh, I love' + favoriteCharacterAnswer + ' so much');
  console.log('favoriteCharacterAnswer: ' + favoriteCharacterAnswer);

  varFavoriteCharacterAnswer = prompt ('What is your favorite thing about') + favoriteCharacterAnswer;

  alert('favoriteCharacterAnswer' + 'Is super cool' + favoriteCharacterAnswer + ' She\'s a hip lady')
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

 
//ADDING UPPERCASE/LOWERCASE to prompts
// var username = prompt('what is your name?');

// console.log(username);

// console.log(username.toLowerCase());

// console.log('ASDF'.toLowerCase());

// var shortNicholas = username.toLowerCase();


// console.log('afterwards username', username);
// console.log('afterwards shortNich', shortNicholas);
// // console.log(2.toLowerCase());

// if(username.toLowerCase() === 'nicholas'){
//   console.log('!!!it matched lowercase!!!');
// } else {
//   console.log('it did not');
// }


//How to make usability normalized for user
var yOrN = prompt('y or n?');

if(yOrN === 'y' || yOrN === 'Y' || yOrN === 'Yes' || yOrN === 'yEs' || yOrN === 'yeS' || yOrN === 'YEs' || yOrN === 'yES' || yOrN === yOrN === 'YES'){
  console.log('they said yes!!!!')
}

var yOrNLowercase = yOrN.toLowerCase();

if(yOrNLowercase === 'y' || yOrNLowercase === 'yes'){
  console.log('they said yeeeeeesssssss!!!')
}

var ys = prompt('y or n').toLowerCase();
console.log(ys);

var longerYes = prompt('longer y or n');
var longerYesToLowercase = longerYes.toLowerCase();

var anotherYes = prompt('y or no');
anotherYes = anotherYes.toLowerCase();


if(anotherYes === 'y' || anotherYes === 'yes'){
  console.log('yay');
}





// LAB 3
// Truthy falsy 
// Logical Operators
// Loops
// Conditional is a statement that evaluates to true or false

3 === 3;
3 === 2;
3 == 3;
3 == 2;
3 == '3';
3 !== 3;
3 !== 1; // not strictly equal
3 !== '3';
3 != '3'; // not loosely equal
3 > 2;
3 > 3;
3 > 4
3 < 2;
3 < 3;
2 < 3;
3 >= 3;
3 >= 2;
3 <= 3;

// Logical operators
// have short circuit logic- they do not convert to true or false, they STOP at the first value that meets their condition

// || `or` checks if either thing is truthy
if(1 === false || 9 || false){
  console.log('9 exists');
}

1 === false || 9;

var x = 1 === false || 9;
console.log('x?', x);

// logical or `||` stops at the first truthy thing, otherwise it ends on the last thing

false || 'asdf' || true || 9 || [1,2,3];

false || null || '' || undefined || NaN;

// logical && `and
// && short circuits on the first false thing

true && false && 9;
true && true && 0 && NaN && undefined;

true && 9 && 'something';

// `not`  `!` operator
// ! turns a truthy thing into false, and a falsey into true
!0;
!9;
console.log(!'undefined');
console.log('this is the truthiness of the string of "undefined"', !!'undefined');
!['asdfklasd;lfkj;asldkfj', 'asd;j'];


// Truthy falsy
//falsey things 
0; // number
undefined; // undefined
null; // ?
NaN; // number
''; // string
false // boolean


// Control flow - idea of directing the way your app flows other than reading every line once top to bottom

if(true || false){
  console.log(' I happened');
} else {
  console.log('I did not');
}

// loops


var x = 0;
for(var i =0; i < 5; i++){
  x = x + 1;
  console.log('I happened ' + x + ' time');

}

// for loops 
// - the thing in them can repeat
// for loops have similar syntax to this, where the 10 is the amount of times it runs
for(var i = 0; i < 10; i++){

}
// the pieces of the for loops
// for(`variable declaration`, `condition`, `iterator`)

for(var potato = 20; potato >= 5; potato = potato - 3){
  console.log('potato', potato);
}


// while loop - a loop that goes until a condition is meets

while(false){
  console.log('not again...');
}

var countdown = 2; // variable
while(countdown > 0){ // conditional
  console.log(countdown + ' bottles of water on the wall');
  console.log(countdown + ' bottles of water');
  if(countdown % 9 === 0){
    countdown = countdown - 7; //iterator
    console.log('take seven down pass them around');

  } else {
    console.log('take one down pass it around');
    countdown--; // iterator
  }

  console.log(countdown + ' bottles of water on the wall');


}

while(false){
  console.log('I happen at least once');
}

// convert to do while by moving while to the end and putting a do in the front

// do {
//   console.log('I happen at least once');
// } while(false);

// var yOrNo = prompt('am I cool');

// while(yOrNo === 'n'){
//   yOrNo = prompt('am I cool- you were wrong, try again');
// }


// do {
//   var lovesGinger = prompt('do I love Ginger?');
// } while(lovesGinger.toLowerCase() !== 'y');

// var whereIveBeen = prompt('where have I visited (States)');

// switch, if elses, logical or

// Array is a container for more than one thing
// in concept they are similar to unordered lists
// we should try to keep similar things in array most of the times

var potatoArray = ['russet', 'golden', 'sweet'];
potatoArray[0] === 'russet';
potatoArray[0];

potatoArray[1] === 'golden';
potatoArray[1];

potatoArray[2] === 'sweet';
potatoArray[2];

// var aPotatoILike = prompt('which potato do I like?');

// if(aPotatoILike === potatoArray[0] || aPotatoILike === potatoArray[1]){
//   console.log('yep');
// }

for(var index = 0; index < 3; index++){
  console.log('index :', index);
  console.log('potatoArray[index]', potatoArray[index]);
}

//FOR LOOPS AND ARRAYS
//FOR LOOPS NESTED IN FOR LOOPS
//LECTURE CLASS 4
/* Things to cover:
looping through an array- ++
if an array was different sized
ending a for loop or while loop early
for in while +++
for loop in a switch
*/

// Pick a color that I like, I like 4 colors
// seafoam green, green, navy blue, black purple
// get an array of the anwers,
// 0. check if their answer === 'potato', to see if my if works
// 1. check if their answer === array[0] - yay, else 'sadface'
// 2. do it 6 times until they get it right
// 2.0 - write a loop that goes 6 times
// 2.5 - put my code asks and checks the answer in the loop
// 2.75 - end the loop with a `break`
// 3. validate against all the colors, not just seafoam green

// when they are done, check if they were never right, let them know
// or let them know all the answers cause they probably didnt get them all
// alert after the loop

for(var i = 0; i < 6; i++){
    //7 begins
    var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange', 'purple', 'black'];
  
    var colorILikeResponse = prompt('Name a color I like, there are 4');
  
    for (var answerIndex = 0; answerIndex < colorsILikeCorrectAnswers.length; answerIndex++) {
      //Start checking
      if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
        console.log('it worked');
        i = 1000000;
        break;
      }
      // End Checking
    }
    // 7 ends
  
  
  }
  
  
  // for (var i = 0; i < 6; i++) {
  //   //7 begins
  //   var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange'];
  
  //   var colorILikeResponse = prompt('Name a color I like, there are 4');
  
  //   var theyGotTheRightAnswer = false;
  
  //   for (var answerIndex = 0; answerIndex < 5; answerIndex++) {
  //     //Start checking
  //     if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
  //       console.log('it worked');
  //       theyGotTheRightAnswer = true;
  //       break;
  //     }
  //     // End Checking
  //   }
  //   // 7 ends
  
  //   if (theyGotTheRightAnswer === true) {
  //     break;
  //   }
  // }
  // var i = 0;
  // var theyGotTheRightAnswer = false;
  // while ( i < 6 && theyGotTheRightAnswer === false ) {
  //   //7 begins
  //   var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange'];
  
  //   var colorILikeResponse = prompt('Name a color I like, there are 4');
  
  
  
  //   for (var answerIndex = 0; answerIndex < 5; answerIndex++) {
  //     //Start checking
  //     if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
  //       console.log('it worked');
  //       theyGotTheRightAnswer = true;
  //       break;
  //     }
  //     // End Checking
  //   }
  //   // 7 ends
  
  //   i++;
  // }
  
  
  // || colorILikeResponse === colorsILikeCorrectAnswers[1] || colorILikeResponse === colorsILikeCorrectAnswers[2] || colorILikeResponse === colorsILikeCorrectAnswers[3] || colorILikeResponse === colorsILikeCorrectAnswers[4]
  
  // console.log('answer index', answerIndex);
  // console.log('colorsILikeCorrectAnswers[0]', colorsILikeCorrectAnswers[answerIndex]);
  // console.log('colorILikeResponse', colorILikeResponse);
 

  
  
  //FUNCTIONS -Basic functions syntax
  //math.random always returns random number less than one //used to return random integers
  //this returns random number from 0 to 10
  // we will need math.floor to take floating point number and reutnr a whoile number
// function functionNamePotato() {
//     //here is where code goes
// }
// function pickRandomNumber() {
//     var aRandomNumber = Math.random() * 10;
//   console.log('your number is!... + aRandomNumber');
// }
//     pickRandomNumber(); //this will run the code inside braces
//purpose of a function is to define a code block for later use, every once in a while immediate use
//we will need to call the function to run the code, function call will run code inside curly braces
// we're invoking the function by calling it

//Let's write a function that says good bye to someone

var username = 'nicholas';

function sayHello() {
//console.log('hello there' + 'Riva');
}
sayHello();
//We want to make this function more dynamic using parameters
//to do this we define variable inside parenthesis of function
var username = 'nicholas';

function sayHello(name) {
//console.log('hello there' + 'name');
}
sayHello();
//this would not work very well because we have not put value into parenthesis of called function
var username = 'nicholas';

function sayHello() {
//console.log('hello there' + 'name');
}
sayHello('Tif'); //the arg will concatenate whatever is passed as arg into message
sayHello('Nicholas'); 

//functions without args
 doSomething(); //same as NOT defining variable
 //will return NaN
 //order MATTERS when dealing with parameters
 

 //PASSING PARAMETERS IN FUNCTIONS

 function generateRandomNumber {
     var someNumber = Math.random() * 10;
     //the return keyword turns the function call into the value after the keyword return
     return someNumber;
 }

generateRandomNumber(); //this === 9.75
 
var x = generateRandomNumber();
 var y = generateRandomNumber();
 console.log(x,y);

 function divide(a,b) {
     var divided = a / b;
     return divided;
 }
 var c = divide(9,3);
 var d =divide(12,3);
 //when we call the function, we get a return value
 console.log('divided', c, d);

 function cookBurger(bun,protein, vegetables) {
     var burger = '';
     burger += bun;
     for (var i = 0; 1 < vegetables.length; i++) {
         burger += vegetables[i] + ' ,';
     }
     burger +=  protein + ' , ';
     burger += bun; //takes variable and reassigns it to plus bun
     //The addition assignment operator (+=) adds a value to a variable.
 } //we have to use return to save the variable and expose it outside of the function
return burger;
}

 cookBurger('wheat', 'impossible patty', ['tomato', 'lettuce', 'onion', 'pickle']);

 function simpleSum (a,b) {
     return a + b; //pauses on returns evaluates things on right 
 }
 console.log (simpleSum(2,5));

 var y = simpleSum(2,4);
var z = simpleSum(10,20);     //Here these variable names are no good
var zz = simpleSum (y,z);
console.log(zz);

// ICE CREAM CONE ASSIGN


function chooseACone()  {
    var flav1 = prompt('pick a ice cream');
    var flav2 = prompt('pick a ice cream');   // right here we can just define variables = flavors[0]
    var flav3 = prompt('pick a ice cream');

    return [flav1, flav2 ,flav3]; //put items in array
 //a return can only ever return one thing (there is no way to return)
 // it can't return a bag
 //if you surround multiple variables in a container of some kind (an array, an object), then it can return diff values
}
console.log(chooseSomeFlavors());

//take more than one thing and stick it in array
//can only have one return in a function, the first return will be the opnly return that happens but it will end the code
//return exits the code
// if you have a for loop in another loop, in another loop for ex, if I know I am done, then we can RETURN

//a function that uses another function that uses and array
// this function will choose som flabors
function buildCone() {
//have to store it in a variable
//goal list the type of cone with the three flavors
// if flavors === ['chocolate' , 'a', 'b'] chocolate lives at flavors index 0
var flavors = chooseSomeFlavors();
var cone = 'waffle';                     // Here would just make var firstFlavor = flavors[0];
cone += flavors[0];                     // then secondFlavor = flavors[1];
cone += flavors[1];                     // we don't have to do it the way to the left
cone += flavors[2];
console.log(cones);
}
buildCone();
//if you see that an array is returned to you, then you access those values in the array using the index number

   
Store.prototype.listOfTimes = function() {
  var seattleObject = document.getElementById(this.name + 'Cookies');
  var seattleHeader = document.getElementById(this.name + 'Header');
    seattleHeader.textContent = this.name;
  for (var i = 0; i < this.storeHrs.length; i++) {
    var custThisHour = getRandomNum(this.minCust,this.maxCust); 
    // rounding cookies per hour total
    //could take line 24 -26 into a function instead and then call the custPerHr function
    var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
    this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
    // add new number to the total
    this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
    var timesList = document.createElement('li');
    timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
    seattleObject.appendChild(timesList);
    
  } 
   var totalList = document.createElement('li');
   totalList.textContent = 'Total: ' + this.totalCookies;
   seattleObject.appendChild(totalList);

  }

SECOND, 5 DIFFERENT INSTANCES OF THE STORE OBJECT ARE CREATED
Below each instance are the render method calls/function calls for each location using listOfTimes




Create object with properties
var seattle = {         //Create function at the top(separate function list of times 19-37 and put it outside of object)
  name: 'seattle', // by giving the object a property of name, we can use the this.name to reference the object, making it easier to create copies
  minCust: 23,          
  maxCust: 65,          // there needs to be five neat objects with their properties and ONE FUNCTION that does everything
  totalCookies: 0,         //this way, we can write function and just pass in the props 
  cookieSalesPerHr: [],   
  avgCustSale: 6.3,
 storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust); 
      // rounding cookies per hour total
      //could take line 24 -26 into a function instead and then call the custPerHr function
      var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
      this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
      // add new number to the total
      this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
      var timesList = document.createElement('li');
      timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
      seattleObject.appendChild(timesList);
      
    } 
     var totalList = document.createElement('li');
     totalList.textContent = 'Total: ' + this.totalCookies;
     seattleObject.appendChild(totalList);


// //   }

// }
// seattle.listOfTimes();



var tokyo = {
  name: 'tokyo',
  minCust: 3,
  maxCust: 24,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 1.2,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
      var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
      this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
      // add new number to the total
      this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
      var timesList = document.createElement('li');
      timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
      seattleObject.appendChild(timesList);
      
    } 
     var totalList = document.createElement('li');
     totalList.textContent = 'Total: ' + this.totalCookies;
     seattleObject.appendChild(totalList);


  }

}
tokyo.listOfTimes();

var dubai = {
  name: 'dubai',
  minCust:11,
  maxCust: 38,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 3.7,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
      var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
      this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
      // add new number to the total
      this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
      var timesList = document.createElement('li');
      timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
      seattleObject.appendChild(timesList);
      
    } 
     var totalList = document.createElement('li');
     totalList.textContent = 'Total: ' + this.totalCookies;
     seattleObject.appendChild(totalList);


  }

}
dubai.listOfTimes();

var paris = {
  name: 'paris',
  minCust:20,
  maxCust: 38,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 2.3,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
      var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
      this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
      // add new number to the total
      this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
      var timesList = document.createElement('li');
      timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
      seattleObject.appendChild(timesList);
      
    } 
     var totalList = document.createElement('li');
     totalList.textContent = 'Total: ' + this.totalCookies;
     seattleObject.appendChild(totalList);


  }

}
paris.listOfTimes();


var lima = {
  name: 'lima',
  minCust:2,
  maxCust: 16,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 4.7,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
      var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
      this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
      // add new number to the total
      this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
      var timesList = document.createElement('li');
      timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
      seattleObject.appendChild(timesList);
      
    } 
     var totalList = document.createElement('li');
     totalList.textContent = 'Total: ' + this.totalCookies;
     seattleObject.appendChild(totalList);


  }

}
lima.listOfTimes()

//CODE REVIEW AND REVIEW ON HOW TO GET TOTAL COOKIES
// var sea = {
//   //         6am 7am
//   cookies : [5, 6, 7 ,8 ,9]
// }

// var paris = {
//   //         6am, 7am
//   cookies : [50, 60, 70 ,80 ,90]
// }

// var lima = {
//   //         6am, 7am
//   cookies : [500, 600, 700 ,800 ,900]
// }

// var a = {
//   //         6am, 7am
//   cookies : [500, 600, 700 ,800 ,900]
// }

// var b = {
//   //         6am, 7am
//   cookies : [500, 600, 700 ,800 ,900]
// }

// var c = {
//   //         6am, 7am
//   cookies : [500, 600, 700 ,800 ,900]
// }


// // lets get 6am's cookies sold
// sixAm = 5 + 50 + 500

// sixAm = sea.cookies[0] + paris.cookies[0] + lima.cookies[0] + a.cookies[0] + b.cookies[0] + c.cookies[0];

// var sevenAm = sea.cookies[1] + paris.cookies[1] + lima.cookies[1] + a.cookies[1] + b.cookies[1] + c.cookies[1]

// for(var hour = 0; hour < 5; hour++){
//   var total = sea.cookies[hour] + paris.cookies[hour] + lima.cookies[hour] + a.cookies[hour] + b.cookies[hour] + c.cookies[hour];
//   console.log(hour +'am', total);
// }


// var stores = [sea, paris, lima, a, b, c, sea, paris, lima, a, b, c, sea, paris, lima, a, b, c, sea, paris, lima, a, b, c];


// // make six am
// sixAm = 0;
// for(var i = 0; i < stores.length; i++){
//   sixAm += stores[i].cookies[0];
// }


// for(var hour = 0; hour < 5; hour++){

//   // make six am
//   sixAm = 0;
//   for(var storeNumber = 0; storeNumber < stores.length; storeNumber++){
//     var aStore = stores[storeNumber];
//     var cookieArray = aStore.cookies;
//     var cookiesSoldThatHour = cookieArray[hour]
//     sixAm += cookiesSoldThatHour;

//     // sixAm += stores[storeNumber].cookies[hour];
//   }

// }





// console.log('should be 555 : ', sixAm);