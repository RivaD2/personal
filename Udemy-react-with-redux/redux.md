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
3. Dispatch: The dispatch function takes in an action, makes copies of object, and passes iot off to a bunch of different places inside application
4. Reducers: A reducer is a function that is responsible for taking in action and some existing amount of data. It will process that action by looking at its type and make some change to data. Then it will return it so it can be centralized in some.location.
5. State: The state property is a central repository of all information created by reducers. All information gets consolidated in state. Our react app then doesn't have to go to each separate reducer for current state.