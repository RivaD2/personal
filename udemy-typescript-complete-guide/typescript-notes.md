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

**Arrays in TS**

- Working with arrays in TS means we are essentially working with plain JS arrays. We can push, pop, use for loops etc.
- The big difference is that we only stick elements with a consistent type in the array (we don't have to though)
- If we want to add in elements with inconsistent types, we have to add in a special type annotation (see `arrays.ts`)
- **We can used typed arrays any time we nee to represent a collection of records with some arbitrary sort order**

When we work with arrays in TS:

1. TS can do type inference when we extract values from an arr
2. TS can prevent us from adding incompatible values to the array
3. We can get help with 'map', 'forEach', 'reduce', functions
4. Flexible - arrays can still contain multiple different types

**Tuples in TS:**

There is a very similar data structure in TS similar to arrays called Tuples (they look similar but have some distinct differences)

A Tuple is: An array-like structure where each element represents some property of a record. Usually inside, we will mix and match many types of data

**Interfaces:**

Interfaces + Classes = How we get really strong code reuse in TS

Interfaces: Creates a new type, describing the property names and value types of an object (see `interfaces.ts`)

Inside interfaces I am not limited to just primitive values, I can use any type I want. That also includes functions.

What happens if we delete additional properties from interface in `interfaces.ts`?
 - When TS tries to decided if `oldCivic` is a Vehicle, it doesn't matter that there are extra properties on the object that are not listed in the interface. TS will look at whatever is in the interface.

**I can use a single interface to describe the shape or different properties of VERY DIFFERENT objects**

- When we do so, I can have objects implement different properties and functions
- I can make these very different objects interact with different functions that are created (this encourages generic named functions such as printSummary())
- In `interface.ts`:
  - Interface `Reportable` is a gatekeeper to printSummary function
  - If I ever have any value inside app and I want to use those values with the printSummary() function, I have to make sure values implement `Reportable` interface
  - The interface for gatekeeping is how we get code reuse using TS

**General Strategy for Reusable Code in TS:**

1. Create functions that accept arguments that are typed with interfaces
2. Objects/classes can decide to 'implement' a given interface to work with a function

**Classes in TS:**

Classes: Blueprint to create an object with some fields (values), and methods(functions) to represent a 'thing'

Differences between ES2015 Classes and Classes in TS:

Modifiers: Keywords placed on different methods and properties in a class and include:

  - public: This method can be called anywhere, any time
  - private This method can only be called by OTHER METHODS in THIS class
  - protected: This method can be called by other methods in child classes

The goal of these modifiers is to restrict access to different functions or different variables. By default every different method and property we add to class with have public property on it.

In a typical TS app, there will be many Classes and they work together through use of interfaces.

**Parcel**

Parcel Bundler is an awesome tool to run TS code in the browser. When I start up the tool, I feed it a file, it sees the script tag with src of filename.ts and it knows it needs to parse
code inside the file, compile it, turn it into JS and then load it into browser.

`npm i -g parcel-bundler`

**Default statements in TS**

- It is common convention to avoid default statements in TS, and just use `export` so we can safely export multiple variables from files and not even worry about whether or not curlies are included. (This varies from place to place).

- This is of course different from React where `export default` is used often

**Google Maps Integration Notes**

-Usually with TS, we install dependencies using NPM and use import statements.
-However, in `maps` project I have inserted a `<script>` tag directly to html file so that script will be added in as a global variable.
- The issue at first was that I got error called `can not find any name 'google'` as TS does not know that there is a global variable available in the project
- So to fix this, I had to install another type definition file for a JS third party library

**How TypeScript Compliler works:**

- IN the sorting app, inside the directory I ran `tsc + name of file`
- TS compiles the file and spits out index.js file
- Index.js contains JS equivalent of TS code
- Every time I compile the file, I will end up with another js file
- If I had all source code in root project folder, things get a bit messy
- So all TS code was moved to `src` folder and all compiled js files went in a `build` folder. The build directory just organizes the compiled code

**Configuring TypeScript Compiler:**

- To configure TS compiler to work with the two separate directories, I have to create a `tsconfig.json` file
- To create one, I run `tsc --init`
- This file I see a ton of different options that I can use to customize the compliler. If I run the compiler in the terminal, it will check to see if I have `tsconfig` file. If I do, it will use those settings to customize the compiler.
- To tell the compiler to get all code out of `src` and place results in `build` directory, I need to locate two settings:
  - `"outDir"` : Place where compiled code lives. Added `./build` here
  - `"rootDir": A relative path reference to directory that holds source code. I added `./src` here to indicate source code is in src
- I can then just run `tsc`
- To make things easier, I can run `tsc - w` which means watch all files in rootDir, or src directory (in the sort app) and compile everything and stick it in build for me. Then I don't have to run `tsc` over and over again.

**What is a Type Guard?:**

- A Type Guard is technique where TS gets type information of a variable after making a type check using a conditional

- `typeof`: If I want to set type guard for primitive type, I use this operator
- `instanceof`: Use this when I want to narrow down every other type of value/ every other value that is created with a constructor function

**Abstract Classes:**

- An abstract class can not be used to create an object directly
- For example, thinking of `NumbersCollection`, in index.ts I used this class to create an instance out of it
- When I create an abstract class, I can no longer do this. This works fine for the `Sorter` class
- Abstract classes can only be used as a parent class
- They can contain some real implementation for some methods. The implemented methods can refer to other methods that don't actually exist yet (although I still have to provide names and types for the un-implemented methods)
- Abstract classes can make child classes promise to implement some other method
- When `Sorter` becomes the abstract class, it has real implementation for `sort()`. It is then used as a parent class for `CharactersCollection`. TS then tries to evaulate `Sorter` in isolation. Inside that class, I provide info about `length()`, `compare()`, and `swap()` methods.
- TS then evaluates the `sort()` method and evaluates whether it is correct or not
- When I extend `CharactersCollection` with `Sorter` TS will look at it and say, " You can copy the `sort()` method over, but you better have all the other methods too."

**Abstract Classes vs Interfaces:**

- In my sorting app, I didn't really need the interface as I was using Abstract classes
- **Interfaces:**
  1. Set up a contract between different classes
  2. Are used when we have very different objects that we want to work together
  3. Promote loose coupling
- **Inheritance/Abstract Classes:**
  1. Sets up a contract between different classes
  2. Used when we are trying to build up a definition of an object
  3. Strongly couples classes together

**Using Enums:**

- In `stats` app, instead of using an object, I used an Enum
- Enum (Enumeration) has a purpose similar to an object, but it stores closely related values. The values usually are numbers or strings.
- All the different properties are closely releated values, so in stats the properties were `HomeWin`, `AwayWin`, and `Draw`
- So why use them over an object? The purpose is for signaling to other engineers that this is a collection of very closely related values
- In order to reference values in an `enum`, we write out: `name of enum.name of option to reference`
- When a new enum is created, another type is created. In `stats` the enum is `MatchResult`, and the type is `MatchResult`

**When to use Enums:**

- When we make use of enums, we can work with them with syntax similar to objects
- Enums can be defined without values inside
- They create an object with same keys and values when converted from TS to JS
- We use them whenever we have a small fixed set of values that are all closely related and known at compile time
- Enums are not used when data is unknown while I am running my code