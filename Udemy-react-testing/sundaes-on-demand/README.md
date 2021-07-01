# Testing React with Jest and Testing Library

## Sundaes on Demand Intro:

**This application is used as a backdrop to test**

- This application allows me to:
  - test more complex interactions, like forms with multiple entries and moving through order phases
  - Includes a mouseover pop up for terms and conditions
    - For this, I test that an element disappears from the DOM
- It simulates a server response using mock service worker so the server is not running while writing tests.
- While the server is not needed for functional testing, it is used to mock service worker for mocking response (it is just for the spec, so I know what the service worker should return/ any manual acceptance testing)
- I WAIT for a particular change in the DOM before making an assertion (I test for async app updates)
- I will not test context implementation. I want to test behavior as seen by the user so tests will not be any different that if I used Redux or other state management system.
- One difference is in test set up, as I have to make sure component has access to the context for tests to function properly

## How it works

- People can choose icecream flavors and toppings and submit and order
- Flavors and toppings come from a server
- When order is submitted, it is submitted to the server
- Server sends order number back to client to display to customer

**There will be three main pages for this app:**

1) Order Entry: The order is entered here, and it will show scoop options (come from server),toppings (images), number of scoops, subtotal, grandtotal, and submit order button
2) Order Summary: A summary is given of above information in addition to agreeing to terms and conditions (mouseover pop up), order confirmation button
3) Order Confirmation Page: Provides and order confirmation number from server

**Breakdown/Review of the app:**

