// Import React and React Dom libaries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// Create React Component
const App = () => {
    const buttonText = {text: 'Click me'};
    const labelText = "Enter Name";
    return (
        <div>
          <label className="label" htmlFor="name">
            {labelText}
          </label>
          <input id="name" type="text" />
          <button style={{backgroundColor: 'blue', color: 'white'}}> 
            {buttonText.text}
          </button>
        </div>
    )
}

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    // Reference to DOM element already inside html file in public directory
    document.querySelector('#root')
)