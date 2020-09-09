'use strict';
// push
// adds item to array at the end
const colors =['red', 'blue', 'green'];
colors.push('violet');
colors.push('yellow');

//pop
// it pops off the last value in array
const users =['Riva', 'Anthony', 'Liz'];
users.pop(); //this would remove Liz

//shift
// This method shifts a value off the front of the array
// Shift will give us back item that was removed
const users = ['Riva', 'Anthony', 'Liz'];
users.shift(); // this will remove 'Riva'
const firstUser = users.shift(); 

// Unshift
//This method gives us option to add item into the array
const users = ['Riva', 'Anthony', 'Liz'];
users.unshift('Danielle'); //'Danielle' will be added to the front of the array

//splice
// This method removes item from array depending on index passed through
// It can remove multiple items from the index and give us back item that is removed
const cars = ['BWM', 'Kia', 'Ford'];
// need to pass the index of the item to be removed and how many items to remove
cars.splice(1,1); //this will return Kia and Ford

//it can give us back deleting item 
//This will return BMW
const deletedCar = cars.splice(1,1);

//we can set new items inside array
//This will remove first item and replace it with Nissan
const deletedCar =cars.splice(1, 1, 'Nissan');

//Slice
// This slices a part of the array and returns new array
const fruits = ['Banana', 'Apple', "Mango"];
//this method creates a copy of the first array
const newFruits = fruits.slice();

//Concat
// This method can bring two arrays together

const boys = ['Tim','Jimmy','Oswald'];
const girls = ['Sue', 'Tina', 'Mary'];
//Now there will be one array with both boys and girls
const users = boys.concat(girls);

//forEach
// Similar to for loop, it will loop through an array of items and do something
const users = [
  { name: 'John', age: 22 },
  { name: 'Chloe', age: 27 },
  { name: 'Paul', age: 18 } 
];
// Looping through users and for each of users, we are logging user's age
users.forEach(user => console.log(user.age));
//or
users.forEach((user)=> {
  console.log(user.age);
});

//find();
// This method loops through an array and find the first item that has value of condition that is passed through
const userNames = [
  { name: 'Daniel', age: 22 },
  { name: 'Marie', age: 27 },
  { name: 'Pauline', age: 18 } 
];
//This will return Pauline
//This brings us back one item of array
//if we have two values that are the same, it will return the first one
const newUsers = userNames.find(newUsers => newUsers.age === 18);

//Filter
//Filters items of an array based on condition
const people = [
  { name: 'Daniel', age: 22 },
  { name: 'Marie', age: 18 },
  { name: 'Pauline', age: 18 } 
];
//filter will return multiple values that are the same
const newPeople = people.filter(person => person.age ===18);
//This would return Marie and Pauline as their ages are not equal to 22
const deletePerson = people.filter(person => person.age !=22);

//Map
//Map loops through the array and it will bring back data or create new data for each of the users
const workers = [
  { name: 'Daniel', age: 22 },
  { name: 'Marie', age: 18 },
  { name: 'Pauline', age: 18 },
  { name: 'Timothy', age: 43}
];
const newWorkers = workers.map(user => user.name);
//This would be a new array with just usernames inside
console.log(newWorkers);

//Sort
// Sorts data by various values or orders
//sort can only compare two values at a time
const names = [
  { name: 'Daniel', age: 22 },
  { name: 'Marie', age: 18 },
  { name: 'Pauline', age: 18 },
  { name: 'Timothy', age: 43}
];
// The names array is sorted lowest to highest by age
// It will give us back two names at a time
//If condition is met, we set it to 1 (or true)
names.sort((a, b) => {
  if(a.age > b.age){
    return 1;
  } else {
    return -1
  }
});
//or
//Make it a one line using ? to IF condition is met, and : for else do this
//we could sort by name as well
names.sort((a, b) => a.age >b.age ? 1 : -1);

//Reverse
// Reverses items inside array
const foods = [
  { name: 'Pancake', yummy: true  },
  { name: 'Squid', yummy: false },
  { name: 'tacos', yummy: true },
  { name: 'hotdogs', yummy: true}
];
//this will return array with hotdogs first and pancake last
foods.reverse();

//Join
//This will join two strings together as one string
const animals = ['cat', 'dog', 'bear','tiger', 'elephant'];
// This will make array into a string of animals
const newAnimals = animals.join(); 
// We can also separate them out with dashes like this:
const anotherAnimalList = animals.join(' - ');
// this will return cat-dog-bear-tiger-elephant

//reduce
// This will loop through array and do a calc for us
const euros = [25, 35, 82, 96];
const sum = euros.reduce((total, curr)=> total + curr);
return sum;