# Runtime Complexity

**What is runtime complexity?**

- Describes the performance of an algorithm
- It involves how much more processing power/time is required to run
 your algorithm if I increase number of inputs?

 **String Reverse**

 - abc ---> cba
 - Some input string
 - Iterated through each char once
 - As I added on char to algorithm, I had to one additional step of work
 - This is linear runtime, direct 1 to 1 relationship

**Steps Algorithm**

- Used for loop and took some input N
- Based on input N, I had two nested for loops
- That meant that as I increased value N, I had to do many more things
  each time N was increased
- When N was equal to 4, I had to 16 things~
- There was NOT a 1 to 1 relationship
- In this case, the number of things I had to do was N^2
- This is quadratic runtime complexity

**Determining Complexity**

**Constant Time**: 1 --> No matter how many elements you work with, the algorithm/operation
etc. will always take the same amount of time. The holy grail!

**Logarithmic Time**: log(n) ---> You have this if doubling the number of 
elements you are iterating over doesn't double the amount of work you have to do. Always assume that searching algorithms are log(n);

**Linear Time**: n --> Common runtime seen. Iterating through all elements in a collection of data.
If you see a for loop spanning from 0 to 'array.length', you probably have 'n' or linear runtime.

**Quasilinear Time**: n * log(n) ---> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n * log(n)

**Quadratic Time**: n^2 --> Every element in a collection has to be compared to every other element.
The 'handshake problem', basically imagine a group of people standing in a room. If I send an additional person into the room, they have to shake hands with every other person. That is quadratic. Nested for loops are usually quadratic.

**Exponential Time**: 2^n --> If you add a 'single' element to a collection, the processing power required doubles.

**More on Runtime Complexity**

- Big O Notation is another way of talking about runtime complexity
- O(n) ---> Linear
- O(1) ---> Constant
- O(n^2) ---> Quadratic
- For identifying complexity, here are some tricks:

    - Iterating with a single for loop through single collection --- > probably O(n)
    - Iterating thorough half a collection? ---> Still O(n), there are no constants
    - Iterating through two DIFFERENT collections with separate
        for loops ---> O(n + m)
    - Two nested for loops iterating over same collection? ---> O(n^2)(Steps Algorithm)(Pyramid Algorithm)
    - Two nested for loops iterating over DIFFERENT collections? ---> O(n * m)
    - Sorting? ---> O(n*log(n))
    - Searching a sorted array? ---> O(log(n))

**Space Complexity**

- A reference to memory/RAM an algorithm needs for a specific task
- A lot of times, the space complexity would be the same as time complexity (NOT ALWAYS)

**Memoization**

- When working with recursive solution, the function is called many times but with
  identical arguments
- A way to avoid additional function calls is to use memoization

**Memoization involves storing the arguments of each function call along with the result. If the function is called again with the SAME ARGUMENTS, return the precomputed result, rather than than running the function again**

### Data structures

- Data structure is a way of organizing info with optimal 'runtime complexity' for adding or removing records
- JS natively implements several core data structures

1. Queue: 
   - It is like a container. Records enter on one end and exit on another
   - FIFO operation
   - Enqueuing is adding a record into a queue
   - Dequeueing is removing a record out from other end
   - When we remove a record, the first thing to come out is the first record entered
   - In JS, we have arrays, which are hyper functional
   - To implement a queue, we can take an array and restrict methods that interact with that array
   - We can make a Queue Class
   - And then to add, we use `unshift()`
   - To remove, we use `pop()`

**How to make a queue**

- Create a new empty queue ---> `const q = new Queue()`
- Add a record to a queue ---> `q.add(1)`
- Remove record at the end of a queue ---> g.remove()`

2. Stacks:
  - It is similar to a queue
  - FILO is the big DIFFERENCE of the two
  - Adding a record is pushing
  - Removing from the stack is popping
  - Last record in, is first record out
  
  **How to implement a stack?**

  - Use three methods: Push, pop, peek
  - Pop removes from the top of the stack
  - Push adds to the stack
  - Peek returns just the top record without removing it from stack

3. Linked lists:
   - A linked list is just an ordered collection of data
   - Collection contains a number of different nodes
   - Each node contains some amount of data along with a reference to next node
   - It is also referred to as a chain
   - The list of nodes has an order that is always maintained
   - In every list, there are two special nodes:
       - The head node, the very first node in list
       - The tail node: the very last node
       - The tail does not have a reference to any other node
   - The data contained in the node can be anything (any valid JS value)
   - The other part of the node, is the reference to next node
   - linked lists will have a data property and a next property

**Code reuse in linked lists:**
- getAt(), , getFirst(), and getLast() separately, might not be the best idea
- I could have written these three methods alone and they would
  have achieved the same results as writing all the other methods

**List traversal through forEach()/Generators**

- Generators simplify iterator-authoring using `function*` and `yield`
- They are subtypes of iterators

```javascript

function *numbers() {
  // Star can go to left of function name or right of function keyword
  const result = 1 + 1;
  return 20 + (yield result);
}
// Returns generator object
// I can use this object to manipulate/walk through segments of data
// Define generator and call .next()
// code inside generator executes until yield statement is found
// Yield statement pauses execution of code
// Calling generator.next(10) will replace yield with the num

const gen = numbers();
console.log(gen.next()); // {"value": 2, "done":false}
console.log(gen.next(10)) // {"value":30, "done": true}

```

```javascript
function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
const generator = list();
const numbers = [];
for(let value of generator) {
  numbers.push(value);
}
numbers;
```

```javascript

// Function to iterate over tree and collect values of tree in array
// DFS, expecting result [1, 2, 4, 3];

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  // Yields value of head
  *printValues() {
    yield.this.value;
    for(let child of this.children) {
      // If I call this on single node, I will yield node's value
      // The next time next() is called, I enter for loop
      // For each child of head node, I walk through children and call printValues()
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3)
]);

const values = [];
for(let value of tree.printValues()) {
  values.push(value);
}
values;
// returns [1, 2, 4, 3]
// There is practical use in generators as we can see here, walking through a tree!
```
**Many linked list challenges can be solved by utilizing dual pointers**

4. Trees:

- Trees are made up of nodes
- The top node is called the root node
- Each node holds some amount of data and a reference to all of its children
- A child is a node directly underneath a given node
- There is a parent-child relationship in a tree
- Data can be made up of different values, strings, integers etc.
- Nodes on the same level are called siblings
- However, nodes with different parents, but on the same level are not siblings
- Traversing a tree is a common question, we really care about iterating through all the different elements

**Iterating through Tree/ Order in which we iterate:**
  1. Breadth-First Traversal: Iterating each level of tree from left to right. Start at the root and then work our way from left to right, or level by level.
  2. Depth-First Traversal: Iterating top down, starting at the root node and then go down left hand side. Once I hit bottom, return to the closest parent, then go down again.
    - With depth first, there are several ways to approach the traversal:
       - Inorder Traversal (Left-Root-Right)
       - Preorder Traversal (Root-Left-Right)
       - Postorder Traversal (Left-Right-Root)
  
5. Binary Search Trees:
    - Every node can have at most, two children
    - We refer to these two children by their position relative to parent
    - So, on the left, is the left node, to the right, the right node
    - We also start to validate every node in the structure
    - Every node to the left of the parent has values less than the parent
    - Every node to the right of the parent has values greater than the parent
    - `value > left.value` and `value < right.value`
    - Data inside node is sometimes referred to as a key
    - Common questions are how to add new nodes in to a tree, add up all nodes etc.
    - Binary tree is a NORMAL tree that just has two nodes underneath each parent and is not the same as BST. WIth Binary Tree I no longer have values on left as less than and values on right as greater than parent.
    - In an interview setting, when dealing with BST's, I should confirm that I am working with a BST and not a Binary Tree.
    - Another common interview question is to validate a BST to see if it is well formed
    - Trees are recursive in nature