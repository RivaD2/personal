/*
You are given 'coordinates', a string that represents the coordinates of a square of the chessboard. 
Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

Ex 1:
Input: coordinates = "a1"
Output: false
Explanation: On a chessboard, the square with coordinates "a1" is black, so return false.

Pseudocode:
- On a chessboard, which is a perfect square, I can see that nums are vertical
and letters are horizontal
- I can create a variable called 'chessboard' and set it to an object
  - In this object, I can set key value pairs that represent relationship
  of numbers to letters on board:
   let chessboard = {
      "A": 1,
      "B": 2, 
      "C": 3, etc.
    }
  - Create variables to represent the row and column on the board
    - let row = (row will always be a num between 1 and 8)
    - let column = (column will always be a letter between A and H)
    - Row will need to be a number so I can use parseInt to help me here
  - Access chessboard object and get num associated with the column
    - If column is even, white to true otherwise false
    - Do the same for row but do the inverse of column...colors switch, white, black,white, black etc.
*/

const squareIsWhite = function(coordinates) {
  let chessboard = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
  }

  // Row is num, column is letter
  let row = parseInt(coordinates[1]);
  let column = chessboard[coordinates[0]];
  let firstRowWhite;

  // If on first row, this takes care of columns
  if(column % 2 === 0){
    firstRowWhite = true;
  } else {
    firstRowWhite = false;
  }
  
  if(row % 2 === 0){
    return !firstRowWhite;
  } else {
    return firstRowWhite;
  }
  
};

console.log(squareIsWhite('c3'));
