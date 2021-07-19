import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // Reference length as a property using get
  get length(): number {
    return this.data.length;
  }

  // Decide if I need to swap two elements in a pair
  compare(leftIndex:number, rightIndex: number):boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex:number, rightIndex: number):void {
    const leftHandSide = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHandSide;
  }
}
