import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  // find element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  // Expect background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  // Button is clicked
  fireEvent.click(colorButton);
  // expect color to change to blue
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  //expect button text to change to 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

