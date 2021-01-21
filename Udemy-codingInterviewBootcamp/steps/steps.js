'use strict';

/* Write a function that accepts a positive number, N.
The function should console log a step shape with N levels
using the # character. Make sure the step has spaces on the right hand side!

Ex:
steps(2)
    '#  '
    '##'
steps(3)
    '#  '
    '## '
    '###'
steps(4)
    '#   '
    '##  '
    '### '
    '####'

    The space characters to the right of the steps make this challenging.
    Each step, should have the correct spaces to the right.
*/

/* 
Solution 1: iterative
Dealing with a matrix here:

n = 3 

# - -
# # -
# # #

- From 0 to n, iterate through rows
- For each row, create an empty string, 'stair'
- From 0 to n, iterate again, but this time through columns
   - IF curr column is equal to or less than current row,
     add a '#' to 'stair'
   - ELSE, add a space to 'stair'
- console.log 'stair'
*/
const steps = n => {
  for(let row = 0; row < n; row++) {
    let stair = '';

   for(let column = 0; column < n; column++) {
     if(column <= row) {
       stair += '#';
     } else {
       stair += ' ';
     }
   }
   console.log(stair);
  }
};

steps(9);

/*Solution 2: recursive

- If (row === n) then I have hit end of the problem
  (base case)
- If the 'stair' string has a length === n, then I am at the
end of a row
- If the length of the stair str is less than or equal to
the row number I am working on, I add a '#', otherwise
I add a space
*/

function makeSteps(n, row = 0, stair = '') {
  if(n === row) return;
  
  if(n === stair.length) {
    console.log(stair);
    return makeSteps(n, row + 1); 
  }
  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  makeSteps(n, row, stair);

}