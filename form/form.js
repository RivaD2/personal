const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordErrorElement = document.getElementById('error-password');
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', event => {
  event.preventDefault();
});
