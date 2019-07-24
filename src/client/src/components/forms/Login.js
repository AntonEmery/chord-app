import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  // Do fetch instead of a form action
  handleLoginSubmit = (event) => {
    // submit form data
    event.preventDefault()
  }

  render() {
    return (
      <div className="card card__login">
        <h1>Log into Chord App</h1>
        or <Link to="/register">Create Account</Link>
        <form className="login" action="http://localhost:8080/login" method="POST">
          <div className="card__input-item">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit" onClick={this.handleLoginSubmit} className="button button--grey button--med">Log In</button>
        </form>
        <Link to="/reset">Forgot Password?</Link>
      </div>
    )
  }
}

export default Login;
