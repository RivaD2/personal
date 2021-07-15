// Reminder of classes
class Vehicle {
  constructor(public color:string) {
  }

   protected honk(): void {
    console.log('get outta my way, honk!');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels:number, color: string) {
    super(color);
  }

  private drive():void {
    console.log('chugga chugga');
  }

  // This method is inside Car Class so it can call drive
  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4,  'red');
car.startDrivingProcess();

