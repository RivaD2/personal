import { Mappable } from './CustomMap';
// hold command/click when hovering over faker to be taken to type def file for faker
import faker from 'faker';

// Instance of class user satisfies properties required by Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color:string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}