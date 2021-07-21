# Web

**Purpose of Web App:**

- To build a web framework to get real world experience using TS
- It is a client-side web framework which won't have the same functionality as React or Angular, but it will have the same purpose: Fetch data, render content on the screen and handle user events
- This is a framework that can be extended to make something much more complicated

**Tools Used:**

- JSON server
- Axios
- nodemon (executes code once compiled)
- parcel
- @types/node (Type Definitions for Node.js)

**How to use Web:**

- Run `npm i` to install all dependencies
- Run `json-server -w db.json` to run json-server
- Run `parcel index.html` to start parcel
- Alternatively, run `npm run start: db` in one window, in second window run `npm run start: parcel`

**Designing User:**

`class User` properties:

 - private data: UserProps --> Object to store info about particular user (name, age etc.)
 - get(propName: string): (string | number) --> Gets a single piece of info about this user (name, age etc.)
 - set(update: UserProps): void --> Changes info about this user
 - on(eventName: string, callback:() => {}) --> Registers an event handler with this object so other parts of app know when something changes
 - trigger(eventName: string): void --> Triggers and event to tell other parts of app something changed
 - fetch(); Promise --> Fetches data from the server about a particular user
 - save():Promise --> Saves some data about this user to the server


