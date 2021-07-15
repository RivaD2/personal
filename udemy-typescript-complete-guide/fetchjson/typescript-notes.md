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

**Type Annotations and Inference**

1. Variables
2. Functions
3. Objects

Type Annotations: Code we add to tell TypeScript what type of value a variable will refer to. We (developers) tell TypeScript the type.

Type Inference: TypeScript tries to figure out what type of value a variable refers to. TypeScript guesses the type.

**Type Inference:**

- Anytime I make a new variable inside app, I am performing two different steps:
  - 1: Variable Declaration
  - 2: Variable Initialization

- If declaration and initialization are on the same line, TS  will figure out the type of value for us!

When are we going to add in the type annotations?
We rely on type inference ALWAYS, anywhere we can. There are several examples of when to use Type Annotations:

1. When we declare a variable on one line then initialize it later
2. When we want a variable to have a type that can't be inferred
3. When a function returns 'any' type and we need to clarify the value

**The Any Type:**

- Any is a type, just as 'string' or 'boolean' are
- When something that is marked with 'any' type that means TS has no idea what it is, it can't check for correct property references
- Try to avoid variable with 'any' at all costs

**Annotations around Functions:**

When we talk about type annotations around functions, we talk about:
Code we add to tell TypeScript **what type of arguments a function will receive and what types of values it will return.**

When we talk about Type Inference for functions we talk about TS trying to figure out what type of value a function will return

  - One big difference is that it only works for the return value
  - There is no type inference for arguments, so we will always add in annotations
