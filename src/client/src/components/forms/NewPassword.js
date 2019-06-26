import React, { Component, Fragment } from 'react';

class NewPassword extends Component {

  constructor(props) {
    super(props);

    this.state = { verified: false };
  }


  componentDidMount() {
    const token = this.props.location.pathname.split('/')[2];
    fetch('http://localhost:8080/resetPassword', {
      method: 'POST',
      body: { token }
    })
  }

  render() {
    if (this.state.verified) {
      return (
        <div className="card card__login">
          <h1>Reset Your Password</h1>
          <p>Please choose a new password</p>
          <form className="reset" action="http://localhost:8080/reset" method="POST">
            <div className="card__input-item">
              <label htmlFor="password">Password</label>
              <input name="password" type="text" placeholder="Password" />
            </div>
            <div className="card__input-item">
              <label htmlFor="confirm-password">Password</label>
              <input name="confirm-password" type="text" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="button button--grey button--med">Set Password</button>
          </form>
        </div>
      )
    } else {
      return (
        <p>Verifying User</p>
      )
    }
  }
}

export default NewPassword;