/* Worst case Runtime: n^2
BubbleSort: Implement bubbleSort, selectionSort, and mergeSort
Using these sorting algorithms, sort the arr and return it.*/

// Bubblesort essentially is finding largest element in array and dragging it to the right side. 
/* bubbleSort steps: 
   - Start with running outer for loop, iterating through whole collection s of records
   (from i = 0 to < arr length)
   - Use an inner for loop to iterate over every step of the outer for loop from j = 0 to (arr length - i). Inner loop
   has shrinking window of elements for every step.
   - If the element at j is greater than j + 1, swap elements at j and j + 1.
     - Looking at current element, I ask if next element is greater or less than current? If it is less than 
     the current, swap so larger element moves to right.
*/

const bubbleSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; i < (arr.length - i - 1); j++) {
      // Look at curr and next element
      if(arr[j] > arr[j + 1]) {
        const lesserElement = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesserElement;
      }
    }
  }
  return arr;
};

/* Selection Sort: 
   - Iterate over element in arr from i = 0 to arr length
   - Assume the element at 'i' is the lowest in the arr
     - Assign i to 'indexOfMin' 
     - Iterate again with inner loop, for j from i + 1 to end of arr
       - See if there is an element with a lower value than i
       -If there is, update indexOfMin
      - If the index of the current element and the index 
      of the lowest element is not the same, swap them (if i an indexOfMin are not the same)
*/

const selectionSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    const indexOfMin = i;
    for(let j = i + 1; j < arr.length;j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i) {
      let lesser =  arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
};
