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
//decalring a var allows us to use it ON ANY object as seen below:
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

