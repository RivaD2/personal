import React, { useState, useEffect } from 'react';
// import { validateInput } from '../api/validate';
import { sendFormData } from '../api/validate';
import './Form.css';

const Form = () => {
  const [inputValue, setInputValue] = useState({username: '',email: '',password: ''});
  const {username, email, password} = inputValue;

  const handleChange = e => {
    setInputValue({...inputValue, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    return await sendFormData(inputValue);
  }

  const inputPatterns = {
    patternUsername: `[A-Za-z0-9]+`,
    patternPassword: `^(?=.*[dW])(?=.*[a-z])(?=.*[A-Z]).{8,100}$`,
  }

  const inputTitles = {
    titleUsername: `Username should consist of uppercase letters,lowercase letters, and numbers 0-9`,
    titlePassword: `Password must have at least 1 uppercase letter, 1 lowercase letter
    1 number or special character, and must be between 8 and 30 characters long`
  }

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <fieldset>
        <label htmlFor="username" className="visually-hidden">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          pattern={inputPatterns.patternUsername}
          title={inputTitles.titleUsername}
          onChange={handleChange}
          value={username}
          minLength="6"
          maxLength="25"
          required>
        </input>
        <label htmlFor="email" className="visually-hidden">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          required>
        </input>
        <label htmlFor="password" className="visually-hidden">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          pattern={inputPatterns.patternPassword}
          title={inputTitles.titlePassword}
          onChange={handleChange}
          value={password}
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
        <label htmlFor="checkbox" className="checkbox-text">I accept terms and conditions</label>
      </fieldset>
      <p className="to-login">Already have an account?<a href="Login">Login</a></p>
        <button className="signup-button" type="submit">SIGN UP</button>
    </form>
  )
}

export default Form;
