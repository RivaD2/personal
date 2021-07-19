import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string){
    super();
  }

  get length(): number {
    return this.data.length;
  }
  // Comparing two string values
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  // Can't swap chars directly in string
  // Split string, swap the same way as I did with nums
  swap(leftIndex: number, rightIndex: number): void {
    const arrayOfCharacters = this.data.split('');
    const leftSide = arrayOfCharacters[leftIndex];
    arrayOfCharacters[leftIndex] = arrayOfCharacters[rightIndex];
    arrayOfCharacters[rightIndex] = leftSide;

    this.data = arrayOfCharacters.join('');
  }
}