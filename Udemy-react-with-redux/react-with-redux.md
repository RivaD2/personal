# React and Redux 

**OUR FIRST APP: Building a small translation page (codepen project)** 

```javascript
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");
  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
```

**Questions about this code**:

1. **What is the App function?**
   - The App function is an App component that returns some JSX
   - Components have two jobs: They produce JSX, which tells React what we want to show user. They also handle user events.
   - All components are functions that return JSX(a set of instructions to tell React what content to show at any given time)
2. **What are JSX Elements:**
   - JSX elements look similar to HTML
   - They tell React to create a normal HTML element('div', 'span', 'h1' etc.)
   - They tell React to show another component(In the above example, they tell React to show 'Field', 'Translate' and 'Languages)
3. **What does React do with JSX elements?**
   - Whenever we return JSX from a component, React iterates over every element inside block of JSX
   - React will ask, "Is this a DOM element?" for every single element
  
    ```javascript
    <div> // Are all these elements DOM elements, No? It is a component? Ok, call the component function 
    <Field /> // and inspect all the JSX we get back
    <Languages />
    <hr />
    <Translate />
    ```

   - If it is, React will create the element and show content to user
   - If it is a Component, React will call the component function and inspect all JSX we get back. 
   - React starts to examine what is inside the `<div>`. When it hits the `<Field>` tag, it asks if it is a DOM element. It isn't.
  
```javascript
// JSX Field Component
import React from "react";
export default ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input // Is this a DOM element? Yes, it is. React says, "Ok, I'll show the div on the screen."
        className="input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
```

4. **How does React display Content:**
   - The first file that is executed automatically is the `index.js` file
   - THis file is what initially boots up our React app
   - React starts up our project by:
      - It uses the ReactDom.render
      - ReactDom.render() holds our `<App/>` component
      - We tell React to call App function and get back JSX, and turn it into HTML
      - The second arg to ReactDom.render is a reference to where we want to show our React project inside the `index.html` file
      - Inside `index.html` is a `<div>` with an id of "root"
      - We tell React to render our App or show all components inside of this div
      - This is how the application is first started

5. **What is the difference between React and ReactDOM?**
   - Whenever we work with React, we work with two libraries
   - React knows how to work with components, it is called a 'reconciler'
   - React has a bunch of code inside of it, knows how to call component functions, get back JSX, etc.
   - ReactDOM knows how to take a set of instructions on what we want to show and turn it into HTML from JSX
   - ReactDOM is known as the 'renderer'

6. **What is all the `useState` stuff?**
   - It is a function for working with React's state system
   - State is used to keep track of data that changes over time
      - In the code above, we are trying to store data associated to the language the user has selected and text the user has input
      - Both of these will change over time, which is why we use a state system to manage data
    - useState is used to make React update the HTML on the screen

**Starting a React App**

- run `npx create-react-app <name of project>`
- This is a command line tool with npm version 5.2 or higher
- To start the project, run: `npm start` in project directory
- To stop the project, run: `ctrl + c`

**Why Create React App?**

- We need to understand why so many packages are installed
- Create React App ----> Brand new Project-----> Webpack, Babel, Dev Server
- Babel is super IMPORTANT:
    - Each version of JS has particular syntax and features
    - Every version has upgrades to JS language
    - These updates are for the benefit of developers
    - JS that we write has to eventually be executed on the users browser
    - The browser executes the JS, however all browsers are not all updated
- Babel is a command line tool and it takes any version of JS and spits out newer versions
- Babel allows us to write our JS code, and it is fed into Babel. Babel spits out a version of our JS code that is safely executed on most browsers
- Babel is included in any Create React App project
- Babel includes a large number of packages to make this possible

**Exploring a Create-React-App Project**

- We can delete some of the automatically generated files 
- `Public` stores static files (html, images, music etc.)
- `Node modules` of course stores all of the dependencies
- `src` holds our source code
- `package.json` lists out all dependencies project requires along with configuration
- `packagelock.json` records exact versions of dependencies installed into project
- `.gitignore` of course tells git what files to ignore

**Possible Errors on start**:

- Port in use: I need to run app in a different port 
- localhost:8080 doesn't work: Easy work around is in terminal:
      - visit your network address instead by copying and pasting in browser

**JS Module System:**

- With React, we use a bundler system called Webpack
- Every file we create inside project is like it's own tiny universe
- Any code is not automatically shared with other files
- To get access to libraries, we have to use import statements
- We can import from a file or a dependency
- Import statements refer to ES2015 modules
- CommonJS uses the keyword `require`

**What is a React Component**

- A component is a function or a Class
- The purpose of a component is to produce HTMl(Using JSX) to show the user and handle feedback from user(clicking, dragging etc.) using event handlers

**What is JSX?**

- JSX looks like HTML, but it is not HTML at all
- Before JSX gets sent down to users' browser, it gets converted to normal JS code
- Every time we see JSX, that JSX gets turned into a function call using `React.createElement()`
- In JSX, we can see at a glance elements and text they contain
- The entire purpose of JSX is to allow us to write out all these function calls that happen behind the scenes in a way that is more readable and maintainable
- JSX is technically JS not HTML
- Browsers don't know how to read JSX, so Babel takes JSX and turns it into JS
- To use multiple lines of JSX, wrap it in parens `()` with open paren on same line as `return statement`:

```javascript
 return (
        <div>
          <label className="label" for="name">Enter name:</label>
          <input id="name" type="text" />
          <button style={{backgroundColor: 'blue', color: 'white'}}> Submit </button>
        </div>
    )
```

**Inline Styling with JSX**

- Adding custom styling to JSX uses different syntax than html:
  
`HTML--> <div style="background-color: red;"></div>`

`JSX ---> <div style={{backgroundColor:'red'}}></div>` 
- JSX requires us to provide JS object where key is a different property we want to style and value is the value for particular styling
- We have to use camelCase when using JSX
- With JSX, use double quotes anytime I want to indicate a string
- With any non JSX property, I should use single quotes (this changes from company to company)

**Class vs Classname: (JSX vs HTML)**

- Adding a class to an element uses a different syntax
- We should not use the keyword `class` when using JSX
- className is used to avoid collisions with the other keyword used in React, `class`

**Referencing JS variables in JSX:**

- JSX can very easily reference JS variables
- WE can use curly braces to indicate the use of a JS variable
- Values that JSX can't show:
      - React does not allow us to take a JS object and reference it inside JSX 
      - WE can't show a JS object as an attribute on an element
      - We can use dot notation to reference an object created using JSX


## Communicating with props

**Three Important Concepts that are all tenets of React ecosystem**

1. **Component Nesting:** A component can be shown inside of another
2. **Component Re-usability:** We want to make components that can be easily reused through out the application
3. **Component Configuration:** We should be able to configure a component when is created

**Creating Reusable Components**

- Identify JSX that appears to be duplicated
- What is the purpose of the block of JSX? Think of a descriptive name for what it does
- Create a new file to house this new component- it should have the same name as the Component
- Create a new Component in the new file, paste the JSX into it
- Make the new component configurable by using React's 'props' system

**React's prop System:**

**Component Hierarchy:**

- When looking at the Component App, the hierarchy is as follows:
   1. App : parent component
   2. Comment Detail: child component

**Props:** 

- Is a system from passing data from a parent component to a child component
- The goal of props is to customize or configure a child component
- Props customize looks or how a user interacts with a component(how it behaves)
- Looking at Component application, here's how it works:
    - App component shows instances of the CommentDetail
    - When app shows components, it will show pieces of configuration to components called props
    - props will tell the component to show name, time, and text
    - There is no limit to amount of info I can share using props
    - A child CAN NOT pass data back to a parent through prop system directly

**Two stages when using prop system:**

1. Provide info from parent to child
2. Child consumes information from parent or makes use of it

**There is another way to communicate information to child component**

- We can tell another component to show another component, by wrapping another component in another. We pass it as a prop down by doing this.
- If this is done, I need to pass props in as an arg into the component that wrapped the other:

```javascript
 {/* here I wrap CommentDetail in ApprovalCard Component
    and then pass props into the ApprovalCard Component*/}
<ApprovalCard>
    <CommentDetail  
      author="Sam" 
      timeAgo="Today at 4:46PM" 
      comment="Love it!"
      foodImage={faker.image.food}
      />
</ApprovalCard>
```

- When I pass one component to another, the child component (`CommentDetail`), is going to show up inside `ApprovalCard` on the props object, specifically on property of props object called the children property
- To make show some component, or custom content inside component, take the child, wrap it with the parent component and then child component will show up inside children property of `props.children`. I can then reference that anywhere in JSX.
- Doing this allows me to create as many elements as I wish! I just have to remember to reference `props.children` inside target component

## Structuring Apps with Class-Based Components

- A component(again) is a function or class that produces HTML to the user (using JSX) and handles feedback from the user(using event handlers)

**Functional Components VS Class-Based Components**

**OLD WAY**

- It used to be that Functional components were only used to produce JSX to show content to the user
- It used to be that we would used Class components when we wanted to make sure of Lifecycle Method system to run codes at specific points in time or to use the state system to update content on the screen
- Functional components in the past were more restricted in nature

**THE PRESENT**

- Class Components can produce JSX to show content to user
- They can use the Lifecycle Method system to run code at specific points in time
- They can use the 'state' system to update content on the screen

- Function Components can now:
      - Produce JSX to show content to the user
      - Use Hooks to run code at specific points in time
      - Use Hooks to access state system and update content on the screen

**So which Components should we use?**

- For many companies, building established products or projects, chances are Class based components are STILL being used
- Any company working on a newer project could be using both
- We need to understand BOTH!
- Learning Hooks with Function Components before understanding Class-based components is much harder! It is easier to first understand HOW react works with Lifecycle Methods and State with Classes, then move on to Hooks and Redux

**Lifecycle for what happens in Seasons Mini App/ When using Class-based component**

**inside user's browser**

- JS file gets loaded by browser (index.html)
- The browser interprets JS file and sees we are trying to create instance of App Component
- Instance of App component gets created
- App components constructor function gets called
- State object is then created and assigned to the `this.state` property
- At some point, App component is invoked by the App function
- The Geolocation service is then called:
    - Getting geolocation result takes SOME AMOUNT OF TIME
    - We call Geolocation service and in next instance App component returns
      some amount of JSX using the render method
    - The JSX is taken and turned into HTML and then rendered out on the   screen
    - When using the Functional component, I don't have a good way of waiting for success callback. By the time it has returned the position, I have already rendered App component on screen. There is no way for me to pause the rendering process
    - The solution is to use a Class-based component with React's state system so we can tell the component to update itself with the new information
    - Using State, I can update the state on the component with the given latitude using `this.setState`. React will see that I updated a property on the state object and then it calls the render method again! React then updates the content on the screen. My content is rendered upon initial boot-up and then again when the state was updated

**Rules for Class-based components:**

- Must use the JS Class
- Must `extend` (subclass) `React.component`
- Must define `render()` method that returns some amount of JSX

*Rules of State in React**

- Usable with class based components (Technically it can be used with functional components through Hook system)
- Prop system and state system are very different but easy to confuse
- 'State' is a JS object that contains some amount of data that is relevant to a singular component
- Updating 'state' on a component causes the component to almost instantly rerender
- State must be initialized with a component is first created
- **State can ONLY be updated using the function `setState`**

**Where to initialize state**

- Inside the constructor function is an option
  - calling the constructor with `super(props)` is a reference to parents constructor function
  - can then use `this.state={}`
  - Setting a value to `null` tells me that I don't know the current value but I will in the future so I can set it null
  - I can freely reference the state objects and properties from any function inside my component

- The other way to initialize a state variable and assign object holding key value pairs:

```javascript
constructor(props){
        super(props);
        this.state ={
            lat: null,
            errorMessage: ''
        };
    }
    // This is the same as using the constructor with super(props)
    // When I run this line in babeljs.io, babel implements the constructor function for me
   state = {lat: null, errorMessage: ''};
```

**Note on request calls in render**:

- I should NOT initialize a request inside render method as it is called all the time

**Lifecycle Methods and the Component Lifecycle:**

- A component lifecycle method is a function we can optionally define inside class-based components. They will be called at certain points during the components lifecycle
- The lifecycle is as follows:
- A component is created, show up in the DOM (on screen), and the component will rerender on setState. It might be removed from DOM etc. All these events are referred to as the Components Lifecycle.
    - Constructor
    - Render
    - Content Visable on screen by rendering JSX
    - `componentDidMount()`: Immediately after component shows on screen is when this method is called
        - If I define this method, above the render method, it will automatically be called one time, when the component is first rendered on the screen. It will then sit around and wait for an update from `setState`
    - `componentDidUpdate()`: This will be called automatically if I decided to use this method. It will be called any time the component updates itself. It will sit around and wait for updates. Right before this method is invoked, render is actually called.
    - At some point in time, I might want to stop showing a component on a screen. In that case, I will use the `componentWillUnmount()`. This is used under certain scenarios where I would want to do some cleanup.

**Reasons to Use different Lifecycle Methods/Where to initalize state**

1. Initializing state in the constructor: 
     - Good place to do state initialization (there are other ways too)
     - Can do data loading and reach out to API (but not ideal)

2. In the `componentDidMount` method OR `componentDidUpdate` method

**Lifecycle Methods:**

1. render: returning JSX, never going to make network request, fetching locations etc. Alone, it is about returning JSX
  
2. componentDidMount:
      - Perfect place for data loading code
      - Good place to kick off some outside process (like getting a user's location one time)
      - In truth, constructor or this method can work for places to do data loading. HOWEVER, data loading inside constructor function is not ideal. It is recommended that I do data loading inside this method.
      - The reason why data loading should be done in this method is because centralizing data loading here leads to clear code. 

3. componentDidUpdate: 
      - Good place as well to do data loading where the component needs to updated every single time
      - For ex, making network requests when user clicks on button, or enters text as input or new props given from parent component
      - (best to use this method with data loading when state/props change)
  
4. componentWillUnMount:
   - Good place to do cleanup 
   - It is not used as often as other methods

**Other lifecycle methods that aren't used frequently at all:**

    - shouldComponentUpdate
    - getDerivedStateFromProps
    - getSnapshotBeforeUpdate

**Adding in default text/specifying default props**

- After component is defined, I can define something on the function itself called `.defaultProps`. This is an object that provides default props to component should I forget to add props at some point in time. 
- This is helpful for messages/text to users etc.

**Avoiding Conditionals in the Render Function**

- Creating a helper function that contains conditionals is better
- I want to try to avoid using multiple return statements inside render
- The reason is is we might want to return some common element no matter what, and multiple conditionals in render makes this much more difficult

**Event handlers in React**

1. User clicks on something ---->  use `onClick`
2. User changes text in an input ----> use `onChange`
3. User submits a form ---->  use `onSubmit`

**I pass a function to each of these handlers and any time user does one of these things, the function is invoked**

- To use handlers I have to pass them in as a prop without using parens. I am passing a method, a callback function. However, I DO NOT want the handler to be called whenever the component is rendered. I want to call it at SOME POINT IN TIME in the future.

**Controlled vs Uncontrolled Form Elements**

- Controlled form elements are ideal vs uncontrolled
- The difference between the two is that with uncontrolled form elements, the only way to figure out the input value would be to reach into the DOM and pull out the value.
- With uncontrolled form elements, the source of data is inside of the HTML document, not the React Component
- Uncontrolled elements are stored in the HTML world, or the DOM
- Instead, centralizing information should be done inside the React Component (a controlled form)


**An example of a controlled form:**

```javascript
export default class SearchBar extends React.Component {
// Here I am not referencing the DOM, I am looking at its state object, and the term value
// We want to look at the state to get the current value, thus looking at the Component NOT at the DOM
   state = { term: ''};
   onFormSubmit(event) {
       event.preventDefault();
   }
    render() {
        return (
            <div className="ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                  </div>
             </form> 
            </div>
        )
    }
}

```

**The flow of the above component is as follows:**

- User types in an input
- Callback gets invoked the instant the user types in input, the one that is passed to `onChange`
- Inside callback, I pull current value of the input out of the event object
- We update the state on the component by calling `setState` 
- Inside body of callback I take event object (`e`), and pull the change in the input by referencing `e.target.value`
- Then state is update with `e.target.value`
- Component then rerenders, a second time the instant the user types something into input
- When component rerenders, we take the value of that input, or `this.state.term` and assign it to the value prop of the input
- The value prop `value={this.state.term}`, will overwrite whatever text is already inside the input
- Basically, all of this is what constitutes a CONTROLLED ELEMENT
  
**The `this` keyword in a Class:**

- `this` is a reference back to the Class itself
- I can then get access to other properties or the state object that belong to the instance of the Class

**How the value of `this` is determined inside a function:**

- Whenever I want to know what the value of `this` will be equal to inside a method on a class, I need to look NOT at the method itself, but where IT IS CALLED

**Binding a function/ handling `this` inside Class Component:**

- I can make use of the `bind` keyword, which actually produces a new version of the function
- The new function that is created using bind is fixed with the value of `this`, or the instance of the Class
- I can use `bind` in the constructor, this is one way
- Or, I can turn methods themselves into arrow functions instead to avoid errors when using `this` 
- I am able to use arrow functions inside classes without `bind` as seen below:

```javascript
export default class SearchBar extends React.Component {
   state = { term: ''};
   onFormSubmit = event =>{
       event.preventDefault();
   }

    render() {
        return (
            <div className="ui segment">
                {/* Defining arrow function, when form is submitted, it will call arrow function */}
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                  </div>
             </form> 
            </div>
        )
    }
}

```
**Axios vs Fetch to make Requests inside React App**

- React as a library is about showing content to users and handling user interaction
- Ajax request is left to some separate piece of code
- Two commonly used options for fetching data/managing network requests are:
  
1. **Axios:** Standalone package installed via npm that handles network request in predictable fashion
  
2. **Fetch:** A singular function built into almost all modern browsers. Amount of code sent down to users browser is lower. However, fetch is a lower level function to use to fetch data. Using fetch requires us to write more code that is already written for us in Axios.

**Time series for Picts App using Axios**

- Component renders itself one time with no list of images (App Component will render itself one time)
- `onSearchSubmit` method is called once user enters search term
- Request is made to unsplash
  ...wait
- Once I receive a response, request is complete and I need to use image data to update what App is showing(rerender)
- Call `setState` and set image data on state of the App Component
- App will rerender and we can use it to show images
- However, I will make a new component called  `imageList` that will show the images

**Handling requests with Async Await**

- When I make a request with Axios, it returns an object called a Promise
- A promise is an object that will tell me when some amount of work is completed
- I can chain on the `.then` function that will be called at some point in the future
- OR, I can use `async/await` syntax to handle requests by putting `async` in front of the method
- I then find whatever is taking some time to resolve (the network request) and put the `await` keyword in front of it. I then assign this to a variable as the response:

```javascript
 async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: term },
          headers: {
              Authorization: 'Client-ID 0WimT32moFGqGVKDxfDO21bWIJ-QLy5X3a9pux0l5XY'
          }
        })
        console.log(response.data.results);
    }
```
**The purpose of Keys in Lists:**

- List items get rendered for JSX and then React looks at what is currently present in the DOM
- React doesn't WANT to rerender anything that is already present in the DOM. In order to allow it to rerender what is already in the DOM, we should use the Key prop on an element in a list
- React will then compare the keys, the key of element in the DOM to the element with the matching key in the new rendered list
- It is a performance consideration and helps React update lists in a more precise manner

**CSS Grid**

- I can find some element in DOM hierarchy
- I use the `display: grid` on that element
- All elements below will display as a grid
- However, Grid won't necessarily solve our tile layout issues

**Creating ImageCard Components/ How they can help along CSS GRID**

- Create an ImageCard component
- Let the ImageCard render itself and its image
- Reach into the DOM and figure out the height of the image:
      - We know how to do this with vanilla JS
      - Using React, we can't use the same properties in vanilla JS
      - Instead, we have to use the REF system(Reference)
- Set the image height on state to get the component to rerender
- When rerendering, assign a `grid-row-end` to make sure the image takes up the appropriate space

**What is React's Ref System?**

- It is a system that gives us direct access to single DOM element rendered by a component
- In order to create a ref:
  
      - Define a constructor function
      - Call a function inside constructor to create reference
      - Assign it as an instance variable on our class
      - We can in theory assign references to state of component but this is not required as refs will not change over time and we will not call state with a ref (for my mini application anyway)
      - Once ref is assigned as an instance variable, we will go into render method and pass ref as some JSX prop

**Communicating from Child to Parent in Youtube Browser App**

**How do  you make sure that clicking on a video opens up a larger detail of that video?** (I can do this by making use of callback)

1. On App component there is a state object with single property on it: the videos property with an array of video objects retrieved from Youtube API
2. I will add another property onto the state object called `selectedVideo`
3. Whenever the user clicks on the video, I will take that video object and assign it to that `selectedVideo` video property
4. Anytime I have a selected video property I will pass that video down to the `VideoDetail` component, thus telling the `VideoDetail` component what to render on the screen

**But how do I update selected video property whenever user clicks on thumbnail of a video item?**

- The App component has a list of videos. The App component is passing a list of videos down to the `VideoList` component
- In addition to that list of videos, I will pass a callback down there as well. I will pass a reference to a callback down to the video list called the `onVideoSelect`  prop
- The `VideoList` component in turn is going to the take the callback `onVideoSelect`  and pass it down to each `VideoItem`
- Each video item is currently receiving props object with single video labeled as the prop called `video`
- They will also now be getting a second prop called the `onVideoSelect` callback
- That will be the exact same function passed from `App` component to the `VideoList` component. I am essentially adding a new method to the `App` component and passing that reference to that function down first to `VideoList`c component then to the `VideoItem` component
- When the user clicks on the video item, the `VideoItem` component will call the method `onVideoSelect`, thus passing in the video that it had been passed
- What this does is invokes the method on the `App` component with the video object that was clicked on
- The App can then update its state and say that the new currently selected video is what the user just clicked on

## React Hooks

**Hook System**

- This system is all about giving functional components additional functionality
- With the Hook system, React gives us the following functions:
      - `useState`: Allows us to use state in the function component
      - `useEffect` Allows us to use something like lifecycle methods in a function component
      - `useRef` Lets us create a 'ref' in a function component

**Hooks are a way to write reusable code, instead of more classic techniques like Inheritance**

**Basic/Additional Hooks (not a real term)**

**With the Hook system, we get access to 10 functions:**

**Basic Hooks:**

1. `useState`
2. `useEeffect`
3. `useContext`
  
  **Additional Hooks:**

4. `useReducer`
5. `useCallback`
6. `useMemo`
7. `useRef`
9. `useImperativeHandle`
10. `useLayoutEffect`
11. `useDebugValue`
    
**What is a custom hook?**

- It is a piece of code that does one repeatable task, it is a reusable piece of code and can incorporate the use of other hooks

**Understanding useState:**

- Whenever this is called, I am making use of this syntax:

` const [activeIndex, setActiveIndex] = useState(null);`

- This syntax is referred to as array destructuring and it's identical to object destructuring. 
- This syntax tells JS that I want to get references to elements inside an array
- Whenever I call `useState` I get back an array with two elements inside of it (in the above example)
- The variables used inside brackets goes as follows:
  
     - The first variable, `activeIndex` is the piece of state I am trying to keep track of. It is some value that will change at some point in time
     - The second variable, `setActiveIndex` is a function I call to update that piece of state. Anytime this is called, this setter function, it will cause the entire component to automatically rerender. It is the setter.
     - When I call, `useState` it takes in one arg, which is the default value for the piece of state. 
     - Once the setter is called, the default value to `useState` function will fall away. It is only an initialization value and the new value will be whatever is passed to the setter.

**With Class Components I can easily define and change multiple pieces of state at the same time. However, in a function component using Hooks, it is different. If I want to have multiple pieces of state, I have to call `useState` multiple times. If I want to update state values, I have to call a setter.**

**When Do we Search (to an API, in relation to the Widgets App)?**

**Option 1:**

- User types in input
- onChange event handler caleld
- We take value form input and make a request immediately to API
- It will take some time to make request
- Get reponse
- Update piece of state (results)
- Component rerenders to show list of results

**Option 2:**

- User types in input
- OnChange event handler is called
- Update 'term' piece of state
- Component rerenders
- **I then add code to detect that the `term` has changed! Also, that the component is rerendering!**
- Once I detect that it is rerendering, make the the request to the API
- Wait
- Update `results` piece of state
- Component rerenders again, showing list of results to user

**Big difference between these two approaches is whether we want to attempt to make request immediately inside `onChange` handler or whether I want to only update some piece of state and then make request ONLY after component has rerendered and I detect that the `term` has changed.**

- **Option 1** allows me to: Search instantly when `onChange` event triggers. It also tightly couples `onChange` event with search.
- **Option 2** allows me to search when `term` piece of state changes. It can easily trigger a search when other parameters change. It is also easier to extract code out into a more reusable component. Option two is better.
    - I can use the  `useEffect` Hook which will allow me to add code that will detect that the component is rerendering and that SOME piece of information has changed

**The `useEffect` Hook:**

- Allows function components to use **something like** lifecycle methods
- We can configure the hook to run some code automatically in one of three scenarios:
  1. When the component is rendered **for the first time only**
  2. When the component is rendered **for the first time AND whenever it rerenders**
  3. When the component is rendered **for the first time AND (whenever it rerenders AND some piece of data has changed)**

- To tell the `useEffect` function which scenarios we want the function to be executed in, I have to provide a second arg to `useEffect`.
- The second arg can be an empty array, array with value inside of it, or NO array at all
- I will always see either an empty array, an array with one or more elements inside of it, or nothing at all

**Why?**

- The presence of an array with values inside, an empty array or no array at all matches the scenarios above:
   1. An empty array as second arg: Means I want to run function at initial render of component
   2. No array as a second arg: Means I want to run the function at the initial render and after single rerender
   3. An array with one or more elements inside: Means I want to run at initial render and after ever single rerender IF data has changed since last render

**Async code in `useEffect`:**

- I am not able to use async await code inside `useEffect` function
- There are 3 different ways I can do this:
  1. Inside of `useEffect` I can create a helper function:
   
      ```javascript
      useEffect(() => {
        const search = async () => {
          await axios.get('adsfa');
        }
        search();
      }, [term]);
      ```

  2. I can remove temp variable `search` above altogether and wrap async function with set of parens. 

      ```javascript
      useEffect(() => {
        (async () => {
          await axios.get('asdfad');
        })();
      }, [term]);
      ```

  3. I can use promises instead using `.then` syntax:
       
       ```javascript
      useEffect(() => {
        axios.get('asdfad')
        .then((response) => {
          console.log(response.data);
        });
      }, [term]);
      ```

**XSS Attacks in React**

```javascript
const renderedResults = results.map(result => {
        return <div key={result.pageid} className="item">
            <div className="content">
                <div className="header">
                  {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
            </div>
        </div>
    })
```
- Looking at the code above, I can see the `<span dangerouslySetInnerHTML={{__html: result.snippet}}></span>`
- When taking a string from a 3rd party, such as Wikipedia API, I could be introducing a security hole into my application
- Specifically an XSS attack, Cross-site scripting attack. This is when I accidentally pick up and render some HTML from an untrusted source, thus allowing a hacker to execute JS inside my app. 
- This is VERY BAD!
- The attribute of `dangerouslySetInnerHTML` is available for use but is somewhat hidden
- Any time I use this attribute, I have to be confident that whomever is providing the html is a trusted source. If it is not, then it should never be used.

** `useEffect's` Cleanup Function:**

- Whenever I define this function or call it and provide function as first arg, there is only one value I am allowed to return. Another function.
- This all depends on when React calls the `useEffect` function
- Initial component render will call function provided to `useEffect`
- The function I provide inside `useEffect` the cleanup function will be returned
- On rerender the cleanup function is invoked. Then the function provided to `useEffect` is called again and returns the cleanup function. This process repeats.
- This function is key when I want to cancel a previous timer set.

```javascript

if(term && !results.length) {
         search(); 
      } else {
        const timeoutId = setTimeout(() => {
            if(term) {
                search();
              }
          }, 1000);
          //cleanup
          return () => {
              clearTimeout(timeoutId);
          }
      }
    }, [term]);
```

**FIXING A WARNING THAT OCCURS WITH `useEffect` Hook**

- In Widget App, `term` and `results.length` are pieces of state
- I will have to reference any prop or piece of state inside `useEffect's` dependency array, or the second arg to the function
- Not listing out all pieces of state in the dependency array can cause some issues that can be hard to troubleshoot
- Adding in elements inside the array can also add bugs into the code when dealing with data fetching
- To fix some errors, we can introduce another piece of state and use multiple `useEffect` functions
- One `useEffect` Hook will watch `debouncedTerm` and when change occurs I will make a request
- The other `useEffect` will watch updates to `term` and when there is a change to `term`, I will create timer to update `debouncedTerm`

**Hiding and Showing Dropdowns with React**

- I could use a conditional to say what to show
- Or I can toggle classes using a new piece of state to component
- With the new piece of state, it would keep track of whether or not the component is open at any given time
- I could then toggle that state from true to false when user clicks on
- True would be show the values, false would mean to hide them

**How to make sure clicking outside a Dropdown closes dropdown**

- A Dropdown is not able to listen for click events on something that was not created by the dropdown itself
- The Dropdown has a hard time listening for these events outside of itself
- The built-in event system with React only allows a component to listen for clicks on elements created by that component

**Event Bubbling:**

- Let's imagine a user clicks on an item in a div
- The browser itself creates an event object
- This object describes some information about the click (the element that was clicked on, where user's mouse is on screen etc.)
- The browser then hands that event object off to React
- React does some processing on the event and then provides event object to `onClick` event handler
- **Whenever a user clicks on that element, the event does not stop there**
- The event travels up to the Parent element
- If that element has a click event handler on it, it is automatically invoked
- The event object then goes back up to the NEXT Parent element
- IF that parent has on click handler, then it is also invoked with event object
- The event travels up to all Parent elements, and in every step, the browser checks to see if that element has event handler
- IF it does, it is invoked automatically! Thus, event bubbling!

**Why is event bubbling relevant?**

- In the case of the Widget App and its Dropdown component, the component needs to detect a click event on any element besides the ones it creates
- The Dropdown has a hard time setting up event handlers on elements it does not create
- Event Bubbling is a thing
- Solution is to have Dropdown component set up manual Event Listener on the body element
- Anytime anyone clicks on any element inside entire document, event will bubble up to body element thus telling Dropdown that something has been clicked
- We can still make use of use of native Browser events/Event Listeners in React:

```javascript
useEffect(() => {
    document.body.addEventListener('click', () => {
        console.log('Click!')
    })
  }, [])
```

- Any event listeners wired up with `.addEventListener` get called first (body listeners first)
- Then, all React listeners get called, first with child listeners, then Parents

## Navigation in React

**Majority of React apps use React-Router. However...**

- React Router has frequent breaking changes
- It is more important to learn the ideas and theory of navigation
- First start off with building Navigation from scratch and then move on to React Router

**I can make another component which is in charge of knowing what other routes/components to show**

- When we extract navigation logic out into a reusable component, we can then use it anywhere in the app
- In the Widget App, anytime I click on a nav link, I am making many different requests
- Traditionally on HTML web-based app, I navigate to some webpage in a browser, thus making a request to a server for an HTML doc. The HTML is then parsed and put onto screen. When user clicks on link, it makes a request to another server for another HTML doc. 
- In the Widget app, whenever I click on one of the links, I completely reload HTML file inside project and reload JS and CSS. THAT IS NOT IDEAL INSIDE REACT APP.
- There is no reason for me to do a hard reload, or full page reload. With a full page reload, a whole bunch of network traffic occurs which is not required to change content on the screen.

**SO HOW CAN I SOLVE THIS?**

- Ideally this would happen:
     - Change the URL when user clicks on link, but don't do a full page refresh
        - To do this, I can use `window.history.pushState({}, '', 'url here')`
     - Each Route could detect the URL has changed
     - Route could update piece of state tracking the current pathname
     - Each Route rerenders, showing/hiding components appropriately

**Deployment with React App**

**What is the process?**

- When we build out our project, it builds what is called a deployment bundle
- In the deployment bundle are static files that are used for deployment. They are normal files that exist in some file or directory
- The deployment bundle includes files such as:
    - `index.html`
    - `bundle.js`
    - `image.jpg`
    - `index.css`

- When the deployment bundle is built out, there is no longer a server running
- So, we take these files and upload them to some Deployment Target
- This might be any service provider we decide to deploy to
- Whenever user types in our domain into the browser, the browser will make request to deployment provider and receive response that includes the `html` file etc.
- I do NOT NEED A VM to deploy a React app
- I would only need a VM if I am running any type of server

**Deploying Youtube App with Vercel**

- sign up at `vercel.com`
- Install the Vercel CLI
- Run command `vercel` in project directory (to deploy)
- If I make a change to project I can update the change, then run `vercel --prod`

**Deploying with Netlify**

- Create a Github repo
- Commit changes locally
- Link local project with Github repo
- Push code to Github
- Sign up for account on Netlify
- Link Github account and repo I want to deploy

