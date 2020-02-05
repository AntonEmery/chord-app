import React, { Component } from 'react';

class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
    }

    const handleSubmit = () => {
      const url = 'http://localhost:8080/register'

    }

    const handleChange = ({ name, value }) => {
      this.setState({ state[name]: value })
    }

    render() {
      return (
        <div className="card card__register">
          <h1>Create an Account</h1>
          <form method="POST" className="register">
            <div className="card__input-item">
              <label htmlFor="name">Name</label>
              <input name="name" onChange={this.handleChange} type="text" placeholder="Username" />
            </div>
            <div className="card__input-item">
              <label htmlFor="email">Email</label>
              <input name="email" onChange={this.handleChange} type="text" placeholder="Email" />
            </div>
            <div className="card__input-item">
              <label htmlFor="password">Password</label>
              <input name="password" onChange={this.handleChange} type="password" placeholder="Password" />
            </div>
            <div className="card__input-item">
              <label htmlFor="confirmedPassword">Confirm Password</label>
              <input name="confirmedPassword" onChange={this.handleChange} type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit" onClick={this.handleSubmit} className="button button--grey button--med">Create Account</button>
          </form>
        </div>
      );
    }
  }

  export default Register;