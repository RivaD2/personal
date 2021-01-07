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
- Chances are, internally policy department has list of everyone with a policy
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

**Redux:** The redux library
**react-redux:** Integration layer between react and redux
**Axios:** Helps us make network requests
**redux-thunk** Middleware to help us make requests in redux application

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

**After we dispatch something, redux thunk will say, "Are you a function or an object?" If the something is an object, it passes it off to reducers. If it is a function, redux thunk will invokes the function and passes into it the `getState` and `dispatch` functions as args.**

