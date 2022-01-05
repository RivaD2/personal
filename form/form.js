const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordErrorElement = document.getElementById('error-password');
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', event => {
  event.preventDefault();
  validateInputs();
});

function validateInputs() {
  let errorMessages = [];
  const passwordErrorMessage = 'Passwords must be 10 characters';

  const passwordValue = passwordInput.value;
  const usernameInputValue = usernameInput.value;
  const emailInputValue = emailInput.value;

  if (passwordValue.length < 10) {
    errorMessages.push(passwordErrorMessage);
    passwordInput.style.borderColor = 'red';
  } else {
    passwordInput.style.borderColor = 'black';
  }

  if (errorMessages.length > 0) {
    passwordErrorElement.innerText = errorMessages.join(', ');
  }
}
