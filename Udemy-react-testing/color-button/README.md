# Testing React with Jest and Testing Library

## General plan:

- The goal here is to start small
- Goal for first part is to:
  - Change a button color when clicked
  - Disable button with checkbox
- Introduce testing interactions that affect the DOM, like button clicks or clicking a checkbox
- Create a helper function so I can unit test that function
  - This is to show that functional testing and unit testing are not mutually exclusive
  - Functions that are complicated might need different variations testing without involving the DOM
 - Use a mock server to mock responses with Mock Service worker
 - Learn how to test asynchronous code

## Color Button App

- This is for getting familiar with testing again
- There is a button
  - The color starts off as red
  - Text says, "Change to blue", button is changed to blue when clicked on
  - When button changes to blue, text is, "Change to red" and changes to red when clicked on
  - A checkbox that disables button when it is selected, and is enabled when checkbox is deselected

- I will test:
  - That the button has the correct initial color
  - That the button has correct initial text
  - That when clicked, the button turns blue
  - That button starts off as enabled and checkbox starts as unchecked

**Breakdown/Review of Color Button App**

- Tested interactivity using the object `fireEvent()`
- Used new `jest-dom` assertions:
  - `toBeEnabled()`
  - `toBeDisabled()`
  - `toBeChecked()`
- Used `getByRole()` option, name option to identify which button and checkbox I was referring to on the page `getByRole() option {name : }`
- Used Jest `describe()` global to group tests into logical groups
- Discussed unit testing functions, how to do this and when it is appropriate