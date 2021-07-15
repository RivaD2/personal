
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a:number, b: number): number {
  return a / b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Using void to say there is no return value to this function
const logger = (message: string) : void => {
  console.log(message)
};

// 'never' means that I will never actually reach end of the function
// Corner case here as it is more common to have a return value in here
const throwError = (message: string): never => {
  throw new Error(message)
};

// Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather:  'sunny'
};

// Replace variable itself with destructuring statement
const logWeather = ({date, weather} : {date: Date, weather: string}):void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);