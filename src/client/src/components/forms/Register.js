import React, { Component } from 'react';

class Register extends Component {

  render() {
    return (
      <div className="card card__register">
        <h1>Create an Account</h1>
        <form action="http://localhost:8080/register" method="POST" className="register">
          <div className="card__input-item">
            <label htmlFor="username">Username</label>
            <input name="username " type="text" placeholder="Username" />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="card__input-item">
            <label htmlFor="confirn-password">Confirm Password</label>
            <input name="confirm-password" type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="button button--grey button--med">Create Account</button>
        </form>
      </div>
    );
  }
}

export default Register;