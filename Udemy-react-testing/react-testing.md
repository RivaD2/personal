# Testing React with Jest and Testing Library

React Testing Library
  - Provides virtual DOM for tests
Jest
  - Test runner that:
    - Finds tests
    - Runs tests
    - Determines whether tests pass or fail

1) After cd'ing into `color-button` directory, I run `npm test`
2) This runs Jest in watchmode
3) By typing 'a' on the command line, I can run the tests
4) One test passes, a test that comes with create-react-app
   - It is in a file called App.test.js
   - It looks like this:
  ```
  import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

**Breaking Down the Syntax**

- The first thing that happens in the test function above, is the render method is run
- The render method creates the Virtual DOM for whatever JSX is given as the argument
- In this case, the JSX is for the `<App />` component
- Accessing the Virtual DOM once it has been rendered is done by the `screen` global object
- Both render and `screen` global object come from the import of `@testing-library/react`
- `getByText` finds element in the DOM based off text it is displaying
- The arg in this case, is just a Regex Expression(but a simple string would do just fine here as well).
- Finally we have our **assertion**. The assertion is what causes the test to either pass or fail.

**Jest and Jest-DOM Assertions**

- Assertions are essential to the test function
- They always start with the `expect` method which is a global in Jest. Let's take a look!

`expect(linkElement).toBeInTheDocument();`

- Above, we can see it starts with expect
- Then, we see an argument, `linkElement`
  - This is what your assertion is asserting against
  - This is what Jest will examine to see if our expectations are met
- After that, a matcher will be used, or the assertion type, `toBeInTheDocument()`. This comes from Jest-DOM.
- Sometimes there is an argument to the matcher (in the previous example, there is no arg)

**More assertion examples:**

`expect(element.textContent).toBe('hello');`
`expect(elementsArray).toHaveLength(7);`

- In the above examples, we are assuming that 'element' and 'elementsArray' have been defined previously

**More on jest-dom:**
- comes with create-react-app
- uses `src/setup/Tests.js` to import jest-dom before each test which means all jest-dom matchers are available before each test
- The top example, we saw a matcher called, `toBeInTheDocument()`. That is a DOM-based matcher.
- The examples right above in the assertion examples, are general and could apply to any node code. DOM matchers only apply to a Virtual DOM.
- There are many matchers for the virtual DOM such as:
  - `toBeVisible()`
  - `toBeChecked()`
  - `toBeInTheDocument()`
  - More Later!

**Let's talk about Jest and why we need it!**

- React testing library helps with:
  - rendering components into virtual DOM
  - searching virtual DOM
  - interacting with virtual DOM
  - **It needs a test runner**
  - There are many test runners of course

- `npm test` will run Jest in watchmode
- When I am running tests, I am really running `react-scripts-test`
- Watch mode:
  - watches for changes in files since last commit
  - Only runs tests related to these files
  - No changes? No tests.

**How Jest works**

- There is a global `test` method that has two arguments:
  - **string description of test**: Jest uses this arg to tell us when the test fails and WHICH test fails
  - **test function:** A function run to determine whether test fails or succeeds
- A test fails if any error is thrown while it's running that test function
- Assertions will throw errors when the expectation fails, which fails the test
- If there is no error, clearly woo hoo, it passes!

**Review of concepts learned previously**

TDD: Writing tests before writing code. Then writing code according to 'spec' set by tests
 - also called 'red-green' testing
 - Tests fail before code is written
 - TDD is really part of the coding process, not something to be done at the end
 - Everytime a change is made in code later, we can just re-run tests

**React Testing Library Philosophy**

- React Testing Library creates a virtual DOM for testing and utilities for interacting with DOM
- This allows for testing without a browser
- Types of tests:
  - **Unit tests**: testing one unit of code (a function or component in isolation)
  - **Integration tests:** Testing how multiple units work together
  - **Functional tests:** Testing a particular function of software, in this case the **behavior** of the software
  - **Acceptance, End-to-End Tests:** Testing that requires browser and the server that app is connected to. They require special tools like Cypress or Selenium.

- React testing Library encourages functional testing

**Functional Testing vs Unit Testing:**

**Unit testing:**

- We want tests to be as isolated as possible.
- We mock dependencies. If there are other functions/dependencies that the component is relying on, we use test versions of that
- If tests fail, we know it is because of a particular unit
- We test internals, differences in state, as we don't have other components to see what differences it made in the app
- Isolation allows us to pinpoint failures
- **It is further from how users interact with software**
- **It is more likely to break with refactoring**

**Functional Testing:**

- Here, we include all relevant units and tests for behavior/user flow
- This is closer to how users interact with software
- Passing tests mean that users should be ok and failing means users would have problems
- This means that tests are robust. IF code is refactored, but behavior stays the same, the test should still pass
- **It is more difficult to debug failing tests**

**TDD vs BDD**
- Testing Library encourages testing behavior over implementation
- BDD involves collaboration between lots of roles(developers, QA, business partners etc.)
- In this course, I am learning TDD!

**Accessibility and Finding Elements:**

- Testing Library recommends finding elements by accessibility handles (or finding them the way assistive technologies like screen readers would find them)
- There is a guide about which query to use:

  `https://testing-library.com/docs/guide-which-query/`

- It tells us which priority we should use when finding elements in the virtual DOM
  - Queries Accessible to Everyone: `getByRole()`, `getByLabelText()`
  - Semantic Queries: `getByTitle()`, `getByAltText()`
  - Test ID's: `getByTestId()`, the user can't see or hear, so these are only to be used if necessary
  - Using `getByRole()` over `getByText()` makes sure that our elements our accessible to screen readers
- We can add a role to any element, although some elements have built in roles
