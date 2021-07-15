const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Tuple
// There is meaning to the order of elements here
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Alterate way of writing the below is creating a type alias
// Creating the idea of a tuple
type Drink = [string,boolean, number];

// Now I freely use the tuple structure anywhere
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// What do these numbers mean to me?
// I know that there are two values and that they are numbers and that's it
const carSpecs: [number, number] = [400, 3354];

// If I use an object, it is very obvious what I am working with here
// It is really clear when we use objects to model a record
const carStats = {
  horsepower: 400,
  weight:3354
};