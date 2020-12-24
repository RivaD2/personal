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

// Insert val into BST
/* Given the root node of a binary search tree(BST) and a value to be inserted, 
insert the value into the BST. Return the root node of the BST after the insertion.
It is guaranteed that the new value does not exist in the original BST.
*/

// Traverse tree and check each node
// If value is greater, traverse down right side 
// If value is less than, traverse down left side
// If there is no node, create one/insert the value
// BIG O: time is O(log(n)) space, worst case is O(n)
const insertIntoBST = function(root, val) {
    node = root;
    // While true... (that is while(1) as 1 is truthy)
    // Loop will run forever until something calls break;
    // InOrder Traversal left --root---right
    while(1) {
        if(val >= node.val) {
            if(node.right) {
                node = node.right;
                continue;
            } else {
                node.right = new TreeNode(val);
                break;
            }
        } else {
            if(node.left) {
                node = node.left;
                continue;
            } else {
                node.left = newTreeNode(val);
                break;
            }
        }
    }
    return root;
}

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
    let currentNode = linkedlist.head;
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