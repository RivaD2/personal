// Import React and React Dom libaries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = () => {
    return (
        <div>
          <label class="label" for="name">Enter name:</label>
          <input id="name" type="text" />
          <button style={{backgroundColor: 'blue', color: 'white'}}> Submit </button>
        </div>
    )
}

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    // Reference to DOM element already inside html file in public directory
    document.querySelector('#root')
)