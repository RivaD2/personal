# Interview Questions on React:

**Name the lifecycle methods and their purpose:**

1. **render:**
   - It is important to note that they are changing, and React Hooks handle the lifecycle methods differently.
   - There are two phases when component renders, the initial render and rerender.
   - On render, the constructor runs once during the initial phase. Its job is to set the initial state and is the only place we can say, `this.state`.
   - This is where we add JSX, This is a mandatory method. I can't setState in the render method.

2. **static getDerivedStateFromProps:** 
   - Runs after constructor and has a role in initial render
   and rerender. Its purpose is to get derived state from props. If props changes, then I have to set state accordingly. 
   - WHY would I have something static? Because I don't want the `this` keyword direcly in the method. This method is not used as often as others.

3. **componentDidMount:**
   - Runs after the component is mounted and this is helpful if I have
   some third party library etc., letting React know the DOM is ready now.

4. **rerender:**
   - Where something changes and the React component has to rerender itself.
   - This lifecycle runs many times. 
   - `this.setState` will cause a rerender.
   - In the rerender phase, we have **shouldComponentUpdate**. The purpose of this lifecycle method in the rerender phase is to say whether there will be another render.

5. **getSnapshotBeforeUpdate:**
   - Mount will happen after this method. This replaces componentWillUpdate.
   If a user scrolls or changes size of window, we need to remember where scroll wasbefore.

6. **componentDidUpdate():** 
   - Means that the component is updated.

7. **Why do we use arrow functions in React?**
   - We can have onClick handlers in React. They are class properties.
   I have to know the difference between the properties and the methods.
   In newer versions of React, I can simply define properties on the class.
   The arrow function allows me to take 'this' from the lexical scope.
   Other ways people handle this is they bind 'this' back to the class inside constructor.
   
   - I use arrow functions all the time. I use them because I don't want to 
   have to bind 'this' every time I want to create a property. This is  experimental syntax.Arrow functions just don't have 'this' and they take it from the lexical scope.

8. **How do we prevent components from rerendering?**
     - I can use: 
         - **shouldComponentUpdate():** I can compare the state with previousState
         - **React.PureComponent:** I don't have to use the previous method if I use this one.This compares previous state to new state. If they are the same, rendering stops.I can use this when I am defining the Class on a Class-based component.
         - **React.memo:** This works with function components and uses memoization.

## Questions on the DOM:

1. Differentiate between the Virtual DOM and the Real DOM(Document Object Model):
   - Virtual DOM: 
     - Changes can be made easily
     - Minimal memory wastage
     - JSX element is updated if the element exists
     - Cannot update HTML directly
     - Faster Updates
     - Easier to work with compared to Real DOM
   - Real DOM:
      - Changes can be expensive
      - High demand for memory and more wastage
      - Creates a new DOM every time an element gets updated
      - Able to directly manipulate HTML which is an advantage
      - Slow updates

2. What is React?
     - React is a widely used JS library, launched in 2011.
     - Created by Facebook and is primarily used for front-end development
     - React uses the component-based approach, which helps us build reusable components
     - It is well known for developing/designing complex mobile user interfaces and web apps

3. What is the meaning of the Virtual DOM?
  - It is a simple JS object that is the exact copy of the corresponding Real DOM
  - It can be considered a node tree that consists of elements, attributes and other properties
  - Using the `render` function in React creates a node tree and updates it based on the changes that appear in the data model
  - These changes are usually triggered by users or the actions caused by the system.
  
4. What are some of the important features of React?
   - React has many, many features that are used for unique purposes
   - React makes use of a singe-direction data flow model
   - It deals with complete server-side data processing and handling. 
   - React uses the Virtual DOM that has many advantages of its own

5. What is the meaning of JSX?
   - It is the abbreviation of JavaScript XML. It is a file that is used in React to bring out the essence of JS to React and use it for its advantage
   - It includes bringing out HTML and the easy syntax of JS and ensures that the resulting HTML file will have high readability and performance enhancement.

6. Can browsers read a JSX file?
   - NO, they cannot.
   - It can only read the objects provided by JS
   - To make a browser read a JSX file, it has to be transformed to a JS object using JSX transformers and only then can it be shown/fed into the browser for further use in the pipeline.

7. Why is React so widely used?
   - React provides users with many advantages
   - With React, UI testing becomes very easy
   - React can integrate with Angular and other frameworks easily
   - The high readability index ensures easy understanding
   - React can be used client-side and server-side 
   - It boosts application performance and overall efficiency

8. What are the disadvantages of React?
   - Writing code is complicated as it uses JSX and inline template formatting
   - Beginners can find it tough to cope with syntaxes and methods
   - The library contains a HUGE repository of information which can be overwhelming
   - React is a simple library and not a complete framework, which means we need other dependencies

9. What is the meaning of the component-based architecture of React?
    - In React, components are foundations used to build user interfaces for apps
    - With this system in place, all of the individual entities become reusable and independent of one another
    - This means that that rendering the app is easier an not necessarily dependent on the other components of the UI

10. How does rendering work in React?
    - Rendering is an important aspect of React as every single component must be rendered
    - Rendering is done using the `render()` function
    - Once the function is called, it returns some amount of JSX, an element that represents a DOM component
    - It is also possible to render more than one HTML element at a time by enclosing the tags and passing it through the render function

11. What are props in React?
    - Props are shorthand name given to properties in React
    - Props are read-only components that are immutable in nature
    - In an app, props follow a hierarchy that is passed down from parent to child components
    - However, the reverse is not easily supported. This is done to ensure that there is a singular directional flow of data at all times
    - Props are used to pass data from one component to the next

12. What is the use of an arrow function in React?
    - An arrow function is used to write an expression in React.
    - It allows users to manually bind components easily
    - The functionality of arrow functions are useful when dealing with higher order functions

13.What is a higher order component in React?
   - HOC's are a widely used technique in React for applying concepts that involve the component reusability
   - They are not a native part of the React API and allow users to easily reduce the code and bootstrap abstraction
   - HOC's are also used to allow simple sharing of behaviors across all of the components in React, adding more advances to efficiency and functioning of the app

14. What is the meaning of `create-react-app` in React?
    - It is a simple CLI that is used in creation of React apps which have no build configs
    - All tools are pre-configured using the CLI and this allows users to focus on the code more than on dependencies to develop the app
    - It provides a ready-made React application starter so we can get to work quickly
    - We can now also use `npx-create-react-app` which is an easy way to download and execute Node.js commands without installing them. 
    - npx comes with npm
    - When I run `npx create-react-app <name of app>` , npx is going to download the most recent create-react-app release, run it, and then remove it from my system. This is great because I will never have an outdated version on my system, and every time I run it, I'm getting the latest and greatest code available.

15. What are the advantages of using `create-react-app`?
   - Support for JSX, ES6 and flow statements
   - Already built and ready auto-prefixed CSS
   - Fast interactive testing components
   - Live development servers that help in debugging
   - Scripts to handle JSX, CSS, and other files

16. What is the difference between props and state?
    - Changes in child components relate to props
    - Parent components changing values relate to props
    - Changes inside of components relate to state
    - State relates to changes in behavior of components

17. What are the three phases of a component life cycle in React?
    - Initial rendering: This is the phase that involves the beginning of the journey of the component to the DOM
    - Update: Here the component can be updated and rendered again and then it gets added to DOM
    - Unmounting:The final phase involves the destruction of the component and its eventual removal from the DOM

18. What are events in React?
    - Whenever there are actions performed in React (moving mouse, pressing key etc.) they trigger an event
    - Events then perform set activities as a response to triggers
    - Handling an event in React is very similar to that in the DOM
  
20. How are events created in React?
    - In a Class-based component I can create a property and pass in event as param.
    - I can then create a prop called `onClick()` into the render

1.  