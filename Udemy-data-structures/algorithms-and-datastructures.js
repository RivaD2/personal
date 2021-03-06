 'use strict'

 // TIMING OUR CODE (BIG O)
 // Compare two solutions to the same problem

 /* Let's say we want to write a function that calculates 
 the sum of all nums from 1 up to (and including) some number (n)*/

 // First Solution
 function addUpTo(n) {
     //total is an acc in this case
     let total = 0;
     //start loop and go up until n each time
     for(let i = 1; i <= n; i++) {
         total += i;
     }
     return total;
 }
 console.log(addUpTo(6));
 //this adds 6 +5+4+3+2+1 for a total of 21

// Second Solution
function addUpTo(n) {
    // this is more of a mathmatical formula
    // We take 6 + 1 first. then multiply by 6 and divide by 2
    // Please Excuse My Dear Aunt Sally come to mind??
    return n * (n + 1)/2;
}
console.log(addUpTo(6))
// See notes on how we compare these first two functions on notes.md file

//Two more examples of How Big O works
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
// If I pass in 10, it prints 10
// What is the Big O here?
// This loop will either go to 5 or n, whichever is larger
// What I care about is what happens as n grows larger
// If n is 10,000 the loop runs that amount of tie
// BIG O here is O(n)

// Big O here is O(1)
function logAtLeast5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// Ex: 1: Focusing on Space Complexity, NOT time complexity
function sum(arr) {
    // Sums all items in array
    let total = 0;
    // Loop goes from 0 to end of array
    // Add value of each item in array to total
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
/* What parts of this function take up space?
  - One number, the variable total
  - Another number, i
  - THAT's it, for SPACE
  - No matter what the size is of arr, it doesn't have an impact on space
  - The two variables, i and total will always exist
  - So, the example above is O(1)
*/

//Ex: 2:: Focusing on Space Complexity, NOT time complexity
function double(arr) {
    // Takes an array and doubles values
    // This function makes a new array
    let newArr = [];
    //loops over length of first array and multiplies items
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

/* What parts of this function take up space?
    - The array gets longer, and longer, and longer directly in proportion to the  input
    - The space taken up is proportionate to input
    - So, it is O(n) space!!
*/

// STEP 3: Break Down the problem:
//Write a function which takes in a string, and returns counts of each character in the string
/*
 declare function name, charCount("My name is Riva");
    - do something, return an object with keys that are alphanumeric characters
    - Step 1, make object to return at the end
    - Step 2, Loop over string for each character...
      - IF char is a num/letter AND is a key in object, add 1 to count
      - IF char is a num/letter AND NOT in object, add it to object and set value to 1
      - If character is something else (a space, period etc.), don't do anything
    - Step 4, return object at end
*/

const countString = string => {
    const splitStringChars = string.split("");
   const result = splitStringChars.reduce((acc, curr) => {
        if(curr in acc) {
            acc[curr]++
        }
        else {
            acc[curr] = 1;
        }
        return acc;
    }, {})
    return result;
}
console.log(countString('Riva'));

/*
- Looking at this function above, one could start by creating an object
and focusing on handling one character in a string at time. This would
simplify the problem.
- Starting with the main logic first and dealing with uppercase/lowercase later
Point being, if a problem trips you up, go with what you know and write what you can
*/

//STEP 5: LOOK BACK AND REFACTOR
// Using the example below, how can this be refactored?
// Well, this can be done using reduce
//The problem could also be solved with a for in loop
//Reduce is above and for in is below
function charCount(str) {
    var obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            }else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
// This is a better version of the problem directly above
// How else can it be improved?
// How efficient is Regex?
function charCount(str) {
    let obj= {};
    for(var char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

//Another version of the above problem is to create a function 
// This function works with a single character at a time, getting a code at index 0
// Then we could pass this function into the above problem and get rid of the Regex
// if(isAlphaNumeric(char) instead of the Regex)
// Another question to ask, is when to use Lowercase()?
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
     return false;
    }
    return true;
}


// Ex 1 of Problem Solving Pattern: Frequency Counter
/* Write a function called `Same` which accepts two arrays. 
The function should return true if every value in the array has 
it's corresponding value squared in the second array. T
he frequency of values must be the same.*/

// Less efficient solution: 0(n^2) Quadratic Relationship: Nested loop
function same(arr1, arr2) {
    // If the arrays are different lengths, we're done! No way to be true
    if(arr1.length !== arr2.length) {
        return false;
    }
    //Loop over first array and call indexOf where we pass in square of each value
    for(let i = 0; i< arr1.length; i++) {
        // Using arrays below, start at 1, and ask, what is the index of 1^2 in array 2?
        
        let correctIndex = arr2.indexOf(arr1[i] **2)
        // If correctIndex is -1 means index of element does not match other array
        if (correctIndex === -1) {
            return false;
        }
        // If there is a match it removes the element from arr2
        arr2.splice(correctIndex, 1)
    }
    return true;
}
//Ex: first array below is arr1, second is arr2
// As I loop, I check values, if element from arr1 is squared in arr2, remove element from arr2
same([1, 2, 3, 2], [9, 1, 4, 4]) //true 1st iteration
                //    [9, 4, 4] // 2nd iteration 
                //    [9, 4] // 3rd iteration
                //    [4] // 4th iteration


// REFACTOR of same()
/* Instead of looping over arr1 and checking for each value in subloop
 over arr2, I can loop over each array separately.
 - Two separate loops is much better than nested loops
 - 0(n) time
 - Main idea, use an object to construct a way to break down contents of array or string
 - Compare the objects allowing us to improve our code
 */
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    // Each object will count frequency of individual values in arrays
    // I will end up with two objects in the end
    // The key is the value and the value is the frequency
    let counter1 = {};
    let counter2 = {};
    // Loop over value in arr1
    // Val is placeholder for each element array
    for(let val of arr1) {
        // Add 1 to counter1 if it is already in there, or initialize it to 1
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }
    // Is the key in the arr2, also check the values
    console.log(counter1);
    console.log(counter2);
    for(let key in counter1) {
        // Using arrays below, is key 2 of first object
        if(!(key ** 2 in counter2)) {
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]);
//{ '1': 1, '2': 2, '3': 1 }
//{ '1': 1, '4': 2, '9': 1 }


// Anagram Solution: Solving by using frequency counter pattern

//O(n) time
// Function takes two args
// Edge case: if the lengths of two strings don't match, it can't be true, I return false right away
// Create an object first as frequency counter

const validAnagram = ((first, second)=> {
    // Immediately know that I have to return if first and second strings are not equal in length
    if(first.length !== second.length) {
        return
    }
    // Created an object, as I loop through I will create an object as a breakdown of first string
    const lookup = {};
    console.log('lookup object',lookup);
    // Loop over the first string (first)
    for(let i = 0; i < first.length; i ++) {
        // Take first character first time through (letter) and check if lookup object has character inside it
        let letter = first[i];
        console.log('first character in first string', letter);
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++) {
        // Compare each character to the lookup object based off first string
        let letter = second[i];
        console.log('letter in second string', letter)
        // Can't find letter or letter is zero then it is NOT in anagram, otherwise, substract 1
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
})
// validAnagram('cinema', 'iceman');

// Multiple Pointers Pattern
/*Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero OR undefined if a pair does not exist.*/

// This solution is NOT the best. It is the naive solution:
// O(n^2) time comlexity
 const sumZero = arr => {
     for(let i = 0; i < arr.length; i++) {
        for(let j = i +1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
     }
 }
 // WIth multiple pointers, we could set a pointer at -4 (start) and 5(end)
 // Start by seeing what the sum is, so what is -4 + 5?
 // Then we would move the end pointer to 2, then compare those. Etc... Let's refactor!
sumZero([-4, -3, -2, -1, 0, 1, 2, 5])

// Multiple Pointers: The Better Solution
// O(n) time complexity, linear
const sumZeroSolutionTwo = arr => {
    let left = 0;
    let right = arr.length - 1;
    // -4 is left pointer and right pointer is 10 in the array below
    while(left < right) {
        // So, check -4 and 10 sum? That gives us 6
        let sum = arr[left] + arr[right];
        // So, -4 and 10 is 6, which is greater than 0, so we subtract one and move the pointer to 3 in the array.
        // Then we start the loop again and -4 is checked against 3. The sum is -1. The else statement runs now.
        // When the else statement runs, we move left pointer up one.
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0){
            //moves right pointer down the array
            right--;
        } else {
            //moves left pointer up the array
            left++
        }
    }
}
sumZeroSolutionTwo([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

// Multiple Pointers Pattern cont...
/* Implement a function called `countUniqueValues` which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in the array, 
but it will always be sorted. Use two pointers pattern.*/

//O(n) time
const countUniqueValues = arr => {
    // Means there are 0 unique digits
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
       if(arr[i] !== arr[j]) {
         i++;
         arr[i] = arr[j];
       }
    }
    return i + 1;
}
countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);

 /*
 i  j---------------------->
[1, 1, 2, 3, 3, 4, 5, 6, 6, 7]
// if i is not equal to j, move i up by one
    i++
[1, 1, 2, 3, 3, 4, 5, 6, 6, 7]
    i     j-----they don't match, so i++
[1, 2, 2, 3, 3, 4, 5, 6, 6, 7]
       i     j -----_now they do match, so we don't do anything
[1, 2, 3, 3, 3, 4, 5, 6, 6, 7]
*/
    
//Sliding Window Pattern
/*
Write a function called maxSubarraySum which accepts an array of integers and a number n.
This function should calculate the max sum of n consecutive elements in the array.*/
 
// Naive approach: Time Complexity of O(N^2)
// Each time we loop we sum digits so this is really inefficient
// I can say this is N^2 any time there are nested loops
const maxSubarraySum = ((arr, num) => {
    // Edge case
    if( num > arr.length) {
        return null;
    }
    // Account for if there is an array with all negative nums
    // Starting at 0 won't help unless we are dealing with all positive nums
    let max = -Infinity;
    //loop goes to almost the end of the array
    for(let i = 0; i < arr.length - num + 1; i++) {
        // Temp stores sum each time through, 3 nums at a time
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[ i + j ];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
});
// looking for 3 digits with max sum in array
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)


// Efficient Solution for maxSubarraySum
// O(n) linear complexity, as I only go over array once
// Here I keep a variable with total and to get sum of next set of digits, I create a sum that goes up to a certain point
// I move the window up by subtracting a num instead
const maxSubarraySumBetterSolution = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    // Edge case
    if(arr.length < num) return null;
    // Create a first sum (let's say I pass in 3 from array below to sum first 3 digits. I then store that in maxSum)
    // That is it, I don't keep looping
    for(let i = num; Infinity, arr.length; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // Start another loop, but this time, I start after the first 3 nums that I summed above. 
    // For example, using array below, I would start loop here at index 3.
    // I am gonna take tempSum and add index 3 and then subtract index 0.
    for(let i = num; i < arr.length; i++) {
        // MaxSum is what I return but I start
        // I subtract one array value and then add another value in and that is the sliding window
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
maxSubarraySumBetterSolution([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// Divide and Conquer Pattern
/* Given a **sorted** array of integers, write a function called search that accepts a value and 
returns the index where the value passed to the function is located. 
If the value is NOT found, return -1.*/

// Naive Approach
// O(n) linear
// Moving from left to right checking values until we find the one we want

const search = ((arr, val) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
})

// Better Solution, using a binary search as this is a divide and conquer algorithm
// Here I can pick a point, a middle point and check if value I am looking for is greater than or less than the midpoint
// I then look at subarray, and pick middle element and do the same thing
// It chops off the amount of values I have to search for
// Log(N) time
const binarySearchBetterSolution = (arr, val) => {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let mid = Math.floor((min + max)/ 2);
        let val = arr[mid];

        if(arr[mid] < val) {
            min = mid + 1;
        }
        else if(arr[mid] > val) {
            max = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

//Linear Search Soltution from using PseudoCode
// Best case for linear is O(1)
// Worst case is O(n)
const linearSearch = ((arr, val) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1
})
linearSearch([1, 3, 4, 6, 7, 8], 8)

// Binary Search Algorithm 

const binarySearch = ((arr, val) => {
    const start = 0;
    const end = arr.length - 1;
    const mid = Math.floor(start + end) / 2;
    while(arr[mid] !== val) {
        if(val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor(start + end) / 2;
    }
})
binarySearch([1, 2, 4, 10, 80, 88, 100, 102], 88)

// Singly Linked List 
// Node stores data and a reference to the next node
// Big O: Insertion: O(1); Removal depoends, O(1) front front or O(N) if from end;
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        // Should create a new node and assign to head and tail of list
        let newNode = new Node(val);
        if(!this.head) {
            // Both head and tail are the same thing
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            // Update the tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Removing val from end of list
    // To remove it, we have to assign a new tail and that involves going through list from the beginning
    // Have to find second to last item and then update the tail
    // We have to traverse using a while loop, while there is next
    // We can use an auxiallary method for pop...
    pop() {
        if(!this.head) return undefined;
        // Will have two vars, a current and a previous or a newTail
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
            // Keep going until current can't move forward
        }
        this.tail = newTail;
        // Severing the connection, so there is no pointer
        this.tail.next = null;
        // Decrement the length
        this.length--;
        // Is the list empty now? If so, reset head and tail
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // Shift---removing from the head
    // Store haed in a variable
    // Set head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed
    shift() {
        if(this.length === 0) return undefined;
            let currentHead = this.head;
            // Making new head
            this.head = currentHead.next;
            this.length--
            // This is what we took off the list
            return currentHead;
        }
        // Unshift: Add node to beginning
        // Method accepts val
        // Create a new node using val passed into function
        // If there is no head property on list, set the head and tail to be newly created node
        // Otherwise, set newly created node's next property to be current head property on list
        // Set the head property on the list to be that newly created node
        // Increment length of list by 1
        // Return the linked list
        unshift(val) {
            let newNode = new Node(val);
            if(!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++
            return this;
        }
        // Get: Retrieving a node by it's position in the linked list
        // It takes in a number and I traverse the list that many times (.next over and over) and add one to counter
        // There are no indexes, I have to manually count in a linked list
        // Method accepts and index
        // If index is less than zero or greater than or equal to the length of list, return null
        // Loop through list until I reach the index and return the node at specific index
        get(index) {
            if(index < 0 || index >= this.length) return null;
            let counter  = 0;
            // This keeps track of current position while I traverse
            let current = this.head;
            // At beginning, for ex, if index was 3, counter is not equal, I add one to counter and change current to current.next
            // This is the traversal
            while(counter != index) {
                current = current.next;
                counter++
            }
            return current;
        }
        // Set: Changing the value of a node based on position 
        // Method accepts index and a val
        // Use get method to find specific node
        // If the node IS NOT found, return false
        // If node is found, set tehe value of the node to be value passed into function and return true
        set(index, val) {
            // this will return to us the actual node or null
            let foundNode = this.get(index);
            // If I've found the node, set the new value
            if(foundNode) {
                foundNode.val = val;
                return true;
            }
            return false;
        }
        // Insert: Similar to set, method takes an index and a value
        // However, insert adds a node to list at a specific position
        // If index is less than zero or greater than length , return false
        // (If index is the same as the length, push a new node to the end of the list)
        // If the index is 0, unshift a new node to the start of the list
        // Otherwise, using get method, access the node at the index -1 (I WANT THE NODE BEFORE)
        // Once I have previous node of where I am trying to insert, set next property to be the new node
        // Then set the next property on the new node to be the PREV next
        // Increment length and return true
        insert(index, val) {
            if(index < 0 || index > this.length) return false;
             // Using double bangs on push and unshift as it will convert the returns to booleans
            if(index === this.length) return !!this.push(val);
            if(index === 0) return !!this.unshift(val);

            let newNode = new Node(val);
            let previous = this.get(index -1);
            let temp = previous.next;
            previous.next = newNode;
            newNode.next = temp;
            this.length++
            return true;
        }
        // Removes node from a specific position
        // Function takes in an index
        // If index is less than zero or greater than length, return undefined
        // If index is the same as length -1, use pop()
        // If index is 0, use shift method
        // Otherwise, use get method to access node at index - 1
        // Set next property on that node to be the next of the next node
        // Decrement the length
        // Return value of node removed
        remove(index) {
            if(index < 0 || index >= this.length) return undefined;
            if(index === 0) return this.shift();
            if(index === this.length -1) return this.pop();

            let previousNode = this.get(index -1);
            let removed = previousNode.next;
            this.length--
            previousNode.next = removed.next
        }
        // Reverse reverses the linkedlist in place!
        // As I traverse, I reverse
        // Swap head and tail
        // Create a variable called next and another called previous
        // Create a variable called node and initialize it to start head
        // Loop through list and set next property to be th next property on whatever current node is
        // Set next property on the node to be whatever the previous one was
        // Set node variable to be the value of the next variable
        reverse() {
            let node = this.head;
            //swap head and tail
            this.head = this.tail;
            // will use node variable in the loop
            this.tail = node;
            let next;
            // Setting to null to make sure end of list, the tail is null
            let previous = null;
            for(let i = 0;i < this.length; i++) {
                next = node.next;
                node.next = previous;
                // previous is now what current used to be
                previous = node;
                node = next;
            }
            return this;
        }
        // Help me to see reverse method
        print() {
            let arr = [];
            let current = this.head;
            while(current) {
                arr.push(current.val)
                current = current.next
            }
            console.log(arr);
        }
    }
let list = new SinglyLinkedList();
list.push(1);
list.push(4);
list.push(10);
list.push(15);


// Doubly LinkedList: All that I do is add a pointer to prev node and next node
// Each node points in two directions...
// Almost identical to singly linked list, no indexes, random access etc
// There is a head and tail, BUT every node in list points to next node ahead of it and node behind it!

class SinglyNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        // only difference in the Node class compared to singly linked list
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adds node to end of doubly linked list
    // Create a new node with value passed in
    // Check if head is null or length is 0, basically if list is empty
    // If list is not empty, set the next property on the tail to be that node
    // Set the prev property  on the newly created node to be the tail
    // Set tail to be newly created node and incement, then return list
    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // this is creating the pointer to the node ahead and node behind, hence doubly linked list
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.length++;
        return this;
    }
    // Popping is easier in doubly linked list vs singly linked list
    // If there is no tail, or head, or length is 0, return undefined (nothing to pop)
    // Otherwise, store current tail in a variable to return later
    // If length is 1, set the had and tail to be null
    // Update the tail to be the previous Node
    // Set the newTail's next to be null
    // Subtract 1 from length(as we popped something off) and return value popped
    pop() {
      if(!this.head) return undefined;
      let poppedNode = this.tail;
      if(this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          // Set new tail to be the one right before 
          this.tail = poppedNode.prev;
          // This is the new tail and .next is empty
          this.tail.next = null;
          // Chopping off the second connection
          poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
    }
    // Removing a node from beginning of list
    // If length is 0, return undefined
    // Otherwise, store current head property in variable
    // If length is one, set the head to be null and tail to be null
    // Set head to be the next of the old head
    // Set the heads previous property to null
    // Set the old head's next to null
    // Decrement length
    // Return old head
    shift() {
        if(length === 0) return undefined;
        let shiftedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--
        return shiftedNode;
    }
}

list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push("Last item");
list.pop();

/* Undirected Graph using Adjacency List: Working on fundamentals*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // Add vertex or node before connection, or edge
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    // Drawing connections between vertices
    addEdge(v1, v2) {
        // Find in the adjacency list the key of v1 and push into array
        // Do the same things to v2
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // Connnection is stored in two places so I will pass in two args
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => {
            //keep everything where it is not equal to v2
        vertex !== v2;
        });
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => {
            vertex !== v1;
        })
    }
    // Removing edges and vertex 
    // Loops as long as there are other vertices in the list for that vertex
    // Uses remove Edge method
    // Remove key out of list
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    // Traversals: Searching and visiting neighbors
   /*DFS Traversal: Tricky to understand depth vs breadth
    - With graphs, we pick a vertex to start on
    - To do a depth first traversal, find a neighbor and continue to follow the neighbors
    before we visit siblings(siblings are not necessarily on the same level
    - Follow neighbors before backtracking*/

    DFSRecursive(startingVertex) {
        let result = [];
        let visited = {};
        const list = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            list[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(startingVertex);
        return result;
    }
    // Iterative DFS
    // Set a variable to hold stack
    // While stack is not empty, vertex = stack.pop()
    DFSIterative(startingVertex) {
        let stack = [startingVertex];
        let result = [];
        let visitedVertices = {};
        let currentVertex;

        visitedVertices[startingVertex] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    // Use a queue, FIFO
    BFSTraversal(startingVertex) {
        let queue = [startingVertex];
        let result = [];
        let visitedVertices = {};
        let currentVertex;
        
        visitedVertices[start] = true;
        while(queue.length) {
            // Take first item out and push into results array
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visitedVertices[neighbor]) {
                    visitedVertices[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}
let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
g.DFSRecursive('A');

// Writing hash function:
// For example: hash('pink'): How would I convert pink to a number? There are many ways, but it needs to be deterministic
// I can use UTF character codes and I can access this by using charCodeAt() and pass in an index.
// I can subtract 96 after using charCodeAt() method: "total" += "hello".charCodeAt(1) -96. 
// I can also use modulo to help me

// Has that works with strings only:
// This is a basic hash function
/* Downsides to this function:
     - This only hashes strings, so that could be a problem. 
     - This isn't constant time.
     - There is clustered data*/

const hash = (key, arrayLength) => {
    let total = 0;
    for(let char of key) {
        // Map "a" to 1, "b" to 2, etc.
        let value = char.charCodeAt(0) -96;
        total = (total + value) % arrayLength;
    }
    return total;
}
console.log(hash("pink", 10)); // returns index 0;
console.log(hash("cyan", 10)) // returns 3

// Improving the previous hash function: Still not perfect, but array length is prime
// This works well enough to implement basic hash table and handle collisions
const hashImproved = (key, length) => {
    let total = 0;
    // Using prime numbers minimizes collisions
    let prime = 31;
    // Loop at most 100 times
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) -96;
        total = (total * prime + value) % length;
    }
    return total;
}
console.log(hashImproved("hello", 13)); // returns 7
console.log(hashImproved("goodbye", 13)); // returns 7

// Hash Table implementation:Practice run through

class HashTable {
    constructor(size=53) {
        // All data is stored here
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }
    // Set method: Accepts a key and a value
    // The key is hashed and then stores the key-value pair in the hash table arr via separate chaining (in a nested structure)
    set(key, value) {
        let index = this._hash(key);
        // Insert key and value at index, check if it is unoccupied
        if(!this,keyMap[index]) {
            // Set index of keyMap to empty arr
            this.keyMap[index] = [];
        }
        // If there is already something there, push key, value pair into parent array
        this.keyMap[index].push([key, value]);
    }
    // Get method: Accepts a key and hashes the key. 
    // I then go to that position, that index in arr(keyMap) and retrieve the value
    // If key is not found, return undefined
    get(key) {
        let index = this._hash(key);
        // If there is nothing there, return undefined
        if(this.keyMap[index]) {
            for(let i = 0; i < keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    // Return entire subarray
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined
    }
    // Keys Method: Loops through hash table array and returs an arr of keys in the table
    /*Values Method: Loops through hash table arr and returns an arr of values in the table
         - It is likely to have multple values that are the same
         - What do we do with these values? We want to return unique keys and values*/
    values() {
        let valuesArr = [];
        for( let i = 0; i > this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
    keys() {
        let keysArr = [];
        for( let i = 0; i > this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    // This ensures that I won't get duplicates
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
}
/*Big O of Hash Tables: Insertion, deletion, accessing data = O(1)Time
                          - This depends on how the hash function works
                          - 
                        

let ht = new HashTable(10);
ht.set("Hello World", "goodbye");
ht.set("dogs", "are cool");
ht.set("Cats", "are the best");
ht.set("frenchfries", "with mayo");
ht.set('dogs', "are cool")
ht.get("frenchfries", "mayo");
ht.values();
ht.keys();


