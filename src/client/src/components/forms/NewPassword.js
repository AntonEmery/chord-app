// Password reset page that is accessed from link in email

import React, { Component } from 'react';
const axios = require('axios');

class NewPassword extends Component {

  constructor(props) {
    super(props);

    this.state = {
      verified: 'loading',
      password: '',
      confirmedPassword: '',
    };
  }


  componentDidMount() {
    const token = { token: this.props.location.pathname.split('/')[2] };
    axios({
      method: 'post',
      url: 'http://localhost:8080/verifyToken',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      data: token,
    })
      .then(({ data }) => {
        if (data === 'valid reset') this.setState({ verified: 'verified' })
        if (data === 'invalid reset') this.setState({ verified: 'not verified' })
      })
      .catch(error => console.log(error))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const token = this.props.location.pathname.split('/')[2];
    axios.post('http://localhost:8080/resetPassword', {
      password: this.state.password,
      confirmedPassword: this.state.confirmedPassword,
      token: token,
    })
      .then(response => console.log(response.data))
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  render() {
    if (this.state.verified === 'verified') {
      return (
        <div className="card card__login">
          <h1>Reset Your Password</h1>
          <p>Please choose a new password</p>
          <form className="reset">
            <div className="card__input-item">
              <label htmlFor="password">Password</label>
              <input name="password" type="text" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
              <input name="confirmedPassword" type="text" placeholder="Password" onChange={this.handleChange} value={this.state.confirmedPassword} />
            </div>
            <button type="submit" onClick={this.handleSubmit} className="button button--grey button--med">Reset Password</button>
          </form>
        </div>
      )
    } else if (this.state.verified === 'not verified') {
      return (<p>Invalid login link</p>)
    }
    else if (this.state.verified === 'loading') {
      return (
        <p>Verifying Link</p>
      )
    }
  }
}

export default NewPassword;