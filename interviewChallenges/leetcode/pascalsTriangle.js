/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],
        [1,1],
       [1,2,1],
      [1,3,3,1],
     [1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Pseudocode:
  - I can start at first row
    - I can manually add an arr with 1 [1]
    - Every row from then on I can manually add the 1, [1]
  - If I look at each row, the number of elements between 1's is 1 less than row count above
  - [1]
    [1  1], has indices of 0 and 1
    [1     ] index for the number I need here is 1
    - Elements that I need to add are elements in row above with indices of 
    1 less than the index I'm on
  - I need to push in arrays inside of a starting arr
  - I have to keep track of the prevRow
    - 
  - I return the arr at the end
  
*/

const generate = numRows => {
  let resultTriangle = [];
  if(numRows === 0){
    return resultTriangle;
  } 
  // Creating the first row which has 1 element
  resultTriangle.push([1]);

  // Populating each row, starting at 1, as I already have 0
  for(let i = 1; i < numRows; i++) {
    let previousRow = resultTriangle[i - 1];
    //Manually creating another row and adding 1
    let newRow = [];
    newRow.push(1);

    // Filling the interiors of each row
    // Starting at 1 again, as 1 is already at 0th position of new row
    for(let j = 1; j < previousRow.length; j++){
      // previousRow is 1, I will enter when j is more than 1
      newRow.push(previousRow[(j - 1)] + previousRow[j]);
    }
    newRow.push(1);
    // Pushing arr into the outer arr
    resultTriangle.push(newRow);
  }
  return resultTriangle;
}