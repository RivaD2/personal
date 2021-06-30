import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  // This expression says if I find a capital in middle of word,
  // and if it is found multiple times, replace it with whatever letter is found,
  // preceded by a space, every time.
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue': 'red';

  const onCheckboxChange = e => {
   setDisabled(e.target.checked)
  };

  return (
    <div className="button">
      <button
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={onCheckboxChange}
      />
      <label htmlFor="disable-button-checkbox"> Disable button </label>
    </div>
  );
}

export default App;
