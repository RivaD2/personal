import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue': 'red';

  const onCheckBoxChange = e => {
   setDisabled(e.target.checked)
  };

  return (
    <div className="button">
      <button
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={onCheckBoxChange}
      />
    </div>
  );
}

export default App;
