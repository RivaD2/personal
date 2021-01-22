'use strict';

/* Write a function that accepts an integer N and returns a NXN 
spiral matrix.

- The spiral is hard to see, but if I look at matrix(3), I can 
see that the numbers go 1, 2, 3, then down 4, 5, to left, 6 7
then up 8, and to right 9. This forms a spiral shape.

- In matrix(4), I can see the clockwise spiraling in even more.
- If I look at each matrix, the last num I will ever print out is n^2
- 2 * 2 = 4, 3 * 3 = 9, and 4 * 4 = 16

Ex: matrix(2)
     [[1, 2]],
      [4, 3]]
    
    matrix(3)
      [[1, 2, 3],
       [8, 9, 4],
        [7, 6, 5]]
    
    matrix(4)
       [[1,   2,  3, 4],
       [12, 13, 14, 5],
       [11, 16, 15, 6],
       [10,  9,  8, 7]]
*/

/*
- I assume here N = 3
- Depending on value N the end row will be different
- The start column in some counter that decides what index I am trying to fill out
- A series of for loops will take place, and inside of each one, I have to iterate from some start column up to end column
- I then have to insert some value on the first row
- After first loop is done, I can increment start row value
- Basically the starting/ending counters are cutting the matrix down at certain points in time

[1, 2, 3]
[8, 9 ,4]
[7, 6, 5]

- Create an empty array of arrays called 'results'
- Create a counter variable, starting at 1
- As long as (start column <= end column) AND (start row <= end row)
   - Loop(while) from start column to end column
     - At results[start_row[i]], assign counter variable
     - Increment counter
   - Increment start row
   - loop(for) from start row to end row
      - At results[i][end_column] assign counter variable
      - Increment counter
   - Decrement end row 
   - repeat for other two sides (other for loops)
*/

const matrix = n => {
  const results = [];
  for(let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  // startColumn, endColumn etc will change over time
  while(startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++
    }
    endColumn--;
    // Bottom row
    for(let i = endColumn; i >= startColumn;i--) {
      results[endRow][i] = counter;
      counter++
    }
    // Move end row up by one
    endRow--;
    // Start column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++
    }
    // Move start column inwards
    startColumn++
  }
  return results;
};
console.log(matrix(5));

