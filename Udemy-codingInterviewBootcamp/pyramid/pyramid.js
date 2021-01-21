'use strict';

/*
This challenge builds of steps problem.
Write a function that accepts a positive number, N. The function 
should console.log a pyramid shape with N levels using the # character.
Make sure the pyramid has spaces on both the left AND right hand sides.

Ex: 
pyramid(1)
   '#'
pyramid(2)
    ' # '
    '###'
pyramid(3)
    '  #  '
    ' ### '
    '####'

- Still working with a matrix, with columns and rows
*/

/*
Solution 1: Iterative

- From 0 to n, iterate through the rows
- Create an empty string 'level'
- From 0 to 2*n-1, iterate over columns
   - Number of columns here is not equal to N, like in stair challenge
   - I have to think about how N is related to the columns
   - N is doubled, then I subtract one
- IF column has a #, 
  - add a '#' to the 'level'
ELSE
 - Add a space to 'level'
 - console.log 'level'
*/
const pyramid = n => {
const mid = Math.floor((2 * n -1) / 2);
 for (let row = 0; row < n; row++) {
   let level = '';

  for(let col = 0; col < 2 * n - 1; col++){
    if(mid - row <= col && mid + row >= col) {
      level += '#';
    } else {
      level += '';
    }
  }
  console.log(level);
 }
};

//Solution 2: recursive

function buildPyramid(n, row = 0, level = '') {
  if(row === n) return;

  if(level.length === 2 * n - 1) {
    console.log(level);
    return buildPyramid(n, row + 1);
  }
  const mid = Math.floor((2 * n - 1) / 2);
  let add;
  if(mid - row <= level.length && mid + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  buildPyramid(n, row, level + add);
}
