# Interview Questions on React

Questions found on ReactJS Interview Questions and Answers | Intellipaat:

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

## Questions on the DOM/More on React:

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

13. What is a higher order component in React?
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
  
19. How are events created in React?
    - In a Class-based component I can create a property and pass in event as param.
    - I can then create a prop called `onClick()` into the render
    - Using JSX, I can pass a function as the event handler, rather than a string
    - I have to call `preventDefault` to prevent default behavior
    - React events DO NOT work the same as native events
      - When using React, I don't have to call `addEventListener` to add
        listeners to a DOM element after it has been created. Instead, I provide a listener when the element is initially rendered.
    - Event handlers can be methods on a class
    - When thinking of the 'this' keyword, and event handlers as methods on a class, binding is necessary if I refer to a method without `()` it. Arrow function use easily allows me to avoid binding.
    - There are two ways to avoid binding:
      - Define the event handler as an inline arrow function
      - Using a function component along with hooks
  
20.  How is routing in React different from conventional routing?
       - Pages: Each view is considered as a new file in conventional routing while it is considered a single HTML entity in React.
       - Navigation: In conventional routing, users have to move across web pages for viewing. In React, the views are not refreshed as the user navigates. 

21. Can AJAX be used with React?
    - Yes indeed!
    - Any AJAX library (Axios, jQuery etc.) can be used
    - One important thing as always to remember is that props are passed from parents to children components
    - Child components can't send back props directly to parents and this greatly increases rendering efficiency when dynamic data is considered

22. What is the meaning of 'synthetic events' in React?
    - They are objects that act as cross-browser wrappers, allowing for use of native events
    - This is done to insure that a variety of browsers can run the API and that the event contains all the properties

23. What are stateful components in React?
    - They are entities that store the changes that happen and place them into memory
    - Here, state can be changed, alongside storing information such as past, current and future changes
  
24. What are 'refs' in React?
    - Short for references
    - Refs are used to store a reference to a single React element or a React component. This is later returned using the `render` function
    - They are mainly used in the following scenarios:
      - To initiate imperative animations
      - TO join third-party DOM libraries
      - TO manage focus and apply media playback

25. What are controlled components in React?
    - They are components that have the ability to maintain their state
    - The data is completely controlled by the parent component, and the current value is fetched by making use of props
    - This is done to notify any change that occurs when using callbacks

26. Why is a router required in React?
    - Is is very necessary in React as it is used to manage multiple routes whenever the user types in a URL. If the route is present in the router for that URL, then the user is taken to the particular route
    - To do this, the router needs to be added to React using `react-router-dom` 
    - `react-router` hosts core components for routing React applications only

27. What are the disadvantages of using MVC in React?
    - A lot of memory wastage occurs
    - DOM manipulation costs a lot
    - The application becomes slow
    - Lots of dependencies are created
    - The complexity of models increases

28. What are pure components in React?
    - They are singular entities that are written in React
    - They are fast and simple and have ability to replace a component that has only the `render()` function
    - This is done to ensure that the performance of the app is good and that code is kept simple at the same time

39.What are HOC's in React?
   - Stands for Higher Order Components
   - They are used for:
    - Manipulation of props
    - State manipulation and abstraction
    - Render high jacking
    - Code reuse
    - Bootstrap abstraction

40. What are keys in React?
    - Keys are used in React to check all items and to track changes actively
    - They are used to directly check if an item has been added or removed from a list
    - Often, we use `map()` to map over lists of items, in which case, a key is supplied

41. Differentiate between controlled component and an uncontrolled component in React
    - Controlled components are ones where React has complete control
    -  Controlled components are the singular point of data for the forms
    - Uncontrolled components are ones where the form data gets handled by the DOM and not the React component
      - This is usually done using refs in React

42. How can you tell React to build in production mode?
    - REact can be coded to directly build into production by setting the `process.env.NODE_ENV` variable to production
    - In production, warnings and other development features are not shown

43. What is the difference between `cloneElement` and `createElement` in React?
    - `cloneElement` is primarily used to clone an element and pass it to new props directly
    - `createElement` is the entity that JSX gets compiled into. This is also used to create elements in React

44. What is the use of the second argument that is passed to `setState`? Is it optional?
    - When `setState` is finished, a callback function is invoked, and the components get re-rendered in React
    - It is an optional argument.`setState` is asynchronous, and takes in another callback function
    - However, it is always good to use another life cycle method instead of this

45. What is the `StrictMode` component in React?
    - When used, this component benefits users while created new codebases to understand the components being used
    - It fits well in debugging because it helps us find errors faster when it is wrapped with other components

46. What would you do if you React application is rendering slowly?
    - The cause of slow rendering in React is mostly because of the number of re-render operations done, which sometimes are unnecessary
    - There are two main tools provided in React that can help:
      - `React.memo()` can help to prevent all of the unnecessary re-rendering carried out by the function components
      - `PureComponent` can help to ensure that unnecessary re-rendering of class components is avoided
    - I would take a closer look at components holding state and try and move state as close to where I need it as possible

47. Can you conditionally add attributes to components in React?
    - Yes, React has the ability to omit an attribute if the value passed into it is not true

48. Why are props passed to the `super()` function in React?
    - Props get passed onto the `super()` method if the user wishes to access `this.props` in the constructor
    - It is ok to not pass props to super as `this.props` is available inside the render function
