# A clone of the popular website Twitch.tv

**What it includes**

1. Users will be able to stream video from the desktop
2. Once they see a stream, the user can select a stream which makes a request to the RTMP server to get live video stream
3. Users will be able to see a list of streams/channels available and view video from a single stream if not logged in
4. Users will be able to login
5. Users once logged in, will be able to create streams, edit streams and delete any stream they have created


**Tools Used:**

- React
- API server that lists out all the streams or channels that a user can watch
- OBS for RTMP(Real Time Messaging Protocol) server which handles video streaming itself
- Flv.js
- React-Redux 
- Redux
- Redux-Form
- Redux-thunk
- Google Sign-in/ Google OAuth for handling authentication
- React-router-dom to manage Navigation
- JSON server (used because of REST-ful conventions)
- Axios for ajax requests
- Lodash


*How to use/view Streams app:**

- You will need to clone the repo and then run the command `npm i` both in the client directory and api directory
- Open up two terminal windows and do an `npm start` for both the `client` and `api` directories
  

**How it Works:**

1. When the user comes to the landing page, they will see a list of all the different streams available on the app
2. The list of streams includes a name/title or description
3. Once the user clicks on a stream, they are taken to the Detail page that shows them the video player that displays video being streamed from user currently streaming video
4. With Twitch, every user has one stream/channel they can stream to. This application is different from Twitch in that it allows the user to create unlimited channels/streams that they can stream to.
5. When a user is not logged into the application, they can only see the list of channels/streams available and view video from a single stream
6. When a user is logged in, they can create a new stream, edit any stream they have created and delete any stream they have created
7. When the user is signed in, any stream they have created will have additional buttons (so a slightly different landing page is shown compared to when the user is not logged in)


** Final Result:**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
