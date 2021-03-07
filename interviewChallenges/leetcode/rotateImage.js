/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Input: matrix = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
Output: [[7,4,1],
         [8,5,2],
         [9,6,3]]
*/
/*
- Create a temp variable to hold current value
  - I have to transpose the matrix
    - Basically, the diagonals stay the same, but I am doing symmetrical
    swap on diagonals
*/
const rotate = matrix => {
  let length = matrix.length;
  // Here I tranpose the image
   /*
    1 2 3
    4 5 6
    7 8 9
    becomes:
      1 4 7
      2 5 8
      3 6 9
    */
  for(let i = 0; i < length; i++) {
    for(let j = i; j < length; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
   }
 }
 // I have two use two pointers to swap values on either 
 // side, so now I have something like:
    /*
      1 4 7
      2 5 8
      3 6 9
    and I want:
       7 4 1
       8 5 2
       9 6 3
  */
 for(let i = 0; i < length; i++){
   for(let j = 0; j < (length / 2); j++){
     // Set temp to current
     let temp = matrix[i][j];
     // First pointer equals second pointer
     matrix[i][j] = matrix[i][length - 1 - j];
     matrix[i][length - 1- j] = temp;
   }
 }
};