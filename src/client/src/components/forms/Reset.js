// Page for user to input email to get password reset link

import React, { Component } from 'react';

class Reset extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleResetPassword = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/requestReset/';
    const data = { email: this.state.email }
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((response) => {
        if (response.data !== 'valid email') throw 'invalid_email';
        this.setState({ isValidEmail: true })
      })
      .catch((error) => {
        console.log('invalid email', error);
      })
  }

  render() {
    if (this.state.isValidEmail === true) {
      return (<p>A reset email has been sent!</p>)
    } else {
      return (
        <div className="card card__login">
          <h1>Reset Your Password</h1>
          <p>A reset link will be sent to your email</p>
          <form className="reset">
            <div className="card__input-item">
              <label htmlFor="email">Email address</label>
              <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Email" />
            </div>
            <button type="submit" onClick={this.handleResetPassword} className="button button--grey button--med">Reset</button>
          </form>
        </div>
      );
    }
  }
}

export default Reset;