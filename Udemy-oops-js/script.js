'use strict';

//create objects in JS
//objects contain key value pairs
// Key values can include anything: (string, num, array, function, obj, boolean)

//ways to create objects
// 1st way is: let person2 = new Object();

//This method is most commonly used
/* The way these objects are written, this is called encapsulation:
- everything releated to the obj is encapsulated within the braces*/
let person1 = {
  name: 'Susan',
  age: 35,
  height: 160,
  hair: 'blonde'
}; 

let person2 = {
  name: 'Gary',
  age: 40,
  height: 180,
  hair: 'blonde',
  eyeColor: 'blue'
};

/*Accessing property values: There are two ways:
 - objectName.propertyName (dot notation)
 - objectName['propertyName'] (bracket notation) */

 alert(person1.height); //this returns 160 in the console
 alert(person1['height']); //this will also return 160 in the console
 alert(person1.name + " 's height is " + person1['height']); /*This would return (Susan's height is 160)*/
 //can use template strings
alert(`${person.name} 's height is ${person1.height}.`); //this will return the same as above

/*********************************************/

/*Adding, updating and deleting properties: we can use bracket and dot notation*/
//Adding properties to an obj:
person1.gender = 'female';
console.log(person1); //we should see the new property added
person2['canVote'] = true; //property added using brackets needs to be in quotes

// Update properties on an obj
person1.age = 40;
person1['height'] = 170; //to update, just add the new values

//Delete properties of an obj
delete person1.gender;
delete person2['canVote']; //to delete, use the delete keyword

/******************************************** */

//Dynamic access to properties
//To dynamically access props, declare var and use it as reference

let prop = 'hair';
console.log(person1[prop]);
// will not be able to use dot notation like person1.prop
//square brackets allows us to use variable correctly
//we might need to to change the value of prop at some point or another
//declaring a var allows us to use it ON ANY object as seen below:
person2[prop] = 'brown';
//the var prop does not have to be a string, it can be a prompt, an input text box
//WE could get the value from the user
let prop = prompt ("What do you want to see?", 'Hair');
console.log(`Person 1's ${prop} is ${person1[prop]}`);
//so default is hair and in the console we would see: Person 1's hair is blonde
// if we typed in name, we would receive, Person 1's name is Susan
//if the prop is not there, I would recieve undefined
//If undefined, I can create an if statement that tells user to enter correct prop

/******************************************* */

/*Multiword properties: normally we use camelCase. 
 - However, what if we wanted to use a property like eye Color
 - We can place property name in quotes with a space like so:*/

let person2 = {
  name: 'Gary',
  age: 40,
  height: 180,
  hair: 'blonde',
  "eye Color": 'blue'
};
//if it is a multiword property, it has to be in quotes
// we can access these properties in the same way
person2["can vote"] = true; //this will add new property can vote to person2 object
// dot notation will not work: ex: person1.can vote = false

/********************************************* */
//Property Shorthand

let fName = 'John';
let lName = 'Doe';
let age = 35;

let person1 = {
  fName : fName,
  lName : lName,
   age : age,
};
//sometimes property name and values are the same
//if we console.log this object, we would have all the props and values
//we could create this object without specifying values like this:
let person1 = {
  fName,
  lName,
   age
};
console.log(person1.fName); // this would return 'John'
//this works with functions as well
function createPerson (fName, lName, age) {
  let fullName = `${fName} ${lName}`;
  return {
    fName : fName,
    lName : lName,
    age : age,
    fullName : fullName
  };
}
console.log(createPerson('John', 'Doe', 35)); // this function call will return an object in the return statement
// I can even do the function call within the object like so:
let objPerson = 
createPerson('John', 'Doe', 35);
console.log(`${objPerson.fName}'s full name is ${objPerson.fullName}`);
//this would return 'John's full name is John Doe
//We created an object within a function and returned an object inside function

/*********************************************** */
//Arrays of Objects
//Arrays make it easy to hold props of multiple objects

let person = [
  {name:'Susan', age:35, height: 160, hair: 'blonde'},
  {name:'Gary', age:40, height: 180, hair: 'blonde', eyeColor:'blue'},
];
//access arrays using indexes
console.log(person[1].eyeColor);
console.log(person[1]['eyeColor']); //first is index second is prop

/***************************************** */
//Object Basics- objects and const
//anything that is declared with const can't be modified

const person1 = {
  fName: "jon",
  lName: "Doe"
};
person1.fName = "Jane"; //there is no error if we were to console.log it
/*why do we not get an error even though we redclared const?
- Only the object is fixed, the props and values are not 
- using const, we could not declare Person1 again*/

/************************************************ */
//Using vars as props while creating objects
//Using computed properties: the prop name can be dynamic!

let person = 'Jane Doe';
//we want to use person var as property
//by changing the var name, the object prop of name will change
let voting = {
  //the square brackets make the person prop dynamic  
  //now we can put anything in there
  [person]: 'Can Vote'
};
console.log(voting);//this will return Jane Doe can vote

//What happens if we change person value after objct declaration?
person = 'Jon Murray';
console.log(voting);//there willbe no change
//the object takes in the value from var declaration and assignment before the object was created

//How do you access variables?
console.log(`${person} ${voting[person]}`);
//this will return Jane Doe can vote
//no quotes inside brackets because we are using variable
//we can not use dot notation
/**************************************************** */

//Naming properties, DO's and Don'ts
/*if proper naming conventions are not followed, we can not use dot notation*/
let person = prompt('What is the name of the person', 'Jane Doe');
let voting = {
  [person + " " + 1]: 'Can vote',
  1: 'Number One',
  'likes Food': 'yes'
};
//can numbers and keywords be accessed by dot notation?
//dot notation will not work on numbers but it will with keywords

/****************************************************** */
//Object methods: Things that an object does
//functions become methods with objects 

let person = {
  fName: 'Jane',
  lName: 'Doe',
  fullName: function() {
    return person.fName + " " + person.lName;

  }
};
//When we access method, we get error
//the method thinks fName is a variable and can't find the prop of fName
console.log(person.fullName());
//if you want to access prop inside object, you have to name object SO in the above example we use objName.property

//With ES6 shorthand:
/*fullName() { <----
  return person.fName + " " + person.lName;*/

// We can also create methods outside of object
let person = {
  fName: 'jane'
};
//create method that creates fullname of person and receive last name of person in function call:
person.fullName = function(lName) {
  return person.fName + " " + lName;
}
//in function call, we can send last name as arg
//this function call will return Jane Doe
console.log(person.fullName('Doe'));

//If you are creating method outside of object, do not use short notation

//ECMA script update
let fName = 'Susan';
let lName = 'Doe';
let person = {
  fName: 'Jane',
  //within object, use colon and then arrow function
  fullName: lName => { //<----with one arg, no parens are needed
    return person.fName + " " + lName;
  }
};
console.log(person.fullName('Doe'))

//OR ANOTHER WAY TO WRITE IT WITH FUNCTION OUTSIDE OBJ:

let fName = 'Susan';
let lName = 'Doe';
let person = {
  fName: 'Jane',
};
person.fullName = (lName) => { //<----with one arg, no parens are needed
  return person.fName + " " + lName;
}
console.log(person.fullName('Doe'))
//if we do not pass arg in fullName() call, we will just get function definition

/*************************************************** */
//Object methods using the 'this' keyword
let person = {
  fName: 'Mary',
  lName: 'Contrary',
  fullName() {
    //this is the same as person.fName
    return this.fName + " " + this.lName;
  }
};
console.log(person.fullName()); //this will return the fullName

//OR:
let person = {
  fName: 'Mary',
  lName: 'Contrary'
}
person.fullName = function() {
  return this.fName + " " + this.lName;
}
console.log(person.fullName());

//USING the this keyword helps us to keep objects dynamic!! 
//Using the this keyword makes methods dynamic and NOT BOUND TO ONE OBJECT!
//this keyword does not work with arrow functions
//creating objects using constructors is important when using the this keyword

/******************************************** */

//In Operator and for in loop for objects
let person = {
  fName: 'Jane',
  lname: 'Doe',
}
console.log('lName' in person); //console will return true
//this checks to see if lName is prop of person obj
console.log('name' in person); //console will return false

//what if we have a prop called name with value undefined
let person = {
  fName: 'Jane',
  lname: 'Doe',
  name: undefined
}
console.log(person.name === undefined);

let prop;
for(prop in person) {
  console.log(person[prop]);
}
// we can say for(key in prop)

/*Objects - advanced topics
 - object referencing
 ex: let str = 'Hello World';
 let str1 = str;
 memory boxes were made for each var as 
 the value for str was made then value for str1
 */
let person = {
  fName ='Riva',
  lName: 'Davidowski'
};
let person1 = person;
//we would get the object back inside person
//BUT, in the background, they don't store the values in a separate memory box. They both point to the same memory box.

person1.fName = 'Susan';
//if props and values of person1 were stored in separate memory box, then it should not change values of person object

// In the above example, this will change the values of person object. The reason this happens is because both have a common memory location

let obj = {};
let obj1 = {};
console.log(obj=== obj1)//this will return false
//anytime a new object is created, a new memory location is created. This is different from the person and person1 objects

/******************************************* */
// Cloning and merging Objects
//cloning
let person = {
  name: 'Ted',
  lName: 'Jones'
};
let person1 = {};
for(let prop in person) {
  person1[prop]= person[prop];
  //copying prop and value of person
}
console.log(person1); //we will have name and lName properties and values

//object.assign()
//can be used to clone and merge objects into route object

let people = {
  person1: 'John',
  person2: 'Mary' 
};
let person1 = Object.assign({},person);
//we are creating an empty object with person1
//this method will pass through object and copy all props into new object one by one



let voting = {
  canVote: true,
  gender: 'female'
};

let career = {
  graduate: true,
  hasJob: true
};
//we want to merge the above props into people object
Object.assign({},person,voting, career);
Object.assign(person, voting, career);
//this would put all properties into people object

/*********************************** */

/*CONSTRUCTORS!! THEY FORM THE BASIS FOR EVERYTHING
- set initial props of the object it creates
- constructors hold a  template and multiple objects out of the template that the constructor holds
*/
//constructor function
function Projects(student, personal, professional, fun) {
  this.student = student;
  this.personal = personal;
  this.professional = professional;
  //we can create props inside too
  this.fun = fun;
}
//the 'this' keyword would change depending on particular object

//Calling  the object
let funProject = new Projects('artshop','drawingProject','Portfolio','foodcalc');

//let funProjectTwo = new Project(//more projects here);

/* - The new keyword does two things
  - it creates empty object assigned to object name 
  - it calls constructor function with args given and replaces the this value with new object name that is used
  - it assigns attribute values to new props and automatically return the new object with new props and values
*/
// we could create a method inside object but it is best to keep those outside.

this.fun = function() {
  return `${this.fun} ${this.professional}`;
}
/*************************************** */
//NEW.TARGET
//the new keyword makes a normal function into constructor
//How to make sure that you don't miss the new keyword is where the new.target comes into PLAY!

/* The new.target returns empty called without new (false)
- it returns function(true) when called with new
- We can test the function call 
*/

if(!new.target) {
  return new Projects(student, personal, professional, fun)
};
//what if we return something after we create object after the constructor?

return {
  name : 'Riva',
  age: 34
};
//the object will be overriden by rest of the code
//if we return a string, then nothing happens. It will be ignored by the constructor function as it is a primitive



//CREATING A FUNCTION EXPRESSION

//let Project = function(student, personal, professional, fun);

/*********************************** */

//PRIVATE PROPS WITH CLOSURES
//any prop can be accessed from the outside of the constructor


function Cats(firstName, lastName) {
  this.firstName =firstName;
  this.lastName = lastName;
}

let myCat = new Cats ('King', 'Ragnar');
console.log(myCat.firstName);
//we could access this name prop outside


//what if WE WANT THINGS TO PRIVATE OR HIDDEN?!!!
//we can create closures, setters and getters and inner variables

/*1) Set the args in constructor 
2) add _ in front of args
*/

function Car() {
  let _type, _color;//declared outside
  this.setName = function(type, color) {
    _type = type;
    _color = color;
  }
  this.getName = function() {
    return `${_type} ${_color}`;
  }
}

let carOne = new Car();
console.log(carOne);
//NOW we will set by calling carOne.setName
carOne.setName('Subaru','blue');
console.log(carOne);
//even now, the prop is private
//so we have to call getName
carOne.getName();
//now we will get Subaru blue
carTwo.setName('Ford', 'black');
carTwo.getName();
//we will receive the property

//getOwnPropertyNames
//we pass instance of object into this method
console.log(Object.getOwnPropertyNames(carTwo));//we would only see setName and getName

/***************************************** */

//PROPERTY FLAGS AND DESCRIPTORS
/*THERE ARE 4 DESCRIPTORS WHEN PROPS ARE CREATED
 - value
 - writable: read only descriptor-when true, the value can be changed of prop
 -enumerable: takes visibility for property in loops (any loop)and gets or takes visibility. 
 -configurable: Can the descriptors be modified? if true, then yes if false, then no. If configurable value is false, it can't be changed. Also, the prop can't be deleted if the descriptor is false
 //by default, they are all true
 */

 //getOwnPropertyDescriptor(Obj ,'propertyName');
 // this method lets us look at prop descriptor of any project we want

 function Couches(color, age) {
   this.color = color;
   this.age = age;
   }
let myCouch = new Couches('blue', '2');
console.log(Object.getOwnPropertyDescriptor(myCouch, 'color'));//this would return value, writeable, enumerable, and configurable

//TO CHANGE THESE PROPS, we will use 
//Object.defineProperty(obj, 'prop', {descriptor:value});

//let's say I want to change color in my Couch

Object.defineProperty(myCouch,'color',
{ value: 'seafoam'});
console.log(myCouch);
//I should see that the value is now seafoam
Object.defineProperties(myCouch, {
  color: {value: 'blue', configurable: false},
  age: {value: 50}
});
console.log(myCouch);
//the props should have been updated. This is another way to write it

/****************************** */
//GETTERS AND SETTERS
/*data method - usual & accessor methods. The getter access the property 
and the setter changes or assigns value to property
*/

//getPropertyName() {return}, setPropertyName (f) {this.prop = prop}

let person = {
  //f is the value we want to receive
  set FName(f) {
    this.f = f;
  },
  get fName() {
    return this.f;
  },
  set lName(l) {
    this.l = l;
  },
  get lName() {
    return this.l;
  }
};
//this is an empty object
//the value has to be set first before we can access it
/*the setter is triggered when dot notation or square brackets are used
to assign value or change value of prop*/
person.fName = 'Riva';
person.lName = 'Davidowski';
console.log(person.fName);
//we will receive Riva
//This is another way of creating props by using accessor method
//The accessor method DOES NOT CREATE PRIVATE PROPS

/************************************************************** */
//Object.degine() with getters and setters
Object.defineProperty(person, 'age', {
  //we don't have to include it in setter and getter since we defined it above
  set(a) { //var is used to receive value of prop
    this.a = a;
  },
  get() {
    return this.a
  }
});
person.age =40; //this will go and call the setter and return value
//we would receive 40 in the browser after logging

//we use this to create props!

/******************************************************** */

//SYMBOLS - ANOTHER DATA TYPE
//these are immtable, and can't be changed!
//inside, we will give a label
let sym = Symbol('id');
//this label is used for debugging
//every symbol is unique even if it has the same label
let sym1 = Symbol('id');
console.log(sym === sym1);
//this will return false

//WHY USE SYMBOLS?
// They are used to create identifiers : social security numbers, identity numbers etc
//We don't want proprietary information compromised
let id = Symbol('id');
let names = {
  name: 'Riva Davidowski',
  [id] : 411-298-0989 //made up number
};
person.id1 = 566;
console.log(names);
//id1 is created separately 
//Symbols ARE HIDDEN PROPS THAT CAN BE USED FOR UNIQUE VALUE STORAGE

alert(id);//symbol values can't be converted to string!
//person.id will alert us to that particular num assigned to id
alert(id.toString()); //WE HAVE TO CONVERT SYMBOLS TO STRINGS 

Object.keys(names);
//this will return all our keys of prop names

//Object.assign is used for cloning. This does not ignore symbols.
let names2 = Object.assign({}, names); //this would clone the names object

//GLOBAL SYMBOLS
let sym = Symbol.for('id');
let sym1 = Symbol.for('id');
console.log(sum === sym1);
//this log would return true which means I created a global symbol

Symbol.keyFor(sym);
//this returns the key for the GLOBAL SYMBOLS

/************************************************* */
//PROTOTYPES AND PROTOTYPE INHERITANCE

function Name (first, last) {
  this.first = first;
  this.last = last;
  
}
let name1 = new Name('Jeremy', 'Rankin');
let name2 = new Name('Brit', 'Jelly');
console.log(name1); //this would show us the Name object with values above
/*in the console, we will see that a proto has been created with constructor inside
  -There is another proto with all the methods
  -All of these come from the global object
  -Every object has the prototypes
  - Arrays are objects (like everything) and we can see all the array methods
  under proto in the console window.
  */
 //PROTOTYPES are for functions, dates, strings, numbers

 let str = new String('Hello');
 //a console log will bring up all methods under proto

 /* - Null is at the top
    - Global object is at the top
  - Then the array object, string object etc.
  - We also have user defined objects (arr, strings that we create)
*/

//WHY USE PROTOTYPE:
// the prototype holds all methods that can be used multiple times
// Every time the constructor is created

//FOr constructor above:
//this is how we would use the prototype
Name.prototype.entireName = function() {
  return `${this.first} ${this.last}`
};
//we use these to save space while creating methods

/************************************************* */

//MORE ON PROTOTYPES and PROTO CHAIN

console.log(name1.__proto__ === names.prototype)
/*the first proto is for object istance created from constructor
-the prototype is for object constructor as such or the global obj
-the object instance inherits from the constructor
-the proto inherits from the object.prototype*/
name.__proto__.hello = function () {
  console.log('Hello There');
  //
}
console.log(name1);
//we would see that inside the proto object, would be the hello
/*instead of creating particular function in side the constructor, we
can create it for one obj instance (name1) inside the proto*/

console.log(arr.proto__ === Array.prototype);
//this is true 
//there is a hierarchy --null, global object, string, array etc. 

//PROTOTYPE CHAIN: -instance of obj, array object, global obj, null
//it goes from the bottom to the top
//global object is always at top along with null
//String.prototype(), Number.prototype(), Boolean.prototype()

//we can actually change the proto methods built in
//Array.prototype.reverse = function()
arr.__proto__.reverse = function() {
  console.log('Hello There');

}
arr.reverse(); // this would not return the normal reverse method results
//this would return Hello There! I changed the functionality using a proto
// This is not usually something we want to do, but it can be used

/************************************************ */
//PROTOTYPE INHERITANCE
/*inherit props and methods of another constructor or proto or object into 
another object*/
//There is a lot of time saved with proto inheritance

/*-an object can only inherit from one object
  Objeect1 => Object2 => Object3
  object one has props and methods and object2 has own props and method
  However, object2 will inherit props and methods from object 1 as well
  Object3 will also be inheriting from Object1 and Object 2
  You can't make Object1 inherit from Object 3 
*/

function Movies(title, yearReleased) {
  this.title = title;
  this.yearReleased = yearReleased;
};

Movies.prototype.movieRating = function() {
  return `${this.title} ${this.yearReleased}`
}
//this is how we use inheritance
Show.prototype = Movies.prototype;
function Show(genre) {
  this.genre = genre;
}

Show.prototype.drama = function() {
  if(this.genre === 'sci-fi') {
    //taking prop from Movies Object
    return `${this.title}`;
  }
}
/*we assigned the methods of new object to the Movies
but what about the values?*/

//the apply() method can be used on parent constructor
/*before I do anything, I have to use it on parent
   -send 'this' the instance that was created and 'args'
   */
/*************************************** */

//ES6 INTRODUCTION

/*classes and class inheritance
  -an easier way of creating objects
  -"syntatic sugar"
  -'class' keyword is wokring with prototypes and the proto 
    does all the work
  */
//HOW TO CREATE THEM

class Cat {
  //the constructor will get called first!
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }//can also end this with semicolon instead of braces
  //this would be the method created
  //method needs to be inside class
   catBreed() {
     return this.type + this.color;
   }
}
let catOne = new Cat('calico','orange');
let catTwo = new Cat('siamese','white');
/*the constructor is called and whatever is sent inside
of parens above is accepted inside of the constructor 
and props are created and values are intialized*/
//in the console, the values would now be calico and orange etc.
/*WHAT DO WE DO FOR METHODS?
 - methods are created after constructor*/

 // TO ACCESS PROPS:
 catOne.type;
 catTwo.color;
 //CAN ACCESS METHODS LIKE THIS:
 catOne.color();

 /*classes are higher form of constructors and protos
  -The methods are automatically assigned to protos with ES6
  - Whenever we call method from object created with 
    class, it takes that method from proto
  - classes are functions in the background
  - the class is the constructor
  */
  
//GET ALL PROP NAMES OF PARTICULAR OBJ
// CAN GET NAMES OF METHODS INSIDE OF PROTO
Object.getOwnPropertyNames(Cat.prototype);
//this would return the constructor and that includes the methods

/*PROOF THAT classes ARE IMPROVEMENT
 -class methods are nonenumerable by default
 */
for(let key in catOne) {
  console.log(key);
  //this would not return any methods
}

//CLASSES USE STRICT MODE BY DEFAULT!!






