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
- **W3.org** gives us a breakdown of all the roles

**So how do we start testing?**

- We first need to know what we want to test
- For the first app of this tutorial, I need to test that the button has correct initial color and text
- I also need to test functionality, that when button is clicked it turns blue
- I always start with `render()` passing it the component that that I am focusing on, or the one that I am rendering
- Next, I have to find element I'm interested in, so I use the global object `screen`
  - I getByRole() and pass the string as the first arg that represents the role, and the second argument is the options
- I find the element by role to make sure app is accessible
- To test color, I need to see what options are in `jest-dom`. On github repo for `jest-dom` all custom matchers are listed
- I have to test whether button starts as enabled and that checkbox starts out as unchecked
  - I know how to find the button, using the global screen object
  - That has a method  `getByRole()`
  - I know that the button has a role of 'button' and a name of 'Change to blue'
  - To check if it is enabled, I have to reference `jest-dom` and look at what options I have for matchers. `toBeEnabled()` is found.
  - For the checkbox, I first have to find it, using `getByRole()`
  - The role for checkbox would be found on W3.org. The role here is `checkbox`
  - I expect that it starts out as unchecked, so I can go back to `jest-dom` and I find the matcher `toBeChecked()`. I throw a `.not` in there to negate the assertion.

```
test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
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

testing follows format of:
    first arg describes the test, second arg is a function to run to see if errors are thrown
test('describes test', () => {
// what you expect to happen + matcher
expect(element you are focusing on).matcher();
})
```

- To find proper role, there is always the option to give a non existent role.Testing library will complain that it can't find accessible element with that role. It will then tell me what roles there are! That output is very useful and helps us to figure out what roles are available for use.

**Unit Testing Functions**

- Often in React, we have functions separate from components
  - This can be because functions are used by several components
  - The logic is complex, so it is separated out
- We should unit test these types of functions if the logic is complicated enough
that is hard to test with functional tests
  - If there are too many edge cases, unit testing the function is more beneficial

**Ex: Customers want medium violet red and midnight blue for colors of buttons**

  - I can make a function that separates the characters from camelCase to spaces
  - I will combine test into `describe()` statement which is a way to group tests
  - Describe takes a function and test globals go inside.
  - So, I want to test that the function works for a color name that doesn't have any capital letters, it works for one inner capital letter, and for multiple inner capital letters.
  - The test will call the function, so it will need to be imported into the test file
  - Then I can run it, by running the `expect()` directly on the output of the function

```

describe('spaces before camel case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
});

```

**When to unit test**

- The function used in the example above is very simple and it could be covered with functional tests on the button
- For more complicated functions, unit tests are better at covering all possible edge cases
- They are awesome at determining what caused functional tests to fail
- Functional test issues:
  - They are resistant to failing when we've refactored, when we've changed the implementation but not the behavior, this is great! However...
  - This means they can be difficult to diagnose. When a test fails, it covers a broad section of our functionality.

**Summary Form for Sundae app**

- The form in this app is where user accepts terms and conditions
- The form helps me to review form interactions:
  - checking a checkbox will enable a button
  - testing disappearance of element
- This involves the order summary component (the entire page) and an internal component for summary form
- I first test/code:
  - That checkbox enables button
  - Test and code terms and conditions popover to see if element has been removed
  - test code and summary text
  - test code and button functionality

**Popover from React-Bootstrap**

- What styling is used makes a difference in how I do the tests
- I first have to inspect the popover element from Bootstrap so I can see how it is implemented
- I will need to search by text to find the popover
- The popover is a div, and when it goes away, the div is just gone.
  - The other possibility would be that it remains on the page but remains hidden
  - That difference determines how I test that the popover goes away when a user uses mouse to navigate away from terms and conditions

**So how do I simulate the mouse over?**

-  If I go to `testing-library.com/api-events/` , it tells me that `fireEvent` is ok, but that `userEvent` is better in most cases as it simulates user events in a more realistic way.
- Under 'user-events' section here, I can see many choices:
  - `hover` and `unhover` look good for the mouseover
- To use user events, I have to install `npm install --save-dev @testing-library/user-event`

**Screen Query Methods:**

- parts of query method -----> command[ALL]ByQueryType
- **command**:
  - get: expect element to be in DOM
  - query: expect element to not be in DOM
  - find: expect element to appear async (waiting for an event to occur before assertion)
- **[ALL]**:
  - (exclude) expect only one match
  - (include) expect more than one match (provides an array of all matches)
- **QueryType**:
  - Role: (most preferred)
  - AltText(images)
  - Text(display elements)
  - Form Elements:
    - PlaceholderText
    - LabelText
    - DisplayValue
- I can of course mix and match these to construct query method
- Pages for reference:
  - `https://testing-library.com/docs/dom-testing-library/api-queries`
  - `https://testing-library.com/docs/react-testing-library/cheatsheet/`
  - `https://testing-library.com/docs/guide-which-query/`

**Notes for popover async error**
- After the first initial tests for popover, I receive an error:

```
 Warning: An update to Overlay inside a test was not wrapped in act(...).

    When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */

    **and**

     expected document not to contain element, found <div class="popover-body">No ice cream will actually be delivered</div> instead

```

- The first error is common to see when there are async updates going on. It suggests wrapping the code in act().
- What it means is that the element was updated in the DOM AFTER the test was finished, some async update occurred after test function exited
- In this case, I do NOT want to follow testing-libaries advice. In the docs, it says "all renders and events being fired are wrapped in act()"
- To fix this error:
  - First figure out what async changes are happening after the test is over
  - Account for the change in the test by awaiting the change and asserting on it
- The tests initially failed because the disappearance of the popover was happening asynchronously so it was happening after test function had completed. By making the assertion asynchronous the problem is solved.

**Review SummaryForm review**:

- Tested flow where checkbox controls whether button is disabled
- mouseover for terms and conditions
  - `userEvent.hover()` and `userEvent.unhover()` methods
  - `queryByText()` and `expect().not.toBeInTheDocument()` for element that starts out NOT on the page
- async `waitForElementToBeRemoved()` for element that was there and then disappeared
- found that `test not wrapped in act(...)` warning and that I need to look at all async work being done


**Mock Service Worker and Handlers**

- For the OrderEntry component, I will test components that show scoop options and toppings
- I am testing that option images render
- I mock the response that I get from the server using mock service worker, specifically mocking responses for scoops and toppings
- I want to intercept network calls and return specified response
  - I will prevent any network calls from happening and set up test conditions based on server response
  - If the server had responded with response I am telling mock service worker to respond with, what would I expect the page to look like...that is what I am testing.
- **Mock service worker setup:**
  - Run `npm install msw`
  - Create handlers, functions that determine what is returned for URL
  - Create a test server to handle requests
    - Make sure test server listens during all tests
    - Reset server handlers after each test
  - In `src` created folder `mocks`, and a file `server.js`
    - `import { setupServer } from 'msw/node'`
    - `import { handlers } from './handlers'`
    - `export const server = setupServer(...handlers)` to create server
  - Configure react app so mock service worker with intercept network request and return responses established in handlers. This is done in `setupTests.js`
    - This is shown on msw's getting started with node guide
- **Creating handlers:**
  - Make a file in `src` make a folder called `mocks` and create a file called `handlers.js`
  -  `import { rest } from 'msw'`
  -  Visit MSW site and check out rest-api section
-  **How the rest handlers work:**
  -  Express.js uses similar request/response context function for handlers
  -  Ex: `rest.get('http://localhost:3030/scoops', (req, res, ctx) => {})`
  -  First, I give the handler type (rest or graphql imported from msw), then the method I want to mock, the full URL to mock, and the response resolver function.
  -  The response resolver function holds req, res, ctx

**Notes on Options.test.js**

- There is no mention of mock service worker in these tests
- The test itself deals with mock service worker in setupTest.js as that is where the service worker is configured to intercept requests.
- The place I make network request is in the options component
- The tests in this file will run the Options component, and then component makes get request to server.
- That request never happens, instead MSW intercepts it and sends back handler response to options component in the tests.

**First initial tests for Options.js**

```
TestingLibraryElementError: Unable to find an accessible element with the role "image" and name `/scoop$/i`

    There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole

    <body>
      <div>
        <div
          class="row"
        />
      </div>
    </body>

```

- This might be useful in some instances when it can't find a certain role by name. In this case, I am dealing with async code again. I am using axios and populating items on page in an asynchronous way.
- Anytime I am waiting for something to appear asynchronously on the page, I must use `await` and `findBy()` in my tests.

**Server Errors Planning**

- I will display an alert banner component if axios throws an err, instead of content from server
- Since I will be using Alert from Bootstrap, I need to inspect it to see what I can expect for the test
- It is a div, with a role of 'alert'. I will be finding it by this role in the tests.
- By default, the server that is set up to handle all requests, uses the handlers.js file. Those handlers return non error response. For these particular tests, I want and error response, so I will override those responses in these tests.
- I can use jest debugging tools, like running one test file at a time and running one test within a file.
