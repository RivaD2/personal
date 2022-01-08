const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordErrorElement = document.getElementById('error-password');
const signupForm = document.getElementById('signup-form');

// Used HTML5 form validation for now
// validation is also to be done on the backend
// Use Express Validator once the form is built in React
// Create a schema and model for user in MongoDB as well as a POST route for /user
signupForm.addEventListener('submit', event => {
  event.preventDefault();
});
