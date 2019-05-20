import React, { Component } from 'react';

class Reset extends Component {

  render() {
    return (
      <div className="card card__login">
        <h1>Reset Your Password</h1>
        <p>A reset link will be sent to your email</p>
        <form className="reset" action="http://localhost:8080/reset" method="POST">
          <div className="card__input-item">
            <label htmlFor="email">Email address</label>
            <input name="email " type="text" placeholder="Email" />
          </div>
          <button type="submit" className="button button--grey button--med">Reset</button>
        </form>
      </div>
    );
  }
}

export default Reset;