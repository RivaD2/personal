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
//PROTOTYPES
//the new keyword makes a normal function into constructor
