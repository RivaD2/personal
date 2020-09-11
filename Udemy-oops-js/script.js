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

//Dynamic access to properties
