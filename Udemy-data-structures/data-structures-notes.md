## Intro to Big O Notation

- Why do we care about it, what is it?
- What is 'time complexity' and 'space complexity'?
- How do evaluate time and space complexity of different algorithms using Bog O?
- Understanding what a logarithm is
  
**Let's say we have multiple implementations of the same function...**
**HOW can we determine which one is BEST?**

- Both ways work as far as approaches, and both accomplish the task
- Big O allows us to compare code and its performance in relation to other partsof code
  
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

**We say that an algorithm is O9f(n)) if the number of simple operations the computer has to do is eventually less that a constant times(f(n), as n increases**
    - f(n) means a function with input of n and then an output
    - f(n) could be linear (f(n) = n)
    - f(n) could be quadratic (f(n) = nsquared)
    - f(n) could be constant (f(n) =1)
    - f(n) could be something entirely different!
  
O(1) = as n grows, in this case, there is no change in the runtime
O(n) = Number of operations is eventually bounded by a multiple of n
O(nsquared) = (think nested for loops)

### Simplifying Big O Expressions

- Counting all the operations is tricky and the exact count doesn't matter, the trend matters
- Constants don't matter
      - O(2n) -----> is simplified to O(n)
      - O(500) -----> is now O(1);
      - O(13nSquared) -------> is simplified to O(nsquared)
      - O(1) is the fastest then O(n)
- Smaller terms don't matter either
     - O(nsquared + 5n + 8) -----> O(nsquared)

1. Arithmetic operations are constant
    - Adding, subtracting etc. is constant and computer takes roughly the same amount of time here
    - Variable assignment is also constant 
2. Accessing elements in an array (by index) or an object(by key) is also constant
3. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside the loop

### Space Complexity

Whereas **time complexity** involves analyzing the runtime of analgorithm as the size input increases,
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

