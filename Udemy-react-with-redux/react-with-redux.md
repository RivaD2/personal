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

- Adding custom styling to JSX uses different syntax than html
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
<ApprovalCard>
    {/* here I wrap CommentDetail in ApprovalCard Component
    and then pass props into the ApprovalCard Component*/}
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
           - If I define this method, above the render method, it will automatically be called one time,when component is first rendered on the screen. It will then sit around and wait for an update from `setState`
      - `componentDidUpdate()`: This will be called automatically if I decided to use this method. It will be called any time the component updates itself.It will sit around and wait for updates. Right before this method is invoked, render is actually called.
      - At some point in time, I might want to stop showing a component on a screen. In that case, I will use the `componentWillUnmount()`. This is used under certain scenarios where I would want to do some cleanup.

**Reasons to Use different Lifecycle Methods**

- constructor: 
     - Good place to do state intialization (there are other ways too)
     - Can do data loading and reach out to API (but not ideal)

- In the `componentDidMount` method OR `componentDidUpdate` method

- render: returning JSX, never going to make network request, fetching locations etc. Alone, it is about returning JSX
- componentDidMount:
      - Perfect place for data loading code
      - Good place to kick off some outside process (like getting a user's location one time)
      - In truth, constructor or this method can work for places to do data loading. HOWEVER, data loading inside constructor function is not ideal. It is recommended that I do data loading inside this method.
      - The reason why data loading should be done in this method is because centralizing data loading here leads to clear code. 
- componentDidUpdate: 
      - Good place as well to do data loading where the component needs to updated every single time
      - For ex, making network requests when user clicks on button, or enters text as input or new props given from parent component
      - (best to use this method with data loading when state/props change)
- componentWillUnMount:
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
