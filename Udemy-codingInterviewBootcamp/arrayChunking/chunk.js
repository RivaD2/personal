'use strict';

/* Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size.

Ex: chunk([1, 2, 3, 4], 2) ----> [[1, 2], [3, 4]] ---> 2 elements in each chunk
Ex: chunk([1, 2, 3, 4, 5], 2) ----> [[1, 2], [3, 4], [5]] ---> 2 elements in each chunk
Ex: chunk([1, 2, 3, 4, 5], 4) ----> [[1, 2, 3, 4], [5]] --> 4 elements in chunk with remainining element
in its own chunk
*/

/* Solution 1:
 - Create an empty array to hold chunks called 'chunked'
 - For each element in the 'unchunked' array retrieve
 the last element in 'chunked'
 - If the last element does not exist, or if its length is equal 
 to the chunk size, push a new chunk(subarray) into 'chunked' with 
 the current element
 - Else, add the current element into the chunk
 */
const chunk = (arr, size) => {
  const chunked = [];
  for(let element of arr) {
    // Get last element in arr
    const lastElement = chunked[chunked.length - 1];
    if(!lastElement || lastElement.length === size) {
      chunked.push([element]);
    } else {
      lastElement.push(element);
    }
  }
  return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6], 3));

/* Solution 2:
- Use slice() which takes two args, the starting index and index to slice up to
- Create variable for empty 'chunked' arr
- Create 'index' start at 0
- While index is less than arr.length
    - push a slice of length 'size' from 'arr' into 'chunked'
    - Add 'size' to 'index'
    */
const chunkArray = (arr, size) => {
  const chunked = [];
  let index = 0;
  while(index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
};