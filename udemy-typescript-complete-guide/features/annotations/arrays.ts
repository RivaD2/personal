const carMakers = ['ford', 'toyota', 'chevy'];

// If I intialize array as empty array, I use annotations
// const carMakers: string[] = [];

const dates = [new Date(),new Date()];

// Help with inference when extracting values
// If I pull element out of the carMakers array, TS will know what type it is
const oneCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent us from adding incompatible values to the array
// Below does not work
carMakers.push(100);

// Help with built in functions (map, forEach, reduce)
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types, can put different types in arr
// I put in annotation if I ever do NOT intialize array with date literal and string literal
// I also put annotation in if I intialize an empty arr
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
