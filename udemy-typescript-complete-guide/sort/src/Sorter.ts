// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex:number): boolean;
//   swap(leftIndex:number, rightIndex: number): void;
// }

export abstract class Sorter {
  // Promise that methods will exist eventually
  abstract compare(leftIndex: number, rightIndex:number):boolean;
  abstract swap(leftIndex: number, rightIndex: number):void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      // Rightmost element is put in correct location (- i)
      for (let j = 0; j < length - i - 1; j++) {
        // Compare lefthand side to right and swap elements
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}