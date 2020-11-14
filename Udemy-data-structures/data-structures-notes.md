**Intro to Big O Notation**

- Why do we care about it, what is it?
- What is 'time complexity' and 'space complexity'?
- How do evaluate time and space complexity of different algorithms using Bog O?
- Understanding what a logarithm is
  
**Let's say we have multiple implementations of the same function...**
HOW can we determine which one is BEST?

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


// SO, HOW DO WE COMPARE THE first two FUNCTIONS? 
    - Does better mean faster, less memory, more readability, brevity??
    -  All of the above are valid concerns
    - Faster code and less memory used are often more important than the others
    - We need to focus on speed
    - We could use timers, like performance.now()
    - Using this, we can see that the second function is faster, however this isn't the best way to compare

/* The problem with TIME:
  - Different machines run different times
  - The same machine will also record different times!
  - For fast algorithms, speed may not be the most precise measurement
  
** OK, so if I'm not using time as a measurement, then what?**

- We can use the number of operations taken as a measurement of which function takes up less space
- For the second function: there are less operations taken to get the result
    - There are a total of 3 operations in the second function
- For the first function: We see a plus sign as that is one operation
    - However, n is in a loop, so it is not one operation, it now n operations and additions
    - The = sign is another operation
    - As n grows, even more assignments are added
    - If n is 10, there 10 additions and 10 assignments
- What we care about here is that as n grows, number of operations grow with n