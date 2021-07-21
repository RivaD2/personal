// What not to do
class ArrayOfNums {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]){}

  get(index: number): string {
    return this.collection[index];
  }
}


// Generic creation, yay!
class ArrOfAnything<T> {
  constructor(public collection: T[]) {}
  
  get(index: number): T {
    return this.collection[index];
  }
}

// I want an arr of strings so I create a new instance of ArrOfAnything
// If I delete <string> here, without specifying the type, type inference will kick in
new ArrOfAnything<string>(['a', 'b', 'c']);


// Generics with Functions
function printStrings(arr: string): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNums() {
  // This function would be nearly identical to pringStrings
  // An easy way to fix code duplication is to create a generic
}

// When printAnything is referenced or called, I specify the type of T
// Functions make use of type inference as well, just as in classes
function printAnything<T>(arr: T[]):void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['I am so tired!']);

// Generic Constraints
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print():void;
}

// Whatever type T is, it WILL have a print method
// Limits types I can pass in as T
// Idea of generic constrait is helpful as anytime I want to call a method or
// reference property on value marked by generic type, I want to make sure property/method exists.

// I can do this by creating an interface, and then use interface when I define generic type itself
function printHousesOrCars<T extends Printable>(arr: T[]):void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
 }

 printHousesOrCars<House>([new House()]);
 printHousesOrCars<Car>([new Car(), new Car()]);