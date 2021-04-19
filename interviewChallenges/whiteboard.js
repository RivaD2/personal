'use strict'

// Practice with Dynamic Coding with Alvin Zablan from Coderbyte

/* Challenge 1: Fibonacci Pattern
Write a function fib(n) that takes in a number as an argument.
The function should return the nth number in the Fibonacci sequence.
The first number in the sequence is always one.
To generate the next number in the sequence, we sum the previous two nums
*/

// Big O: time: O(n) and Space of O(n) using Recursion
// Implementing memoization by using a fast acting data structure
// Use an object where the keys will be argument to our fn and value will be return value
// Memoization can help us solve dynamic JS problems
// If I don't pass in a second arg in fn call, by default a memo with a new JS object will be created
// Memoization cuts down our recursive calls

const fib = (n, memo = {}) => {
  // Is arg in memo?
  if(n in memo) return memo(n);
  if(n <= 2) return 1;
  // Recursive calls here 
  memo(n) = fib(n - 1, memo) + fib( n - 2 , memo);
  return memo(n);
}

/* Challenge 2: gridTraveler
Say that I am a traveler on a 2D grid. I begin in the top-left corner and 
my goal is to travel to the bottom-right corner. I can only move down or right.

In how many ways can I travel to the goal on a grid with dimensions m * n?
Write a function gridTraveler(m,n) that calculates this.
*/

// I will still memoize this function so that time complexity is better
// Memoization allows us to store keys in memo and shorten recursive calls
// We pass down memo object to recursive calls
// Keys of object are args to fn, and values are values from function calls
// Big O time: O(m * n), space: O(n + m)
const gridTraveler = (m, n, memo = {}) =>{
  // Making sure nums don't get mixed
  const key = m + ',' + n;
  if(key in memo) return memo[key];
  // Are args in memo?
  // If the grid is only (1, 1) then we only have 1 way to go.
  // The start is the end.
  if(m === 1 && n === 1) return 1;
  // If either dimension is 0, the grid is invalid and there is no way to travel. 
  if(m === 0 || n === 0) return 0;
  // I have to sum going down and going right
  // If I am going down, I am decreasing rows(m) by 1
  // If I go right, I have same num of rows, but decrease n (columns)
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}
console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));

//Challenge 3: canSum
/* Write a function canSum(targetSum, nums) that takes in a targetSum and an 
arr of nums as args.
The function should return a boolean indicating whether or not it is possible to generate
the targetSum using the nums from the arr.
   - I can use an element of the arr as many times as needed
   - I can assume that all input nums are not negative
*/
// m = target sum, n = arr length
// Big O time: O(m * n), space: O(m)
const canSum = (targetSum, nums, memo ={}) => {
  if(targetSum in memo) return memo[targetSum];
  // Base cases: If targetSum reaches value 0 (in my tree) then I can always generate 0 by taking no nums from array
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;
  // Iterating through every element of nums arr
  for(let num of nums) {
      // I need branching logic (transiting from one node of tree to next)
      const remainder = targetSum - num;
      // I can resuse nums of arr as many times as I like
      // This function should return boolean 
      // If it is possible to generate reminder with nums of arr, then return true for targetSum
      if(canSum(remainder,nums, memo) === true) {
          memo[targetSum] = true;
          return true;
      }
  }
  memo[targetSum] = false;
  return false;
};

/*FindSome: Write a function that will pair up the arr element whose sum
is equal to a given num* (similar to canSum recursive, but this is 
an iterative approach */
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }  
    sumsLookup[arr[i]] = true;
  }
  return output;
}
 

// Challenge 4: howSum
/* Write a function howSum(targetSum, nums) that takes in a targetSum and an arr of nums as args.
The function should return an arr containing any combination of elements that add up to exactly the targetSum.
If there is no combo that adds up to targetSum, return null.
If there are multiple combinations, just return a single one.
*/

// This is similar to the canSum. I am not returning a boolean
// Big O: Time is O(n^m * m) brute force without memo, space is O(m) 
// With memo: Time is O(n * m^2), space is O(m^2)(m keys and each key has a value)
const howSum = (targetSum, nums, memo = {}) => {
  if(targetSum in memo) return memo[targetSum]
  // Base cases
  // 0 means that it is possible to generate targetSum
  if(targetSum === 0) return [];
  // Nums are only positive in this challenge
  if(targetSum < 0) return null;
  // Recursive call for every num in array
  for(let num of nums) {
      const remainder = targetSum - num;
      // Recursive call on howSum
      // Assigned to variable as we can return two different results
      const remainderResult = howSum(remainder, nums, memo);
      // In the tree, we wanted to return as soon as it is possible to generate remainder
      if(remainderResult !== null) {
          // The nums are the edges from the tree diagram(which are the nums in arr)
          memo[targetSum] = [...remainderResult, num];
          return memo[targetSum]
      }
  }
  memo[targetSum] = null;
  return null;
};

//Challenge 5: howSum
/* Write a function bestSum(targetSum, nums) that takes in a targetSum and an arr
of nums as args. The function should return an arr containing the shortest combination of nums
that add up to exactly the targetSum.
If there is a tie for the shortest combo, return one of those*/


// This challenge is similar to howSum and canSum, but now I have to consider the shortest way
// Target sum is key in memo object
// Big O: time is O(m * n^2) and space is O(m^2)
// m = targetSum and n is length of arr
const bestSum = (targetSum, nums, memo = {}) => {
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  // Create variable to compare recursive calls to see which is shorter
  let shortestCombo = null;

  for(let num of nums) {
    const remainder = targetSum - num;
    // Reminder combo is shortest way to generate remainder
    const remainderCombo = bestSum(remainder, nums, memo);
    if(remainderCombo !== null) {
        // Created combo that gives me targetSum
      const combination = [...remainderCombo, num];
      // If combination is shorter than current shortest combo
      if(shortestCombo === null || combination.length < shortestCombo.length) {
          // The shorter combination wins out and can stay
          shortestCombo = combination;
      }
    }
   }
  memo[targetSum] = shortestCombo;
  return shortestCombo;
};

console.log(bestSum(7, [5, 3, 4,7]));
console.log(bestSum(8, [2, 3, 5]));

// howSum = Combinatoric problem/ How will you do it?
// canSum = Decision problem/ Can you do it? Ye sor no?
// bestSum = Optimization Problem/ What is the best way to do it?

/*************************************************************** */
// Inputs are not always nums in dynamic programming

// Challenge 6: canConstruct
/* Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.
   The function should return a boolean indicating whether or not the target can be constructed
   by concatenating elements of the wordBank arr. I can resuse as many elements in wordBank as needed.
   
   Ex: canConstruct(abcdef, [ab, abc, cd, def, abcd])----> true;*/

//m = target.length and n= wordBank.length, m is target
// Big O: time is O(n * m^2) as I don't have to explore duplicate subtrees
// Big O space is O(m^2)
const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    // Iterating through wordBank
    for(let word of wordBank) {
      // When is it ok to make recursive call using that word
      // Have to make sure word is a prefix of target (I have a prefix, use it to shrink target)
      if(target.indexOf(word === 0)) {
        const suffix = target.slice(word.length);
        // Make recursive call on suffix, can I construct the suffix?
        // If suffix can be made and word is in wordBank, then target can be made
        if(canConstruct(suffix, wordBank, memo) === true) {
            memo[target] = true;
            return true;
        }
      }
    }
    memo[target] = false;
    return false;
};

// Challenge 6: countConstruct
/* Write a function countConstruct(target, wordBank) that accepts a target string and an arr of strings.
This function should return the number of ways that the target can be constructed by concatenating elements of the 
wordBank array. I can reuse elements of the wordBank as many times as needed.

// So similar to above problem, but instead of returning a boolean, I am returning the
number of ways I can construct the target.
*/

// m = target.length, n = wordBank.length
// Big O time: O(n * m^2), and space: O(m^2)
const countConstruct = (target, wordBank, memo = {}) => {
  if(target in memo) return memo[target];
  if(target === '') return 1;
  
  // Whenever I get a way to construct the word, I add it to the count
  let totalCount = 0;
  for(let word of wordBank) {
    // Check if word is a prefix
    // If if statement is never true, then the count will be 0, so I just return it
    if(target.indexOf(word) === 0) {
        // Take suffix and call recursively on it
        // Num of ways I can construct suffix 
        const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
        totalCount += numWaysForRest; 
    }
  }
  memo[target] = totalCount;
  return totalCount;
}
console.log('avenger',countConstruct('avenger', ['aven', 'a', 'ven', 'ger', 'er']));
console.log('string enter pot',countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));

//Challenge 8: Find max depth of a BST from Terrible WhiteBoard Youtube
// max Depth is num of nodes along the shortest path from root node down to the leaf node(node without children)
// Basically, how far down can I go?

/* Algorithm:
1. Use BFS to traverse tree level by level
2. Keep track of depth as I go with count variable
3. Implement a queue 
4. Create a variable to keep track of parent nodes popped off as I traverse
5. Add root node to the queue 
6. Check if it has children, if it does, add its children and pop it off queue
7. That would be one traversal, 
8. So I do this logic for each node
9. Once I hit a leaf node, return count
*/

const BFSDepth = root => {
  if(root === null) return 0;

  let queue = [];
  queue.push(root);
  // Instiantiate depth var
  let depthCount = 0;
  
  while(queue.length !== 0) {
      let numOfNodes = queue.length;
      while(numOfNodes > 0) {
          // Grab nodes that are in queue
          // FIFO
          let currentNode = queue.shift();
          // Checking if node has children
          if(currentNode.left === null && currentNode.right === null) {
              depthCount++
              return depthCount;
          }
          if(currentNode.left !== null) {
              queue.push(currentNode.left);
          }
          if(currentNode.right !== null) {
              queue.push(currentNode.right);
      }
      return numOfNodes--
    }
    depth++
  }
}

// Second way to solve find Max depth of binary tree using recursion
// BFS
// Assuming I am given a tree with a root node that represents tree
const maxDepth = root => {
  const depth = 0;

  let BFS = (node, level) => {
    if(node === null) return 0;
    if(level > maxDepth) maxDepth = level;
    BFS(node.left, level +1);
    BFS(node.right, level +1);
  }
  BFS(root, 1);
  return depth;
}


// Morris Traversal (inOrder Traversal) from ThinkFWD onYoutube /Leetcode Challange
// Essentially Using two pointers
// Assumes I am given a root
function inOrderTraversal(root) {
  // Tourist pointer starts at root
  let tourist = root;
  let solution = [];

  while(tourist !== null) {
    // Create guide to look at tourists left subtree
    let guide = tourist.left;

    // This all runs as long as tourist is not on the edge
    // As long as guide has a right to go to and that right is not null or equal to tourist
    if(tourist.left !== null) {
      while(guide.right !== null && guide.right !== tourist) {
        // Walk to rightmost point
        guide = guide.right
      }
      // Create a bridge to tourist
      if(guide.right === null) {
        guide.right = tourist;
        tourist = tourist.left;
      } else {
        // What if rightmost element is bridge? Destroy the bridge as that means tourist has traveled there.
        guide.right = null;
        solution.push(tourist.val);
        tourist = tourist.right;
      }
    }
    else {
      solution.push(tourist.val);
      tourist = tourist.right;
    }
  }
  return solution;
};

// twoSum Challenge (Web Dev Simplified Youtube)
/* Challenge: Given an array of integers, return the indices of the two nums
such that they add up to a specific target.
I can assume that each input has exactly one solution and I may not use the same element twice

Ex: [2, 7, 11, 15], target = 9
// return only one solution which is an arr of indices
*/

// Store array inside a hash instead
// No nested for loops
const twoSum = (nums, target) => {
  let previousValues = {};
  for(let i = 0; i< nums.length; i++) {
    const currentNum = nums[i];
    const neededValue = target - currentNum;
    // Check object to see if it has something for the key at neededValue
    const index2 = previousValues[neededValue];
    // This means I have something for that object
    if(index2 !== null) {
        return [index2, index]
    } else {
        previousValues[currentNum] = i;
    }
  }
}

// TechLead Youtube LeetCode Challenges
// Pascals Triangle:
/* Given a non-negative index k, where k < 33, return the kth index row 
of the Pascal's Triangle. The row index starts from 0.
*/

const getItem = (row, j) =>{
  if(j< 0 || j>= row.length) {
      return 0;
  }
  return row[j];
}

const getRow = rowIndex => {
  let row = [1];
  for(let i = 0; i<= rowIndex; i++) {
    let newRow = new Array(i + 1);
    for(let j = 0; j<= i + 1; j++) {
      let digit = getItem(row, j -1) + getItem(row, j);
      newRow[j] = digit;
    }
    row = newRow;
  }   
  return row;
};

// Insert into BST recursive solution (not as efficient)
const bstInsert = function(root, val) {
  if(val >= root.val) {
    if(root.right) {
      bstInsert(root.right, val);
    } else {
      if(root.left) {
        bstInsert(root.left, val)
      } else {
        root.left = new TreeNode(val);
      }
    }
  }
  return root;
}


// Longest Palindrome from TechLead Youtube LeetCode challenges
/* Given a string which consists of lowercase and uppercase letters, find the
length of the longest palindromes that can be built with those letters.

This is case sensitive, for example, "Aa" is not considered a palindrome.
Assume the length of the string will not exceed 1,010
Ex: input: "abccccdd" ---> output: 7
One of the longest palindromes is "dccaccd" with a length of 7
*/

// Order of letters doesn't matter here
// Create a hashmap indicating for each letter, how many characters do I have
// Go through each character and for each pair I have, count the pairs
// For each pair I have, that is a palindrome
// Big O: 2 passes given length of passes O(n^2) and time is same
const longestPalindrome = s => {
 let letters = {};
 // Create hashmap
 for(let i = 0; i < s.length; i++) {
    let si = s[i];
    if(letters[si]) {
      letters[si]++;
    } else {
      letters[si] = 1;
    }
 }
  // Scan hashmap for pairs
  let totalPairs = 0;
  let hasOdd = false;
  for(let l in letters) {
    let c = letters[l];
    let pairs = Math.floor(c/2);
    if(!hasOdd && c - pairs * 2 >=1) {
      hasOdd = true;
    }
    totalPairs += pairs;
  }
  return totalPairs * 2 + (hasOdd ? 1:0);
}

// Check if a string is a palindrome (esssentially reversing a str)
/* Let's say I have an arr of strings, arr, and for each string, I want to determine if
it is a palindrome. Return true or false each time.

arr = ["The quick brown fox jumped over the sleeping dog","oozy rat in a sanitary zoo", "Carla loves chocolate"];
*/

// I can tell the one in the middle is palindrome
// First thing to ask, is there going to be punctuation?
/* Steps:
    Use loop, or forEach
    Once I am there, put everything in lowercase using .toLowercase()
    Remove all spaces using .replace() (giving me one solid string)
    Create new variable and reverse it
    */

function palindromeChecker(arr){
    arr.forEach(element => {
    element = element.toLowerCase().replace(/\s/g,'');
    // creating an array then turn it back to string
    let newElement = element.split('').reverse().join('');
    if(newElement === element) {
      console.log('this is a palindrome')
      return true;
    } else {
      console.log('this is not a palindrome')
      return false;
    }
  })
}
let arr = ["The quick brown fox jumped over the sleeping dog","oozy rat in a sanitary zoo","Carla loves chocolate"];
console.log(palindromeChecker(arr));


//merge two sorted linked List (Terrible Whiteboard, Youtube Leetcode challenge)
/* Merge two sorted Linked Lists and return it as a new list. The new list should be made
by splicing together the nodes of the first two lists.*/
class ListNode {
  // A node I can use for the below function
  // I have to create a dummy node below
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
const mergeTwoLists = function(list1,list2) {
  let dummyNode = new ListNode(-1);
  // Reference to dummyNode will keep changing
  // I intialize the head so that at the end, I can reference initial value and return it
  // Head is -1 so I will return head.next at the end
  let head = dummyNode;
  while(list1 !== null && list2 !== null) {
    if(list1.val <= list2.val) {
      dummyNode.next = list1;
      list1 = list1.next;
    } else {
      dummyNode.next = list2;
      list2 = list2.next;
    }
    dummyNode = dummyNode.next;
  }
  if(list1 !== null) {
    dummyNode.next = list1;
  } else {
    dummyNode.next = list2;
  }
  return head.next;
}

/* Given a linkedlist, return a boolean indicating whether or not
the list is circular:*/

const isCircular = linkedList => {
  let currentNode = linkedList.head;
  if(currentNode === null) return false;

  // Rather than use an array, using object keeps Big O at O(n)
  let previousNodes = {};
  // Traverse
  // As we traverse, track visited
  while(currentNode !== null) {
    // Check previousNodes
    if(previousNodes[currentNode]) {
      // List is circular
      return true;
    } else {
      // What about nodes not visited yet?
      previousNodes[currentNode] = currentNode;
      currentNode = currentNode.next;
    }
  }
  return false;
}

// Write a function that deduplicates a linkedlist:
const removeDuplicates = linkedlist => {
  let currNode = linkedlist.head;
  let listOfValues = [];
  while(currNode !== null) {
  // On first iteration, currNode goes into list
  listOfValues.push(currNode.val);
  if(listOfValues.indexOf(currentNode.next.val) === -1) {
    currentNode = currentNode.next;
    } else {
    // There is a duplicate, so change next pointer to remove it
    currentNode.next = currentNode.next.next;
    }
  }
  return linkedlist;
}

// Binary Search Recursive: For Binary Search, data has to be sorted already
const binarySearchRecursive = (arr, num, left, right) => {
  if(left > right) {
    // Error, can't find num;
    return false;
  }
  // Pick midpoint
  let mid = left + ((right - left)/ 2);
  // If I've found element, then I need to return true
  if(arr[mid] === num) {
    return true;
    // Otherwise, if num is on left side of mid, search left side
  } else if(num < arr[mid]) {
    return binarySearchRecursive(arr, num, left, mid -1);
    // Otherwise search the right side
    // Left point moves up to mid plus 1, right stays as is
  } else {
    return binarySearchRecursive(arr, num, mid +1, right);
  }
}

// Binary Search Iterative Approach
const binarySearchIterative = (num, arr) => {
  let left = 0;
  // Start off right at rightmost position in arr
  let right =  arr.length - 1;
  while(left <= right) {
    let mid = left + ((right -left) / 2);
    if(arr[mid] === num) {
      return true;
    }else if(num < arr[mid]) {
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  // Num has not been found
  return false;
}

// Hanker Rank: Left Rotate an Array of integers
// [1, 2, 3, 4, 5] ----> [3, 4, 5, 1, 2]

const rotateLeft = (arr, rotations) => {
  const rotatedArray = arr.concat();
  for(let i = 0; i < rotations; i++) {
    // Pop off item from front
    const frontItem = rotatedArray.shift();
    // Push front item to back
    rotatedArray.push(frontItem);
  }
  // One rotation done
  return rotatedArray;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 4));

// FreeCodeCamp: Caesars Cipher or Shift Cipher
/*Write a function which takes ROT13 encoded string
as an input and returns a decoded string*/
// Letters will be shifted 13 places
// The input will be decoded
const cipherString = str => {
  let result = '';
  // Loop through the string
  for(let i = 0; i < str.length; i++) {
    // Use charCodeAt (for ASCII value, numerical representation of characters on keyboard)
    // This takes a letter and gives me ASCII value
    let asciiValue = str[i].charCodeAt();
    // Move num to left 13 spaces
    if(asciiValue >= 65 && asciiValue <= 77) {
      result += String.fromCharCode(asciiValue + 13);
    } else if (asciiValue >= 78 && asciiValue <= 90) {
      // FromCharCode differs from charCodeAt, this one takes ASCII num and gives me a letter
      result += String.fromCharCode(asciiValue - 13);
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log('in cipher',cipherString("SERR PBQR PNZC"));
cipherString('AZ'); // ASCII value is 65

// FreeCodeCamp Seek and Destroy
/*Given a function that takes in an arr and an arg(the first arg in the destroyer
function), followed by one or more args, remoe all elements from the initial arr
that are the same value as the arguments
Ex: destroyer([1, 2, 3, 1, 2, 3], 2,3) -----> output: [1, 1]*/

const destroyer = arr => {
  // Remove all values
  let args = Array.from(arguments);
  // Give me everything from index 1 and on and remove first element
  args.splice(0, 1);
  let targets = args;
  arr.filter(num => {
        // If num is not in targets
    return targets.indexOf(num) === -1;
  })
}
console.log('in destroyer',destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*Selection Sort: Instead of first placing large values in sorted position, 
it places small values into sorted position
Ex: [5, 3, 4, 1, 2]
     Compare 5 and 3, 3 is min, so set 3 to min
     Compare 5 and 4, 3 is still min
     Compare 5 and 1, so now 1 is new min
     Compare 1 and 2, 1 is still min
     Now I swap min with whatever the starting num was
     Repeat the process, now starting at next index which is 3
     
     PseudoCode:
     Make var to store min value
     Compare this item to net item in the arr until I find another min
     If I find new min, save index of where the value is found in var
     If min is not the index I began with, swap two values
     Repeat this with next element until arr is sorted
     (I have to shrink window of what I am comparing on iteration)
*/

// BIG O time: O^n2
const selectionSort = arr => {
  const swap = (arr, index1, index2) => {
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

    for(let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[minIndex] > arr[j]) {
              minIndex = j;
          }
      }
      if(i !== minIndex) swap(arr, i, minIndex);
    }
    return arr;
  }
}
selectionSort([0, 2, 1, 7, 15, 4, 9]);

/*Insertion Sort: Builds up sort by gradually creating 
larger half of arr which is always sorted.It takes each element and places 
each element where it should go in sorted portion.
Ex:  [5, 3, 4, 1, 2] --> Look at 5 and 3
     [3, 5, 4, 1, 2] --> Look at 4, 3 and 5 are now sorted
     [3, 4, 5, 1, 2] --> Look at 1, 3, 4 and 5 are the sorted portion
     [1, 3, 4, 5, 2] --> Look at 2, 1, 3, 4 and 5 are now sorted
     [1, 2, 3, 4, 5] complete

PseudoCode:
- Start by picking second element in arr(our sorted portion will be considered at beginning)
- Compare the second element with one before it and swap if necessary
- Continue to next element
- If it is in the incorrect order, iterate through sorted portion (left side) 
  to place element in correct spot
- Repeat until arr is sorted*/

// BIG O: Time: O(n^2): It is good when data is coming in 
const insertionSort = arr => {
  for( let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // Work backwards
    // Start figuring out where inserted value needs to go
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
 }

insertionSort([2, 1, 9, 76, 4]);

/* Implement a function named generateRange(min, max, step), which takes three args
and generates a range of integers from min to max, with the step. The first integer
is the min, the second the max and the third, the step.

Ex: generateRange(2, 10, 2) // should return an arr of [2, 4, 6, 8, 10]
    generateRange(1, 10, 3) // should return an rr of [1, 4, 7, 10]*/

const generateRange = (min, max, step) => {
  let results = [];
  for(let i = min; i <= max; i += step) {
    results.push(i);
  }
  return results;
};

/* Write a function that acccepts a string parameter and reverses each word
in the string. All spaces in the string should be retained*/
const reverseWords = str => {
  return str.split('').map(word => word.split('').reverse().join(''));
}

/* Count the number of divisors of a positive integer n. Random tests go up to n = 5000000.*/
const getDivisors = n => {
  let count = 0;
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) count ++
  }
  return count;
}

/* Write a function that returns the first word with the greatest number of
repeated letters*/

const countLetters = str => {
  // Splitting at words
  let tempArr = str.split(' ');
  tempArr = tempArr.map(word => {
      // Split at letters
      let tempWord = word.toLowerCase().split('');
      return tempWord.reduce((acc, curr) => {
        // Creating properties on the object
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if(acc[curr] > acc.max) {
          acc.max = acc[curr];
        }
        return acc;
      }, {max: 1, word: item})
  })
  let amount = 1;
  let word = '';
  for(let item of tempArr) {
    if(item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }
  if(amount > 1) {
    return word;
  }
  return -1;
}

/* Given a function, confirmEnding which takes two args, a str and a target,
check if a str ends with the given target string, target. Use a substr() method.

Ex: confirmEnding("Bastian", "n")*/
const confirmEnding = (str, target) => {
// can also use slice return str.slice(-target.length === target)
  if(str.substr(-target.length) === target) {
    return true;
  }
  return false;
}

/*Write a function that checks whether a given string is a palindrome.
Remove all alphanumeric characters.*/
const isPalindrome = str => {
 let reg = /[\W_]/g;
 let removedAlphanumerics = str.toLowerCase().replace(reg,'');
 const reversed = removedAlphanumerics.split('').reverse().join('');
 if(reversed === removedAlphanumerics) return true; 
  return false;
} 
isPalindrome("eye");

/*Write a function that takes an obj as an arg and returns a very 
similar object, but with a special property. The returned obj should allow
a user to access values by providing only the beginning of the key for the value they want. 

For example, if the given object has a key idNumber, you should be able to 
access its value on the returned object by using a key idNum or even id.

Num and Number shouldn't work because we are looking for matches at the
beginning of a key.*/

const partialKeys = obj => {
    // loop over properies of the obj
    // Create all substring properties on the obj
    // Assign substring properties to values
  const newObj = {};
  Object.keys(obj).sort().reverse().forEach(key => {
    const value = obj[key];
    for (let i = 0; i < key.length; i++) {
      const newKey = key.substring(0, i + 1);
      newObj[newKey] = value;
    }
  });
  return newObj;
};

// What are the data types supported by JS?
/*
boolean,
string,
integer,
null,
undefined,
symbol*/

// What do the break and continue statements do?
/* The break statement jumps out of a loop and the continue statement jumps over one
iteration of the loop. If I had 10 iterations, and on the second I had  continue statement,
I would skip over all the code for example.

//Explain the differences between var, const and let
/* var: It is a scope defined variable and is limited to a function. If it is defined
        outside of the function, it is global. It is function-scoped.
   const: Is the same thing as let, HOWEVER, it can't be reassigned. 
          const num = 50; num can't be reassigned but it CAN be mutated.
   let: Scoped-defined. It is limited to a code block. If I call this outside, it won't work.
       It is inside a block of code.


// Explain the difference between null, undefined and undeclared variables
/* Null: null is a value of a variable and type object. I can check for type of null
        can be evaulated. 
   undefined: It is a variable that has been declared, but it's value does not exist or value is undefined.
   undeclared: A variable that has been declared without the var keyword
*/

//What is the difference between == and === ?
/* == operator tests for abstract quality, it does type conversion for doing equality conversion
  === operator is more strict:  var num = 50 === var num = '50' // returns false

  These deal with type conversions*/
      

// 'trick' question regarding syntax
// What does each return?
function foo1() {
  return {
      // return hello
      bar:'hello'
  }
}

function foo1() {
  return 
  { //dead code, return undefined
    // opening curly is not on the return line
      bar:'hello'
  }
}
// Youtube Frontend Interview Question Peter Elbaum:

/*What is an IIFE?
It is an immediately invoked function expresssion. It creates a closure around the code I write.
It is writing a function and then immediately calling it. It helps me to mitigate naming collisions*/

/* What CSS frameworks have I used?
breakpoints, styleguides. or are you overly reliant on bootstrap etc?
*/

/* What does the keyword 'this' refer to?
  this is a property of an execution context or function. 
  It is typically a reference to an object in which it is used and when it isn't, 
  it is referencing the global context or window object. Arrow functions don't have 'this' but 
  have it inherited from the parent (in React for example)*/

/*What is the difference between absoloute, relative and static positioning in CSS?
relative: top, bottom, left, right specify how offset a box is from its normal position
absolute: taken out of normal document flow and attached to parent that is relatively positioned. 
          If there is no relative parent, it attaches to the window
static: default value*/

/*What are the parts of an HTTP request?
1. Preflight: TCP connection, client establishes a TCP connection.
    This is the period before the request is sent.
2. Request is sent, status is pending
3. HTTP request comes back either resolved or rejected
*/

// Given an array of nums, write a function that returns the values and the index value

const selfPlusIndex = array => {
  const newArray = array.map((item, i)=> item + i)
  return newArray;
}

// Shuffle list of integers in an array
// Measure where I am in array, starting at the end and working backwards
// For each index, get currentindex and generate a random num based on current value so it isn't greater
// With random num, assign currentIndex a temp value while I mutate the original one
// Mutate currentIndex and give it randomIndex value

const shuffle = arr => {
  let currentIndex = arr.length;
  let tempValue, randomIndex

  while(currentIndex !== 0){ 
   randomIndex = Math.floor(Math.random() * currentIndex)
   currentIndex -= 1;

   tempIndex = arr[currentIndex];
   arr[currentIndex] = arr[randomIndex]
   arr[randomIndex] = tempValue
  }
  return arr;
}

/*Write a function that takes in two strings as arguments, and returns the number of times the first string, a single 
character, is found in the second string 
*/

const isIncluded = (str1, str2) => {
  let count = 0;
  for(let letter of str2) {
    if(letter === str1) {
      count ++
    }
  }
  return count;
}

console.log(isIncluded('a', 'Riva'))

   
// Replace every occurance of a given character in a string with another character.
// Replace "l" with "X"
//'hello world' ---> 'heXXo worXd'

const replaceChars = (str, char, charToBeReplaced) => {
  let charStorage = [];
  
  for(let i= 0; i < str.length; i++) {
    if(str[i] === charToBeReplaced) {
      charStorage.push(char);
    } else {
      charStorage.push(str[i])
    }
  }
  return charStorage.join('')
}
console.log(replaceChars('Riva', 'b', 'v'));

  
const replaceTheChar = (str, char, charToBeReplaced) => {
  let result = str.split('')
  while(result.indexOf(charToBeReplaced) !== -1) {
    result.splice(result.indexOf(charToBeReplaced), 1, char);
  }
  return result.join('');
}

console.log(replaceTheChar('Banana', 'o', 'a'))

/*
Given a string, that includes a bunch of words, return the MOST repeated word.

input: str
output: str

- Assign a variable to empty object to hold values
- Split the string where there is whitespace, so individual words would be
  separated out
  - Original str: 'duck duck goose ragnar duck kitty ragnar'
    - after split: ['duck', 'duck', 'goose', 'ragnar']etc.
- Iterate using for of loop
  - as I iterate, if the word is not in obj, obj[word]++
    else - set the obj[word] = 1
  - Basically, this iteration is to add words to obj and set count
- Assign max variable to 0 (this will keep track of any NEw max as I go)
- Assign new variable, mostRepeats = ''
- Iterate again using separate for loop
  - TThis time I will be checking for duplicate words
- Return mostRepeats
*/

const repeatedWord = str => {
  let splitString = str.split(' ')
  let storage = {};

  for(let word of splitString){
   if(!storage[word]){
      storage[word] = 1
   } else {
      storage[word]++
   }
  }
  let max = 0;
  let mostRepeated = '';
  for(let word in storage){
    if(storage[word] > max){
      max = storage[word];
      mostRepeated = word;
    } 
  }
  return mostRepeated; 
}
console.log(repeatedWord('duck duck goose ragnar duck kitty ragnar'));

const mostRepeatedWords = str => {
  let splitString = str.split(' ')
  let storage = {};
  let repeats = [];
  for(let word of splitString){
    if(!storage[word]){
      storage[word] = 1
    } else {
      storage[word]++
    }
  }
  
  for(let word in storage){
    if(storage[word] > 1){
      repeats.push(word);
    } 
  }
  return repeats.join(', '); 
}
console.log(mostRepeatedWords('duck duck goose ragnar duck kitty ragnar'));
  

  /*
  Given the challenge above, provide a solution 
  that includes ONLY one iteration*/

const mostRepeats = str => {
  let repeatedWords = str.split(' ');
  let storage = {};
  let repeats = [];
  for(let word of repeatedWords) {
    if(!storage[word]) {
      storage[word] = 1
    } else {
      repeats.push(word);
    }
  }
  return repeats.join(', ');
}
console.log(mostRepeats('riva riva ragnar kitty cat kitty'));

  /*Write a JS program to find first non repeated char in a str.
  Input: "cbcbdde"
  Output: e
  */

 
const findRepeat = str => {
  if(str.length === 1) return str;

  const strToArr = str.split('');
  let solution = {};

  for (let char of strToArr) {
    solution[char] = solution[char] + 1 || 1;
  }
  for (let key in solution) {
    if(solution[key] === 1) {
      return key;
    }
  }
}

/*Given a number, return an array containing the two halfs of the number. 
If the number is odd, then make rightmost number higher. 
All nums will be integers and I can expect negative nums.

input: num
output: array with two halfs of num

numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(-9) ➞ [-5, -4]
*/
  const numberSplit = n => {
    let arrOfHalves = [];
    
    if(n % 2 === 0) {
      arrOfHalves[0, 1] = n / 2;
      return arrOfHalves;
      
    } else if (n % 2 !== 0) {
      arrOfHalves[0] = Math.floor(n / 2)
      arrOfHalves[1] = Math.ceil(n / 2 ) 
    } 
    return arrOfHalves;
  }
  
/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

const findLongestWordLength = str => {
  let newString = str.split(' ');
  let maxLength = 0;
  
  for(let i = 0; i < newString.length; i++){
    if(newString[i].length > maxLength){
      maxLength = newString[i].length;
    }
  }
  return maxLength;
}

/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

const largestOfFour = arr => {
  let largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
    largestNums[i] = largestNumber;
  }
  return largestNums;
}
  
console.log(largestOfFour([[4, 5, 1, 3], 
                           [13, 27, 18, 26], 
                           [32, 35, 37, 39], 
                           [1000, 1001, 857, 1]]));

/*
Given an array of 1's and 0's find the longest running count of 1's.
 
 input: arr [0, 1, 1, 0, 0, 1, 1, 1, 1]
 output: [1, 1, 1, 1]

 PseudoCode:
 - Maintain two counters
   - Create currentMax 
   - Create finalMax;

- Use for loop to read each num from start to end
  - IF nums[i] === 1
    - increment currentMax 
    - Math.max(currentMax, finalMax)
  - Every time I see a 0, exit out of if condition and reset currentMax to 0
*/

const longestStreak = arr => {
  let currentMax = 0;
  let finalMax = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1){
        console.log(arr[i])
        currentMax++;
        finalMax = Math.max(currentMax, finalMax);
        console.log('what is finalMax',finalMax)
    } else {
        currentMax = 0;
    }
  }

  let result = [];
    for(let i = 0; i < finalMax; i++){
        result.push(1)
    }
  return result;
}

console.log(longestStreak([1, 1, 1, 0, 1, 0, 1, 1, 1, 1]))

/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

- if str.length > num ---truncate or reduce the size
- But how? I can use slice().
  - Starting at 0 and up to the num, 
  - add '...' after slicing 

*/

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
 
truncateString("A-tisket a-tasket A green and yellow basket", 8);


/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array.

- First, create an empty array called 'chunked' to store the ‘chunks’ of arr
- For loop will start at zero and increments by size each time through the loop
   - It stops when it reaches arr.length.
   - The loop is not looping through arr, but instead, generates numbers I can use as indices to slice the array .
   - Inside our loop,I can create each chunk using arr.slice(i, i+size)
       - I can then add this value to chunked arr with chunked.push().
   - return value of chunked
*/
const chunkArrayInGroups = (arr, size) => {
  let chunked = [];
  for(let i =0; i < arr.length; i += size){
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);     

/* 
Remove all falsy values from arr: What are falsy values?
- False, NaN, 0, "", Null, undefined

- Create a new empty array.
- Use for loop to cycle and iterate over all elements of the provided array (arr).
- If the current element is truthy or falsy...do something
   - If the element is truthy, push it into new array. 
   - The new arr contains only truthy elements.
- Return the new array.
*/
const removeFalsyValues = arr => {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

/*
Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted.
 The returned value should be a number.

Ex 1: getIndexToIns([1,2,3,4], 1.5)
returns 1 because it is greater than 1 (index 0), but less than 2 (index 1)

getIndexToIns([20,3,5], 19) 
Should return 2 because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).

- First step here would be to sort the arr so that nums are in ascending order
  - sort() works alphabetically so if I have nums, it will look at first digit of the num!! 
  - So, I can use the sort function instead
  - Loop through the arr 
    - I have to check if the num less than or equal to arr[i]
*/

const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => {
    return a - b
  });

  for(let i = 0; i < arr.length; i++) {
    if(num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}
  
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([1, 2, 4, 5], 3))

/*
Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.

Ex 1: ["hello", "Hello"],returns true because all of the letters in the second string are present in the first, 
ignoring case.

Ex 2: ["hello", "hey"] returns false because the string hello does not contain a y.

- Declare two variables to hold the first element and second element of arr
  - I know there is only a first and a second element
- Loop using for loop over the second string.length
- I can use the .indexOf() method to tell me whether something doesn't exist (indexOf returns -1 or 1 depending...)
  - If current letter does not exist in first word, then return false
*/

const mutation = arr => {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for(let i = 0; i < second.length; i++){
    if(first.indexOf(second[i]) === -1) return false;
  }
  return true;
}

console.log(mutation(['hello', 'hey']))

/*
Convert the given number into a roman numeral.

- Well, this requires us to know roman numerals, and certain patterns 
that make up various numerals.
- Input: num, Output: string representing roman num equivalent of num
- I have to create a map of sorts where the keys are the roman nums 
and the values are the regular nums.
- Create a variable and assign to empty string (this is the return value)
- Loop through list of keys in map/storage obj
  - while num is >= storage[key], add key to roman
  - If something is added to roman, I have to delete something from the num...
     - Here the replacement would the value added
*/

const covertToRomanNum = num => {
  let numeralStorage = {
    M:1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC:90,
    L: 50,
    XL: 40,
    X:10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let romanNum = '';
  for(let key in numeralStorage){
    while(num >= numeralStorage[key]){
      romanNum += key;
      num -= numeralStorage[key]
    }
  }
  return romanNum;
}

convertToRomanNum(36);

/*
Find the missing letter

Write a function that takes in an arr of consecutive (increasing) letters
as an input, and returns the missing letter in the arr.

You will always get a valid arr and there will always be one letter missing.
The length of the arr will always be atleast 2.
The arr will always contain letters in only one case.

Ex: 'abce' ---> 'd'

- I need to create two variables
  - One called 'letterTrack' to store the charCode for the first letter in the str
  - A second variable 'missingLetter' to store whatever the missing letter is
- I can turn the str into an arr by using str.split()
  - I can then map over the charCodes in arr and compare it 
  with one that should be in that particular place
   - If the curr letter matches, move letterTrack to next position
   - If no match, then assign missing letter to missingLetter
     which will be the return value once map has completed
- Return undefined if there are no missing characters
*/

const findMissingLetter = str => {
  let letterTrack = str.charCodeAt(0);
  let missing;

  str.split('').map((letter,idx) => {
    if(str.charCodeAt(idx) === letterTrack) {
      letterTrack++
    } else {
      // Returns a str created from the specified sequence of UTF-16 code units.
      missing = String.fromCharCode(letterTrack);
    }
  });
  return missing;
}
console.log(findMissingLetter('abce'))

// Same challenge as above but using for loop
const returnMissingLetter = str => {
  let startCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++){
    if (str.charCodeAt(i) !== startCode) {
      return String.fromCharCode(startCode)
    } else {
      startCode++
    }
  }
}
console.log(returnMissingLetter('efghj'));

/*
Create a function 'removeVowels()' that takes a string and returns a new string
with all the vowels removed.

input: str
output: str(vowels removed)

Pseudocode:

- Get the input as a string
- Define or initialize a string containing the vowels a, e,i, o, u.
- Traverse through the input string, if the vowel is encountered, it should be removed from the string.
  - Or, initialize another string and copy each non-vowel character to this string from the input string.
- Return the final result string.
*/

const removeVowels = str => {
 let vowels = ['a', 'e', 'i', 'o', 'u'];
 newString = ''
 for(let char of str) {
  if(vowels.indexOf(char) == -1) {
    newString += char;
  }
 }
 return newString
}
console.log(removeVowels('Riva'))

/*Array Operation:

Create a function that takes three parameters:
  x is start of the range, inclusive
  y is the end of the range, inclusive
  n is the divisor to be checked against
  
 Return an ordered array with numbers in the range that are divisible
 by n. Return an empty arr if there are no numbers divisible by n.
                      x, y, n
 Ex 1: arrayOperation(1, 10, 3) ➞ [3, 6, 9]
   (1, 2, 3, 4, 5, 6, 7, 8, 9 ,10)
 Ex 2: arrayOperation(7, 9, 2) ➞ [8]
 Ex 3: arrayOperation(15, 20, 7) ➞ []
const arrayOps = (x, y, n) => {
*/
const arrayOps = (x, y, n) => {
let numbers = [];
  for(let x = 1; x <= y; x++) {
    numbers.push(x);
  }

  let divisibleNums = [];
  for(let i = x; i <= numbers.length; i++) {
    if (numbers[i] % n === 0) {
      divisibleNums.push(numbers[i]);
    } else {
      continue;
    }
  }
  return divisibleNums;
} 

console.log(arrayOps(1, 10, 3));
console.log(arrayOps(7, 9, 2));

/*
Given a string, create a function to reverse the case.
All lowercase letters should be uppercase and vice-versa/

Ex 1:reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
Ex 2:reverseCase("MANY THANKS") ➞ "many thanks"

- string---> Immutable...have to return new variable at end--string
- create variable and set to empty string
- Use a for of loop to iterate through string
- IF letter is not == letter.toLowerCase(), letter.toLowerCase()
  variable += letter
- Else, letter = letter.toUpperCase(0;
  variable += letter;
- return variable holding str with new values
*/

const reverseCase = str => {
  let splitString = str.split('');
  let caseString = ''

  for(let letter of splitString) {
    if(letter !== letter.toLowerCase()) {
      letter = letter.toLowerCase();
      caseString += letter;
    } else {
      letter = letter.toUpperCase();
      caseString += letter
    }
  }
  return caseString;
}
console.log(reverseCase('Many Thanks'))

/*
Write a function that returns true if first arr is a subset of the second arr. 
Return false otherwise.
   
   isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true
   isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true
   isSubset([1, 2], [3, 5, 9, 1]) ➞ false
*/

const isSubset = (arr1, arr2) => {
  let storage = {};

  for(let num of arr1) {
   storage[num] = storage[num] + 1 || 1;
  }
  
  let storage2 = {};
  for(let num of arr2) {
     storage2[num] = storage2[num] + 1 || 1;
    if(storage2[num] === storage[num]) {
     return true; 
    } else {
      return false; 
    }
  }
}