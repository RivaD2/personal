## Intro to Big O Notation

- Why do we care about it, what is it?
- What is 'time complexity' and 'space complexity'?
- How do evaluate time and space complexity of different algorithms using Bog O?
- Understanding what a logarithm is
  
**Let's say we have multiple implementations of the same function...**
**HOW can we determine which one is BEST?**

- Both ways work as far as approaches, and both accomplish the task
- Big O allows us to compare code and its performance in relation to other parts of code
  
  Ex: Write a function that accepts a string and returns a reversed copy?
      - There are many approaches to solve this
      - You could use a for loop and an array
      - You can use built in methods
      - Which one is best?
- With Big O, we can get a numeric representation of how well our code works

**WHO CARES?**

- Sometimes the best solution to get to work is the best, that's true
- HOWEVER, code challenges, working with huge data sets etc. performance matters at that point
- It is important to understand how our solution works in comparison to others
- If you are debugging, understanding what things are slowing it down is important
      - It helps if we understand Big O because we can identify inefficient points


**SO, HOW DO WE COMPARE THE first two FUNCTIONS?**

- Does better mean faster, less memory, more readability, brevity??
-  All of the above are valid concerns
- Faster code and less memory used are often more important than the others
- We need to focus on speed
- We could use timers, like performance.now()
- Using this, we can see that the second function is faster, however this isn't the best way to compare

### The problem with TIME:

- Different machines run different times
- The same machine will also record different times!
- For fast algorithms, speed may not be the most precise measurement
  
**OK, so if I'm not using time as a measurement, then what?**

- We can use the number of operations taken as a measurement of which function takes up less space
- For the second function: there are less operations taken to get the result
    - There are a total of 3 operations in the second function
- For the first function: We see a plus sign as that is one operation
    - However, n is in a loop, so it is not one operation, it now n operations and additions
    - The = sign is another operation
    - As n grows, even more assignments are added
    - If n is 10, there 10 additions and 10 assignments
- What we care about here is that as n grows, number of operations grow with n

### Offical Intro to Big O

- It is a way to formalize fuzzy counting
- It is how to talk about how the runtime of an algorithm grows as the input grows
- It is a way to describe relationship of input to a function and time relative to that input
- We really only care about trends here, how the runtime grows

**We say that an algorithm is Of(n)) if the number of simple operations the computer has to do is eventually less that a constant times(f(n), as n increases**

    - f(n) means a function with input of n and then an output
    - f(n) could be linear (f(n) = n)
    - f(n) could be quadratic (f(n) = n^2)
    - f(n) could be constant (f(n) =1)
    - f(n) could be something entirely different!
  
- O(1) = as n grows, in this case, there is no change in the runtime
- O(n) = Number of operations is eventually bounded by a multiple of n
- O(n^2) = (think nested for loops)

### Simplifying Big O Expressions

- Counting all the operations is tricky and the exact count doesn't matter, the trend matters
- Constants don't matter
      - O(2n) -----> is simplified to O(n)
      - O(500) -----> is now O(1);
      - O(13n^2) -------> is simplified to O(n^2)
      - O(1) is the fastest then O(n)
- Smaller terms don't matter either
     - O(n^2 + 5n + 8) -----> O(nsquared)

1. Arithmetic operations are constant
    - Adding, subtracting etc. is constant and computer takes roughly the same amount of time here
    - Variable assignment is also constant 
2. Accessing elements in an array (by index) or an object(by key) is also constant
3. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside the loop

### Space Complexity

Whereas **time complexity** involves analyzing the runtime of algorithm as the size input increases,
**space complexity** involves how much memory do we need to allocate in order to run the code in our algorithm

- Space complexity now refers to **auxiliary space**
- Space complexity is about the algorithm itself
- As n grows, we assume the input, n, will grow
  
**Rules of Thumb:**
- Most primatives (booleans, nums, undefined and null) are constant space
- Strings require O(n) space where *n* is the string length
- Reference types are generally O(n), where *n* is the length(for arrays) or the number of keys(for objects)

## Algorithms and Problem Solving Patterns

**What is an algorithm**

- A process or set of steps to accomplish a certain task
- Everything in programming involves algorithms

**How to improve**

- Devise a plan for solving problems 
- Master common problem solving patterns
- A lot of problems in interviews are broken up into categories
- If you can identify these categories, you can solve them
  
**What are the steps**
- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor

**STEP 1: UNDERSTANDING THE PROBLEM**

**It can be tempting to dive in and just get started. However, there is a better way to do this:**

- Take a step back and understand the task ahead of you, before even whiteboarding
- **Ask these questions:**
    - Can I restate the problem in my own words?
    - What are the inputs that go into the problems?
    - What are the outputs that should come from the solution? What should be returned?
    - Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?(Even If I can't answer this early on, it is good to think about it ahead of time)
    - HOW should I label the important pieces of data that are a part of the problem?

**STEP 1: UNDERSTANDING THE PROBLEM**

Imagine I am in an interview setting and the interviewer asks me to:
- Write a function which takes two numbers and returns their sum**
  
  **STEPS TO SOLVE IT:**
     - **Can I restate the problem in my own words?**
     (Use addition to add two nums)
    - **What are the inputs that go into the problems?**
      - It would seem simple right? NO...
      - I should ask how large are the nums, are they integers or floating points?
      - If we just think about it, there are some important distinctions between inputs
    - **What are the outputs that should come from the solution? What should be returned?**
      - Should it be an integer or a float?
      - It has to be a sum
    - **Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?**(Even If I can't answer this early on, it is good to think about it ahead of time)
      - What happens if someone only passes in one num?
      - Do I return undefined or null etc.
    - **HOW should I label the important pieces of data that are a part of the problem?**
       - What matters? Inputs and outputs for sure.
       - How do I name my function?

**STEP 2: CONCRETE EXAMPLES**

- Come up with concrete examples as they can help us understand problems better**
- Examples provide sanity checks that your eventual solution works how ti should
- For example, user stories (given our input, a user action, what should happen?)

**In this scenario, the interviewer asks me to:**
**Write a function which takes in a string, and returns counts of each character in the string**

    - I should ask, do I take into consideration spaces?
    - Do I need to track the entire alphabet to make it easier?
    - What if the function doesn't receive any params, what should I return?
    - What if someone passes in something that isn't a string or an object? These are edge cases
  
**STEPS TO FOLLOW:**
    - Start with simple examples
    - Progress to more complex examples
    - Explore examples with empty inputs(Edge cases)
    - Explore examples with invalid inputs

**STEP 3: BREAK DOWN THE PROBLEM**

- Write down the steps of the problem
- It doesn't have to be pseudo code either
- Communicate, talk about what you are doing and your steps

**STEPS TO TAKE:**
    - Explicitely write out the steps I need to take to solve the problem
    - This forces me to think about the code I'll write and catch any problems I may not understand
  
**Write a function which takes in a string, and returns counts of each character in the string**

- Ok, so I need to break it down:
    - Declare function name, charCount("My name is Riva");
    - Do something, return an object with keys that are alphanumeric characters
    - Step 1, make object to return at the end
    - Step 2, Loop over string for each character...
      - IF char is a num/letter AND is a key in object, add 1 to count
      - IF char is a num/letter AND NOT in object, add it to object and set value to 1
      - If character is something else (a space, period etc.), don't do anything
    - Step 4, return object at end

**STEP 4: Solve/Simplify**
- Don't try and solve the problem 100% before writing code
- Write code only for what I know how to do within a problem

**STEPS TO TAKE**
   - Find the core difficulty in what you are trying to do
   - Temporarily ignore that difficulty
   - Write a simplified solution
   - Then incorporate that difficulty back in

**STEP 5: Look back and Refactor**

- Once you have a solution, you're not done!
- Sometimes, getting by with something code that is scrappy and works is ok. 
- However, taking the time to look back at your code and see how it can 
  be refactored is a missed opportunity. Efficiency matters.

**Refactoring Questions**

- Can you check the result?
- Can you derive the result differently? (More than one way to solve a problem)
- Can you understand your code at a glance? (Is it messy, can others read it?)
- Can you use the problem or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?(Ask the interviewer this!)

## Problem Solving Patterns

1. **Frequency Counter Pattern:**

It is not officially called this. This pattern uses an object to collect values/frequencies of values. This can avoid:
    - The need for nested loops or O(N^2) operations with arrays or strings
    - Useful when there are multiple inputs to compare to see if they consists of similar values
    - Usually O(n) time

**Ex 1: Write a function called `Same` which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same:**

```javascript
  same([1, 2, 3], [4, 1, 9]) ---> true (all values are squared)
  same([1, 2, 1], [4, 4, 1]) ---> false, frequency is wrong. There should be two 1's.
  ```
  - (see js file to view two ways of solving this)

1. **Anagrams: 
  Given two strings, write a function to determine if the second string is an anagram of the first.** 
   Ex: cinema -----> iceman
   - Compare the occurrance of characters
   - If letters are in there, what are the frequencies?
   - `validAnangram('','')----true`
   - `validAnangram('aaz', 'zza')----false`
   - `validAnangram('rat', 'car')----false`
   - `validAnangram('texttwisttime', 'timetwisttext')---true`

- I will need more than one loop
- Create the object
- Any punction goes in this example
- See code in js file

3. **Multiple Pointers**

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- This is very efficient for solving problems with minimal space complexity
- We will have some sort of linear structure (string, array or even a singly or doubly linked list)
- We use two variables, or references (think of the mergeSort or quickSort challenges)
- In a mergeSort or quickSort, we had an unsorted array and could use pointers. We use pointers for sorted arrays or strings as well.

**Ex: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero OR undefined if a pair does not exist.**
    - `sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]`
    - `sumZero([-2, 0, 1, 3]) // undefined`
    - See js file for solution

**Ex2: Implement a function called `countUniqueValues` which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. Use two pointers pattern:**

```javascript
  countUniqueValues(][1, , 1, 1, 1, 2]) //2 ----> only two unique nums, 1 and 2
  countUniqueValues([1, ,2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) //7 -----> 7 unique values 1, 2, 3, 4, 7, 12, 13
  countUniqueValues([ ]) //0
  countUniqueValues([-2, -1, -1, 0, 1]) //4
  ```
  - Here I will have two pointers moving some direction based off condition

**To solve the problem**

- Create a variable to count how many times there is a different value
- Or, build the unique values at the beginning of the array

   i  j---> j moves forward while i stays still
   1 is compared to 1 so j moves to 1, then 1, then 2. 2 is different. So i moves forward and 2 is in the place of i
- [1, 1, 1, 2, 3, 3, 4, 4, 5, 6 ]
      i        j
- [1, 2, 1, 2, 3, 3, 4, 4, 5, 6]
- At the end, we will have all unique values at beginning of array
- Basically we are updating the pointer when we find two unique values that don't match

1. **Sliding Window Pattern:**

- This pattern involves creating a **window** which can either be an array or number from one position to another.
- Depending on a certain condition, the window either increases or closes(and a new window is created)
- This pattern is very useful for keeping track of a subset of data in an array or string etc.

- Ex: "hellothere" ----> Find longest sequence of unique characters
- Ex: Write a function called maxSubarraySum which accepts an array of integers and a number n.
    This function should calculate the max sum of n consecutive elements in the array.

```javascript
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) //2 ----> two digits next to one another with largest sum are 8 and 2

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) //17  ------> What is the largest sum of 4 nums, so it is 2, 5, 2, 8

maxSubArraySum([ ], 4) // null ---> if empty, return null (edge case)
```
- `n` is the amount of nums that we look at to see largest sum in array
  
1. **Divide and Conquer**
   
- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- This pattern can tremendously decrease time complexity
- Sorting algorithms can use divide and conquer, such as a quick sort and merge sort
- Binary search trees are another example of when we could use divide and conquer

Ex: Given a **sorted** array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is NOT found, return -1.

```javascript
// Here we are look for 4, and 4 is at index 3
search([1, 2, 3, 4, 5, 6], 4) // 3
// Here we are looking for 11 and it is not found so I return -1
search([1, 2, 3, 4, 5, 6], 11) // -1
```

## Searching Algorithms

1. **Linear Search:**
In an array, this involves checking every single value to see if it is what I want.
This is not a bad approach, but if I have sorted data, there are better ways to sort.
There are many different search methods on arrays in JS:

    - indexOf()
    - includes()
    - find()
    - findIndex()
    - All of these methods check one element at a time

**BUT HOW DO THESE METHODS WORK?**

    - They work through using a linear search
    - Ex: [5, 8, 1, 100] // We are looking for 1
    - So, we would start the beginning and continue until we find 1

2. **Binary Search Algorithm**
   - It's faster
   - Rather than eliminating one element at a time, we element HALF of remaining elements at any given time
   - However, binary searches ONLY work on SORTED data
   - We can find a midpoint and then check if what we are looking for is before or after mid
   - Then we can cut the next portion of data in half and repeat
   - The idea is dividing an conquering
   - Pick a pivot point and check the left or right side
   - We can then change the window of where we are searching by having two pointers
   - We then update our left or right pointers depending on what data we have chopped off
   - We can use this for numbers or strings


## Data Structures

1. **Singly Linked Lists: Each node is connected one directional to the next node**
    - A linked list is a list of data (like an array)
    - A linked list consists of elements with NO indexes pointing to the next element
    - Linked lists contain a head, tail and length property
    - Linked lists consists of nodes, and each node has a value and a pointer to another node or null
    - Each element is a node and node store data
    - Head is the beginning of the list and tail is the end
    - To get to another item, we have to ask for the NEXT item
    - Linked lists are linear

**Comparison to Arrays**
    - Linked Lists do not have indexes
    - They are connected via nodes with a **next** pointer
    - Random access is not allowed, we have to traverse from the beginning
    - Insertion and deletion are easier and more efficient in lists

2. Graphs: Graphs are everywhere! They are used in social networks, recommendations engines etc. 
   - We traverse through graphs like trees, with BFS and DFS
   - A graph is a collection of nodes and connections between those nodes
   - So we have nodes and connections between them
   - There is no parent node and nodes are connected in different ways
    
   **Uses of Graphs:**
      - Social networking
      - Location/Mapping
      - Routing Algorithms
      - File System Optimizations
      - Web pages that link to one another
  
   **Types of Graphs/Terminology:**
     - **Vertex:** A node
     - **Edge:** Connection between nodes
     - **Weighted:** Has values assigned to edges.
     - **Unweighted:** Each connection between vertices, has no value
       associated with it.
     - **Undirected:** Has to do with edges. There is no direction
       or polarity to edges. They are two-way connections.
       Facebook models friends in this way, a two-way connection.
    - **Directed:** Represented with arrows. Indicates polarity of that edge. There is a direction assigned to the edge. Think Instagram here, 
      where there is not a two-way connection automatically.
  
  **Storing Graphs:**
     - We need to store vertices and connections
     - With BST's , we have .left and .right, and with linkedlist we have .next and .prev with doubly linkedlist. We can't do that with graphs.
  **There are TWO STANDARD WAYS to store info** 
  1. Adjacency List or an Adjacency Matrix.
     - In an Adjacency Matrix, we store info in rows and columns. We could store undirected and directed graphs this way. I could use true or false, or 1's and 0's.
     - An Adjacency Matrix takes up more space in sparse graphs
     - It is slower to iterate over all edges but faster to lookup a specific edge
2. In an Adjacency List, we use an array or list to store edges.
    - An Adjacency list can take up less space in sparse graphs
    - It is faster to iterate over all edges, but can be SLOWER to look up specific edge

![adjacencyList](adjacencyList.png)

- If nodes are strings, or there are huge gaps with numbers, we can use a hashtable

![hashTable](hashTable.png)
 
 **Graph Traversals:**

 - Visiting/Updating/Checking each vertex in a graph is a traversal
 - You may not need to visit every node
 - Traversals are used usually for special cases
 - Advanced algorithms come from the basic traversal methods
 - We start from one vertex (node), like a tree, however there is no root
 - Unlike a tree, to traverse a graph, we have to specify starting point
 - For any node in a graph, there is no guarantee there's one unique path to get there
 - It means, that sometimes, we have to revisit node we have already been to

**Uses for traversals:**
- Peer to peer networking
- Web crawlers
- Finding 'closest' matches, shortest path etc. are all related to traversing
- Shortest path problems: GPS navigation, Solving mazes, AI(shortest path to winning move)

3. Hash table/Hash map: 
   **What is a hash table?**: 
   - It is used to store key-value pairs. The keys in a hash table are not ordered.
   - They are fast for finding, adding, removing values etc. 
   - Nearly every language has some sort of hash table structure
   - Because of their speed, they are commonly used

  **How do we write our own version**:
   - Imagine we want to store some colors. We could store them in a list etc.
   - However, storing colors in a list works best if we need a random color.
   - If we need a particular color, it would be better to use keys: 
   `colors['cyan']`
  - To implement a hash table, we can use an array or an object to store numbers.
  
  **How they work**:

  - In order to look up values by key, we need a way to convert keys into valid array indices.
  - We create functions that perform this task and they care called hash functions.
  - We can pass a string to hash function that tells us where data is stored/at what index it is stored.
  - A hash function can take data and spit out a number. 
  - Hash function uses include:
      - Protecting data
      - Authentication
      - Cryptography
  - **A basic hash function definition:** A function that takes data of arbitrary size, and spits out data of fixed size. It maps an input to an output of fixed size.

**What makes a good hash function:**
    - A good function is fast (constant time)
    - It doesn't cluster outputs at specific indices, but distributes uniformly. It is useless if elements are stored at same spot.
    - It is deterministic, we want same input to give us the same output.

**How do we handle collisions?**

   - When hash functions have a lot of data, it is common that a collision will occur
   - We can use Separate Chaining:
      - With **separate chaining**, at each index in our array we store values using a more sophisticated data structure(an array or linked list for example)
      - This allows us to store multiple key-value pairs at the same position
   - We can use Linear Probing:
      - With **linear probing**, when we find a collision, we search through the array to find the next empty slot
      - Unlike with separate chaining, this allows us to store a single key-value at each index
