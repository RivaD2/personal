// 2nd: Define interface
interface Reportable {
  summary(): string;
}

// 1st: Example to understand why interfaces are used
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// This object ALSO has a summary function so they are both considered to be
// reportable types
const soda = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My soda has ${this.sugar} grams of sugar`;
  }
}


// Function that takes in object and prints out different properties
// I can see that the annotation is extremely long and will only
// get longer if I had more properties on the object:(

// If I added in more functions that would be called with oldCivic, the type annotation
// would be duplicated :( SO how can I improve this? With an Interface!! See above.
const PrintTheVehicle = (
  vehicle: {name: string; year: number; broken: boolean}
  ) : void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
};

// In order to call this function, I have to pass in object that meets specs provided by Interface
// or satisfy the interface
const printSummary = (item: Reportable) : void => {
   console.log(item.summary());
};

printSummary(oldCivic);
printSummary(soda);



