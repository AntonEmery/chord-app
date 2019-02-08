import React, { Component } from 'react';



class Reset extends Component {

  render() {
    return (
      <div className="card card__login">
        <h1>Reset Your Password</h1>
        <p>A reset link will be sent to your email</p>
        <form className="reset">
          <div className="card__input-item">
            <label htmlFor="email">Email address</label>
            <input name="email " type="text" placeholder="Username" />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <button className="button button--grey button--med">Reset</button>
        </form>
      </div>
    );
  }
}

export default Reset;