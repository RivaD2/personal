import React from 'react'
import './Form.css';

const Form = () => {

  const handleSubmit = e => {
    e.preventDefault();
  }
 const inputPatterns = {
   patternUsername: `[A-Za-z0-9]+`,
   patternPassword: `^(?=.*[\d\W])(?=.*[a-z])(?=.*[A-Z]).{8,100}$`,
 }

 const inputTitles = {
  titleUsername: `Username should consist of uppercase letters,lowercase letters, and numbers 0-9`,
  titlePassword: `Password must have at least 1 uppercase letter, 1 lowercase letter
  1 number or special character, and must be between 8 and 30 characters long`
 }

  return (
    <form onSubmit={handleSubmit} id="signup-form">
      <h1>Sign Up</h1>
      <fieldset>
        <label for="username" className="visually-hidden">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          pattern={inputPatterns.patternUsername}
          title={inputTitles.titleUsername}
          minLength="6"
          maxLength="25"
          required>
        </input>
        <label for="email" className="visually-hidden">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required>
        </input>
        <label for="password" className="visually-hidden">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          pattern={inputPatterns.patternPassword}
          title={inputTitles.titlePassword}
          minLength="10"
          required>
        </input>
      </fieldset>
      <fieldset className="checkbox-fieldset">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox">
        </input>
        <label for="checkbox" className="checkbox-text">I accept terms and conditions</label>
      </fieldset>
      <p class="to-login">Already have an account?<a href="Login">Login</a></p>
        <button class="signup-button" type="submit">SIGN UP</button>
    </form>
  )
}

export default Form;
