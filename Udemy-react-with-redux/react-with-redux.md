# React and Redux

**OUR FIRST APP: Building a small translation page**

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