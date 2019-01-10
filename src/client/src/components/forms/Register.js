import React, { Component } from 'react';

class Register extends Component {
  state = {
    isEnabled: false,
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  };

  // use the same function to set input contents to state on all inputs
  // setInputToState = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // checkPasswords = (e) => {
  //   this.setState({
  //     confirmedPassword: e.target.value
  //   })
  // }

  render() {
    return (
      <form action="http://localhost:8080/register" method="POST">
        <label htmlFor="name">Username</label>
        <input name="name" type="text" value={this.state.username} onChange={this.setInputToState} />
        <label htmlFor="email">Email</label>
        <input name="email" type="text" value={this.state.email} onChange={this.setInputToState} />
        <label htmlFor="password">Password</label>
        <input name="password" onChange={this.setInputToState} type="text" value={this.state.password} />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input name="confirmedPassword" onChange={this.setInputToState} type="text" value={this.state.confirmedPassword} />
        <button type="submit">Create Account</button>
      </form>
    );
  }
}

export default Register;