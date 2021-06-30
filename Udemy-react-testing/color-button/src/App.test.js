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
});

test('Checkbox disables button first click, enables button on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  // When checkbox is clicked/checked, button is disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  // When checkbox is clicked/checked again, button is enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background, reverts to red', () => {
  //disable button, button is gray, enable button, button is read
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:gray');

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});
test('Clicked disabled button has gray background, reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // Changes button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:blue');

})

