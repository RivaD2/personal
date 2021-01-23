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
