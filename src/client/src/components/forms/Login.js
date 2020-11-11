import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}login/`;
    axios({
      method: 'post',
      url,
      withCredentials: true,
      data: { email, password },
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      referrer: 'no-referrer',
    })
      .then((data) => {
        if (data.data.response === 'success') {
          props.history.push('/chordsheets');
        }
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="card card__form">
      <h1 className="card__heading">Log into Chord App</h1>
      or <Link to="/register">Create Account</Link>
      <form className="form__login">
        <div className="card__input-item">
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="card__input-item">
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={handleLoginSubmit}
          className="button button--grey button--med"
          disabled={!email || !password}
        >
          Log In
        </button>
      </form>
      <Link to="/reset-password">Forgot Password?</Link>
    </div>
  );
}

export default Login;
