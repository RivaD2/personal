class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    // Bubble sort, not ideal nested loop
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      // Rightmost element is put in correct location (- i)
      for (let j = 0; j < length - i - 1; j++) {
        // Compare lefthand side to right
        if (this.collection[j] > this.collection[j + 1]) {
          // Create reference to leftHandSide
          const leftHandSide = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j+ 1] = leftHandSide;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);