// Password reset page that is accessed from link in email

import React, { Component, Fragment } from 'react';

class NewPassword extends Component {

  constructor(props) {
    super(props);

    this.state = { verified: 'loading' };
  }


  componentDidMount() {
    const data = { token: this.props.location.pathname.split('/')[2] };
    fetch('http://localhost:8080/verifyToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors'
    })
      .then(data => data.json())
      .then(({ data }) => {
        if (data === 'valid reset') this.setState({ verified: 'verified' })
        if (data === 'invalid reset') this.setState({ verified: 'not verified' })
      })
      .catch(error => console.log(error))
  }

  render() {
    if (this.state.verified === 'verified') {
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
    } else if (this.state.verified === 'not verified') {
      return (<p>Invalid login link</p>)
    }
    else if (this.state.verified === 'loading') {
      return (
        <p>Verifying User</p>
      )
    }
  }
}

export default NewPassword;