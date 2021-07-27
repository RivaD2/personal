// This automatically adds single variable to global scope---> Reflect
import 'reflect-metadata';

// MetaData with object
const plane = {
  color: 'red'
};

// Associate metadata with plane
// First arg is key, second is value, third is object we want to associate data with
// defineMetaData() allows us to attach metadata to obj/property of object
Reflect.defineMetadata('note', 'hi there', plane);
console.log(plane);

const note = Reflect.getMetadata('note', plane);
console.log(note);

// metadata with Class
@printMetadata
class Rocket {
  color: string = 'red';

  @markFunction('Hi there')
  soar(): void {
    console.log('Vrrrrrr');
  }
}

// Factory decorator
function markFunction(secretInfo: string) {
  return function (target: Rocket, key: string) {
    Reflect.defineMetadata('secret', secret, target, key);
  }
}

// What is better than reaching directly into prototype to retrieve info? See below
const secret = Reflect.getMetadata('secret', Rocket.prototype, 'soar');
console.log(secret);

// Define decorator and apply it to the class itself
// When it is applied to the class, loop through all properties on classes prototype and print out metadata
// for each property
function printMetadata(target: typeof Rocket) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}