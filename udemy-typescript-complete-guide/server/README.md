# Express & TS Integration: Two versions

**How server works (first version)**

- For the first app, Express is used to build a simple authentication style app
- There is a root route that tells the user whether or not they are logged in and shows them a button to log in to the application
- User is taken to `/login` and is presented with a basic login form (basic HTML sent from server to browser)
- There is no backend DB or sign up feature, but just hardcoded email and password
- Once a user enters that, and clicks submit, login will be confirmed and they can go to other routes called `/protected`
- If someone tries to go to `/protected` when they are not logged in, they receive error message
- This includes bare minimum TS, type annotations where possible
- A refactor will be done to use a TS adapter library that has helpers for using the library with TS

**Second version**

- Uses a decorator to read methods and associate it with a router
- Uses a decorator to automate checking properties in body of request
- Uses a decorator that marks a class as a Controller
- Uses yet another decorator to set up middleware

**How to run server**

- Run `npm i` to install dependencies
- Run `npm start`

**Tools Used:**

- concurrently
- nodemon
- Express
- cookie-session
- reflect-metadata
