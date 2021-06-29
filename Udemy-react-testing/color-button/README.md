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
