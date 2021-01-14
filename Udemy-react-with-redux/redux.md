# Intro to Redux

**What is Redux?**

- Redux is state management library. Rather than maintaining state in components, we extract it to Redux libary
- This makes sense as React is about rendering content and handling user interaction
- Redux is in charge of handling data in application
- It makes creating complex applications easier
     - We can still use React by itself but Redux can make it easier
 - Redux was not specifically created for React

**Redux by Analogy (And how it works internally/by itself)**

**REDUX CYCLE**

`Action Creator--> Action-->dispatch-->Reducers-->State`

- Imagine that we are building an insurance company
- There is a policy 
- Customer holds the policy and a claim is made is if a customer had something bad happen to them, we have to pay them
- Our headquarters has several departments in it
     - A claims history dept
     - A policy department
     - An accounting dept
- The customer wants a new policy so they will fill out a form
- The customer then comes to the headquarters
- The customer has to take the form and has to hand it off to front office or 'form receiver `
- The form receiver makes copies of the form and hands it off to each department in our company
- The purpose of the form was to sign up for new policy
- The claims history department stores history of every claim made
- The policy department stores history of everyone with a policy
- The Accounting department holds all the cash and is responsible for paying out money
- The Policy department cares most about the form that the customer filled out

**What happens when a form is handed of to a department?**

- A form comes in with intent of signing up for policy
- Chances are, internal policy department has list of everyone with a policy
- The policy department takes in form and adds them onto policy list
- Let's imagine we have a management team at the company
- The management team always wants to know who has a policy RIGHT NOW
- Management eventually gets frustrated having to bother policy department all the time
- So, in order to address this, rather than policy department holding list of customers, they will store the list of policies inside a central repository of company data, outside of department
- Now, the management team can go and get a list of policies and see who has one
- However, policy department needs some way of updating policy list when new form is handed in
- Now, the policy department updates list of policies and passes it back to central repository 

**How does this relate to Redux?**

- Every form that gets filled out has two different parts
  
  - A type: What type of form it is
  - A payload: The body of the form (name and claim amount)
  
- We would need three different types of forms:
    - A policy form
    - A claim form
  - A delete policy form
- Each different type of form would have different information inside payload
  
- Now all department data is stored in one central location or data store

`Action Creator--> Action-->dispatch-->Reducers-->State`

1. Action Creator: Person dropping off the form
2. Action: The form
3. Dispatch: form receiver(makes copies of form for each department)
4. Reducers: Departments
5. State: Compiled department data
---
1. Action Creator: A function that will create/return a plain JS object
2. Action: Created by action creator and a plain JS object with two properties:
   
    - Type: Describes some change I want to make to data
    - Payload:Describes some context around change I want to make
    - Purpose of action is to describe some change we want to make to data
3. Dispatch: The dispatch function takes in an action, makes copies of object, and passes it off to a bunch of different places inside application
4. Reducers: A reducer is a function that is responsible for taking in action and some existing amount of data. It will process that action by looking at its type and make some change to data. Then it will return it so it can be centralized in some.location.
5. State: The state property is a central repository of all information created by reducers. All information gets consolidated in state. Our react app then doesn't have to go to each separate reducer for current state.

**Redux in action for this analogy**

```javascript

// People dropping of a form(action creators)
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoney: amountOfMoneyToCollect
    }
  };
};

// Reducers (take data and action and modify data based of contents of action)
const claimsHistory = (oldClaimsList = [], action) => {
  if(action.type === 'CREATE_CLAIM') {
    // We care about this action, the FORM
    return [...oldClaimsList, action.payload];
  }
  return oldClaimsList;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !==    action.payload.name);
  }
  return listOfPolicies;
};

// Store and using combineReducers
const {createStore, combineReducers} = Redux;
const ourDepts = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// Store represents entire Redux app
// It contains reducers and state produced by reducers or data produced
// Functions on it that are useful are the dispatch function
// It is like the form receiver in the analogy
// We send it an action and it makes a copy of it and sends it off to all reducers in application

const store = createStore(ourDepts);
//To call dispatch, pass in an action
store.dispatch(createPolicy('Willow', 20));
store.dispatch(createPolicy('Zander', 30));
store.dispatch(createPolicy('Buffy', 50));
store.dispatch(deletePolicy('Willow'));
// Another method on the store object is getState
// When calling this, I get access to all information
store.getState();
```

**Important notes about Redux and code above**

- Anytime we want to change the state or data of app, we call an action creator
- Calling an action creator will produce action object
- The action object describes how we want to change data in application and is fed to dispatch function
- The dispatch function makes copies of action object and feeds copies to reducers
- The reducers run, process the actions and modify data. Then they return the new data
- The data that is returned is formed into some NEW state object

**Inside the code above**

- Different reducers are different functions that need to be wired up together
- We can do this by using `combineReducers`
- We do not always have to name reducers after keys, but by convention they are usually similar
- Each dispatch I am doing is running an entire Redux cycle
- I can print out state object in between each dispatch
- Even after `getState`, I can still continue to modify state object
- So, at any point in time along our application, I can take the store object and pull our state out of it and read our current data/or state for the application
- One thing about Redux is that I can only modify the state object through the use of the dispatch function, action creators and actions
- In other words, I can't manually reach into store and modify state. I am unable to get direct access to the state property and modify it in some meaningful way

**I am only able to modify state by dispatching an action that has been created by an action creator**

**Why Use Redux**

1. As application gets larger, the app grows in complexity. 
2. Because I can only change data through the use of action creators, the application becomes self-documenting. 
3. People can only modify data by calling action creators. So, if someone walks into application, they can see action creators and easily see exactly how they can modify data in the application. 
4. Using Redux helps our app become more stable as there are set ways to modify data

**Design of a Redux App**

- We will need to use Function components for Redux
- In general all state is now handled by Redux
- What this means, is a more straightforward App component

1. **Redux:** The redux library
2. **react-redux:** Integration layer between react and redux
3. **Axios:** Helps us make network requests
4. **redux-thunk** Middleware to help us make requests in redux application

**What is redux-thunk**

- Middleware are functions that will change behavior of Redux store
- It helps us make network requests on Redux side of app
- There are other alternatives of course but redux thunk is popular
- Helps us to deal with asynchronous action creators in Redux

**General Data Loading with Redux**

1. Component gets rendered onto the screen
2. Component's `componentDidMount` lifecycle method gets called
3. We call action creator from `componentDidMount`
4. Action creator runs code to make an API request
5. API responds with data
6. Action creator returns an 'action' with the fetched data on the 'payload' property
7. The dispatch method dispatches action and sends it off to all reducers in app
8. Some reducer sees the action and returns the data off the 'payload'
9. Anytime reducers run, they will return some values. Those values form new state object in redux store. Anytime they do this, we take the state and send it to React side of application
10. Because we generate some new state object, redux/react-redux cause our react app to be rerendered

**Extra notes on Data loading with Redux**

- Components are generally responsible for fetching data they need by calling an action creator
- Action creators are responsible for making API requests (Redux-thunk comes into play here)
- We get fetched data into a component by generating new state in our redux store, then getting that into our component through `mapToStateToProps`

**Understanding Async action creators**

```javascript
// What is wrong with fetchPosts?
export const fetchPosts = async() => {
   const response = await jsonPlaceholder.get('/posts');
  
  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};

// This returns: Error: Actions must be plain objects. Use custom middleware for async actions
```

- This is a common problem when making requests in redux app
- Action creators must return plain JS objects with a type property
- In the code above, the async await syntax makes the action creator not work as expected
- The real problem is this is not returning a plain object but instead a request object due to the async await syntax
- We can't just remove the async/await syntax here...

**Why wouldn't removing the async/await work?**

- By the time our action gets to a reducer, we won't have fetched our data
- The action gets consumed in fractions of a second!!
- When the action creator is called, the request to the API is also made
- That response takes some amount of time and we can't delay our reducers 

**How to fix the error and handle middleware in Redux?**

- There are synchronous action creators and asynchronous action creators
- Synchronous action creators instantly return an action with data ready to go
- Asynchronous action creators take some amount of time to get the data ready to go (any network request would be asynchronous and would require middleware)

**Rules with Redux Thunk**

- Action Creators can return action objects OR
- Action Creators can return functions!
- If an action object gets returned, it must have a type
- If an action object gets returned, it can optionally have a 'payload'
- Redux thunk calls the functions automatically

**After we dispatch something, redux thunk will say, "Are you a function or an object?" If the something is an object, it passes it off to reducers. If it is a function, redux thunk will invoke the function and passes into it the `getState` and `dispatch` functions as args:**

```javascript
// In fetchPosts, we can expect to see dispatch and getState as args 
// In my case, I only needed to use dispatch
// In index.js, thunk is passed into the applyMiddleware() function and thunk handles API request
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload:response
    })
};
```
**Rules of Reducers**

- Must return any value besides 'undefined'
- Produces 'state' or data to be used inside of your app using only previous state and the action object that has been dispatched 
- Must not return reach 'out of itself' to decided what value to return (reducers are pure). Anytime we call a reducer with an action and previous state value, we are not supposed to reach outside of this function (no api calls, no reaching into DOM, etc.) The only thing that will be returned is some computation done on the two arguments, the state object or action. This is known as keeping the reducer pure!
- Must not mutate its input 'state' argument.
      - In reducers the args are state and action. This rule is slightly misleading however mutation comes up frequently when dealing with reducers
      - I will see a lot of information out there that says you can't mutate state
  
**The truth is that WE CAN MUTATE state and not see any errors. However, there is one case where the app will not work the way we expect if we mutate state.**

**Best practice is to not mutate the state argument. To better understand this rule though we need to look at source code of Redux itself:**

- On the Redux repo, nside the `src` folder, inside `combineReducers` we see the following code:

```javascript
let hasChanged = false
    const nextState: StateFromReducersMapObject<typeof reducers> = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        const errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }
}
```

- This block of code is what we need to look at. It takes an action anytime it is dispatched and sends action around to all of the different Reducers inside your application. 
- So, anytime you dispatch an action, the code above is executed.
- The first thing that happens is `hasChanged` is set to false
- The for loop iterates through all Reducers inside your app
- Inside body of the for loop, `previousStateForKey` is assigned the last state value that the reducer returned, the previous state value
- When the `reducer()` function is invoked, the first argument is the state that the reducer returned the last time it ran, and second is the action object
- `nextStateForKey` is the new state value
- A check is done to see if the reducer has returned a value of 'undefined' as this is one of the big rules around using Reducers
- `hasChanged` takes the value of a direct comparison between `nextStateForKey` and `previousStateForKey`:
  
`hasChanged = hasChanged || nextStateForKey !== previousStateForKey`

**This is the line of code that we need to focus on when thinking of the rule "Must not mutate state". This comparison is checking to see if `nextStateForKey` and `previousStateForKey` are the exact same array/object in memory**

- If I just returned some array and it matchs the one from the last time the reducer ran, it will return a value of false
- If it returned a new array from the previous, `hasChanged` will be true
- `hasChanged` refers to "has the state returned by your reducers changed?"
- If any different reducer has changed, or returns a new value, `hasChanged` will be true!

`return hasChanged ? nextState : state`

If has changed is true, the new state object will be returned. Otherwise, the state is returned (state on this line refers to all the state the reducers returned the last time they ran)
- If Redux returns old state value, then redux is not going to notify the rest of your app that your data has changed. If you do have a new state, something has changed in one of your reducers, Redux will notify the rest of the app (including React) that a new state is available, thus rerendering your app.

**In summary, we care so much about saying you must not mutate state, is if we accidentally return the same value that is pumped into your reducer, redux will say, "Nothing has changed and so I will not update your data and your app is not going to rerender."**

**Techniques to not mutate state inside reducer**

- Use the spread operator to add an element to an array
- Use filter method to remove an element from an array
- Use map to replace an element in an array
- Use spread operator to update a property in an object
- Use spread operator to add a property to an object
- Use spread to remove a property from an object


### react-router-dom

1. react-router: Core navigation lib, I don't install this manually
2. react-router-dom: Navigation for dom-based apps
3. react-router-native: Navigation for react-native apps
4. react-router-redux: Bindings between Redux and React Router(not necessary)

- The react-router itself has core navigation logic, how to work with React, how to change content out etc.
- `react-router-dom` is used to handle navigation in web-based aps, so I do not need to install `react-router`
- `react-router-redux` is a compatbility layer to get Redux and React to work well together and in fact, navigation should not be taken care of in Redux

**How React Router Dom works with `<Browser Router/>`**

- As we navigate to different URL's on the screen, different content is shown
- React router cares about a very specific part of the URL
- It cares about all the characters that are listed after the port and the domain
- Once an app is created and loaded in browser, an instance of the BrowserRouter Component is made
- BrowserRouter internally creates an object of its own called the history object
- This history object looks at url inside of your address bar and extracts portion of url that React-router cares about
- The history object then sends the path to BrowserRouter
- BrowserRouter then sends the path down to route components
- The Route components then decide to show or hide themselves depending on the path inside of the url that the user is visiting and the path prop that is passed when it was created
- The `path` property is used by ReactRouter to decide whether or not to show Component on the screen
- In React Router Application, different routes can be matched by the same URL and all show themselves to the user
- The `exact` prop inside Route component causes React Router to change the rule that it uses for matches the path slightly. Basically it asks: `extractedPath === path`
- If `extractedPath !== path` then the component will not show

**Oauth-Based Authentication**

**Email/Password Authentication**

- We store a record in the DB with the users email and encrypted password
- When the user tries to login, we compare email/password with whatever is saved in DB
- They are logged in when they enter the correct info

**OAuth Authentication**

- User authenticates with outside service provider(Google, LinkedIn, Facebook)
- User authorizes our app to access their information
- Outside provider gives us the info we need to identify the user
- We are trusting the outside provider to correctly handle identification of user
- OAuth can be used for user identification in our app and also our app making actions on behalf of the user
- A scope is a permission I am granting to an application

**OAuth for Servers**

- Results in a 'token' that a server can use to make request on behalf of the user
- Usually used when we have an app that needs to access user data **when they are NOT logged in**
- Difficult to set up because we need to store a lot of info about the user

**OAuth for JS Browser Apps**

- Results in a 'token' that a browser app can use to make requests on behalf of the user
- Usually used when we have an app that only needs to access user data **while they are logged in**
- Very easy to set up thanks to Google's JS lib to automate flow

*OAuth Flow**

- User clicks on Login with Google button
- We use Google JS lib to initiate OAuth process
- Google's JS lib makes auth request over to Google
- Google displays confirmation screen to user in popup window
- User accepts
- Popup window closes
- Google JS lib invokes a callback in React/Redux app
- Callback provided with 'authorization' token and profile info for user
- If user is logged out, that would be a separate callback event

**Steps for Setting up OAuth**

- Create a new project at console.developers.google.com
- Set up an OAuth confirmation screen
- Generate an OAuth Client ID
- Install Google's API library, initialize it with the OAuth Client ID
- Make sure the lib gets called any time the user clicks on the 'Login with Google button'

**Redux Dev Tools**

- Go to: [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)
- Go to the 'Installation' section
- Add the extension for Chrome or Firefox
- Scroll down further on the repo to find 'Advanced Store Setup'
- Import `{compose}` and `applyMiddleware` into root `index.js` file
- Add the following code to prepare for Redux Thunk:

```javascript

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(
  reducers,
  composeEnhancers(applyMiddleware())
  );
```

- There are two features used frequently with these dev tools: 'State' which shows the current state inside Redux store. I can see all data sitting inside Redux app
- The second feature is the left panel. This is a list of all the action dispatched to the store
- I can 'jump' back in time using this panel by clicking on 'jump'
- This allows me to get a better idea of what happened at different points in time
- When we click 'jump', I am not just changing the state inside dev tool, I am changing the state inside my real Redux store! We can see this happening in our app as we click 'jump'

**Debug Sessions with Redux Dev Tools**

- We can add a query string at the end of our localhost address
- When we do this, Redux Dev Tools will see I am trying to set up a debug session
- It will automatically save all data inside the Redux store and persist across refreshes of the app
- Normally on a refresh, all data falls away
- This is incredibly helpful with advanced feature development
- I must make sure to remove the query string after I am done using the debug session
- Debug sessions allow me to have checkpoints of state

**Forms with Redux-Form Library**

- To start, run: `npm install redux-form`
- It is kind of challenging, however it does a lot automatically
- With Redux, all data needs to be inside Redux store
- Redux form will automate some portion of that flow
- The reducer holds the state of all the forms inside app, all the form data will exist inside the redux store
- In order to make sure we can get data into the store, we  use `mapStateToProps` and then pass them into input elements as values
- Anytime user makes a change to an element, I will have callback handler that will call action creator which will try and update form data
- The cool thing about Redux form is it will handle all this for us
- Redux Form is going to have a reducer that we just wire up to the applicatino
- I do not write the reducer, but rather it is given to me along with `mapStateToProps` and all action creators from Redux-Form
- I just have to make sure I get form info down into an input element, and that the input element knows it has to call a callback handler provided by `Redux-Form` anytime it is changed
  
**With all this said, if we go to the [Redux-Store repo](https://github.com/redux-form/redux-form), we will see that the general consensus is that we DO NOT want form state inside the Redux Store.`React Final Form` is a better option. However, it is noted that the only good reason to use `Redux Form` in your application is if you need really tight coupling of your form data with Redux, specifically if you need to subscribe to it and modify it from parts of your application far from your form component**

### REST-based React Apps**

**When to Navigate User**

1. Intentional Navigation:Whenever a user clicks on a Link component. They are trying to go from page A to page B.
2. Programmatic Navigation: When I run code in response to some event and this code has intent of navigating user to another component.
3. What instant in time do I want the user to go back, or go to another page? In the case of the Stream App, I do NOT want to navigate user back to streams immediately after request is made. Why? Because the stream might not be created. The user has already navigated away from the form. In other words, I don't want to navigate them away too early.
4. Instead, I want to have the following happen:
   - User submit the form
   - The request is made to back-end API to create the Stream
   - Time passes...we wait
   - API responds with success or error
   - Either show error to user OR navigate them back to list of streams

**How to do Programmatic Navigation**

- Sometimes it is easy, other times it can be quite difficult
- Browser Router is at the top of the Component hierarchy in the Streams app, and it creates this history object
- The history object tracks the address in the address bar of the browser
- The history object doesn't just watch the address bar but also has the ability to change the address bar
- To make programmatic navigation work, we can use the history object
- It is challenging to write code that can get a reference to THAT history object

**Normal operations of Browser Router**

- Internally, Browser Router creates the history object
- Anytime Browser Router renders some component, the Browser Router passes history object as a prop down to your component
- That component could EASILY TRIGGER navigation inside of it
- However, if you are trying to navigation from an action creator and NOT a component, it is hard to get the reference to the history object

**Solution:**

- Anytime component calls action creator, the component should pass along the history object into the action creator
- This is hard because every single time, I would have to write action creators to be called with history object and make sure all components call action creator with history object. NOT IDEAL
- **BETTER SOLUTION:** Since the Browser Router maintains history object, we can create the history object ourselves inside a file in our project. We can then access the object by importing the file when we need it, thus maintaining control over the history object instead of React-Router
- When we create a history object that will look at everything after port to decide to what to show on the screen
- I no longer need the `<Browser Router>` object, instead, it will be just a plain `<Router>`

**How to manually change API records using JSON server**

- In terminal, go to your api directory where `db.json` file
- Inside of `db.json` we have a list of records created
- I can just change the json file itself
- API server will automatically restart

**Component Isolation with React-router**

- ID based selection in URl requires us to obey this rule:

**Each component needs to be designed to work in isolation (fetch its own data!)**
- Users often come directly to a given route in your app, so it can not rely upon another component fetching data fro it ahead of time
- With React-Router, components should fetch their own data as eventually user will go to a page where the data will not exist

### Using React Portals

- Creating modals with React can be challenging
- In React, all of our elements are nested inside of that 'div with id of root'
- That is the normal operation of React
- However, there is a feature called 'Portals'
- We can use Portals to get around all the nested elements etc.

**Why use a Portal?**

- We don't have to stick to strict component hierarchy using Portals
- We can ask Portals to make a component a child of another element in the structure
- In the Stream app, I can make the modal component a child of another element without conflicts
- Most common uses for this are for modal windows or anytime we want to work with 3rd party library

**How to Create a Portal and render something into it**

- Build it as a reusable component 
- Have to use `react-dom` 
- We return a reference or call to reactDOM.createPortal()
- `reactDOM.createPortal() takes two arguments:
      - The first is JSX
      - Second is a reference to HTML element, usually by using `document.querySelector`

**RTMP Server Setup**

- Import on root `index.js` is  `const NodeMediaServer = require('node-media-server');`
- It has to receive different video streams and broadcast them out
- In terminal, inside main directory where project is held:
     - Make new file called rtmpserver
     - cd into it
     - generate new package.json with `npm init`
     - read docs about Node Media Server at [Node-Media-Server](github.com/illuspas/Node-Media-Server)
     - Create new `index.js` inside RTMP server directory and add the following:

```javascript

const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();

```

- inside directory, run `npm start`
- go to obsproject.com
- select OS you use
- Follow instructions for installation 

- When we try to access livestream/video there are many formats we can access it with
- HLS and DASH are popular types but enabling takes a bit longer
- So for the RTMP server in Streams app, I use `http-flv` (flash video format)
- So, to set it up this way, follow instruction on the `flv.js` over `http-flv` set up on github.com/illuspas/Node-Media-Server
- Install the `flv` library for the actual video player

