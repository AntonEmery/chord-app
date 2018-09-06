import React, { Component } from 'react';

class Register extends Component {
  state = {
    isEnabled: false,
    password: '',
    confirmedPassword: ''
  };

  storePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  checkPasswords = (e) => {
    this.setState({
      confirmedPassword: e.target.value
    })
  }

  render() {
    return (
      <form action="http://localhost:8080/register" method="POST">
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" onChange={this.storePassword} type="text" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input name="confirm-password" onChange={this.checkPasswords} type="text" />
        <button disabled={!this.state.isEnabled} type="submit">Create Account</button>
      </form>
    );
  }
}

export default Register;