# All about TypeScript

**What is the TypeScript system?**

- Helps us catch errors during development
- Uses type annotations to analyze our code
- Only active during development
- Doesn't provide any performance optimization

- TypeScript code is written (JS with type annotations)
- When I want code run, it is fed through TypeScript Compiler.
- The compiler then reads it, checks it for errors and then converts it into JS so it can be executed

**Two distinct categories of knowledge when we think about learning TS:**

1st: We need to learn the syntax and features

  - What is an interface?
  - What is the syntax for defining the interface?

2nd: Design Patters with TS
  - How do we use interfaces to write reusable code?

**What is an Interface?**

- Interfaces in TS are used to define the structure of an object
- In this mini app, I define the Interface for Todo
  - Telling TypeScript what type of information I expect back from the API

**Understanding Basic Types:**

**Type:** An easy way to refer to the different properties and functions that a value has (values of course can be strings, numbers, booleans,undefined, null, objects, functions, classes, arrays etc.)

Ex: Imagine a box with the word "red" inside. What is in the box?

- You might say it's a string
- You might say it is a value that has all the properties and methods that we assume a string has

**A type of a value is a shortcut to refer to different properties and methods the value has**

- Every value that is created has a type assigned to it
- In some cases the type is obvious, other cases, not so much

**Different categories of Types in the world of TypeScript**

1st: Primitives:

  - number
  - string
  - boolean
  - symbol
  - void
  - null
  - undefined

2nd: Object Types:

  - functions
  - classes
  - arrays
  - objects

Types are used by the TypeScript Compiler to analyze our code for errors. They also allow other engineers to understand what values are flowing around our codebase.

**Where do we use types in a normal project?**

- We use them EVERYWHERE!
- This is just what TS is about, so every value defined inside your application, will have a type
