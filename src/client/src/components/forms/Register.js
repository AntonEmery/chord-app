import React, { useState, useReducer } from 'react';

const axios = require('axios');

function Register(props) {
  const [passwordMismatch, setPasswordMismatch] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [serverError, setServerError] = useState('');

  // https://zacjones.io/handle-multiple-inputs-in-react-with-hooks
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: '', email: '', password: '', confirmedPassword: '' }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userInput.password !== userInput.confirmedPassword) {
      setPasswordMismatch(true);
      return;
    }
    setSubmitDisabled(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}register`, {
        name: userInput.name,
        email: userInput.email,
        password: userInput.password,
        confirmedPassword: userInput.confirmedPassword,
      })
      .then((response) => {
        setSubmitDisabled(false);
        if (response.status === 200) props.history.push('/chordsheets');
      })
      .catch((error) => {
        setSubmitDisabled(false);
        console.log(error.response.data.response);
        setServerError(error.response.data.response);
      });
  };

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setUserInput({ [name]: value });
  };

  return (
    <div className="card card__form">
      <h1>Create an Account</h1>
      <form className="register">
        <div className="card__input-item">
          <label htmlFor="name">name</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Username"
            value={userInput.name}
          />
        </div>
        <div className="card__input-item">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="Email"
            value={userInput.email}
          />
        </div>
        <div className="card__input-item">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={userInput.password}
          />
        </div>
        <div className="card__input-item">
          <label htmlFor="confirmedPassword">Confirm Password</label>
          <input
            name="confirmedPassword"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            value={userInput.confirmedPassword}
          />
        </div>
        {serverError ? <p>{serverError}</p> : ''}
        {passwordMismatch ? <p>Passwords must match</p> : ''}
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={submitDisabled}
          className="button button--grey button--med"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
