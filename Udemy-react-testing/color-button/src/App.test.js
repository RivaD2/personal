import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  // Find element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  // Expect background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  // Button is clicked
  fireEvent.click(colorButton);
  // Expect color to change to blue
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  //Expect button text to change to 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // Check button starts as enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  // Check that checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

})

