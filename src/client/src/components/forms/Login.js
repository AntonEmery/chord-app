import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  // Do fetch instead of a form action

  render() {
    return (
      <div className="card card__login">
        <h1>Log into Chord App</h1>
        or <Link to="/register">Create Account</Link>
        <form className="login" action="http://localhost:8080/login" method="POST">
          <div className="card__input-item">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Email" />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <button type="submit" className="button button--grey button--med">Log In</button>
        </form>
        <Link to="/reset">Forgot Password?</Link>
      </div>
    )
  }
}

export default Login;
