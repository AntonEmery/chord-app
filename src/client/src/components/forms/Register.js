import React, { Component } from 'react';
const axios = require('axios');


class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/register`, {
      name: this.state.name,
      email: this.state.email,
      passoword: this.state.password,
      confirmedPassword: this.state.confirmedPassword,
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const formIncomplete = Object.values(this.state).some((key) => {
      return key.length === 0;
    })
    console.log(formIncomplete)
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const formIncomplete = Object.values(this.state).some((key) => {
      return key.length === 0;
    })
    return (
      <div className="card card__register">
        <h1>Create an Account</h1>
        <form className="register">
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
          <button type="submit" onClick={this.handleSubmit} disabled={formIncomplete} className="button button--grey button--med">Create Account</button>
        </form>
      </div>
    );
  }
}

export default Register;