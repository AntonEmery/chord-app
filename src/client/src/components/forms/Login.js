import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');


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

  handleLoginSubmit = (event) => {
    event.preventDefault()
    const url = `${process.env.REACT_APP_API_URL}login/`;
    axios({
      method: 'post',
      url,
      data: { email: this.state.email, password: this.state.password },
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      referrer: 'no-referrer',
    })
      .then(({ data }) => {
        console.log(data)
        if (data.response === 'success') {
          this.props.history.push('/chordsheets');
        }
      })
      .catch(error => this.setState({ error: error.response.data.response }));
  }

  render() {
    return (
      <div className="card card__form card__form--modal">
        <h1 className="card__heading">Log into Chord App</h1>
        or <Link to="/register">Create Account</Link>

        <form className="form__login">
          <div className="card__input-item">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </div>
          {this.state.error ? <p>{this.state.error}</p> : ''}
          <button type="submit" onClick={this.handleLoginSubmit} className="button button--grey button--med" disabled={!this.state.email || !this.state.password}>Log In</button>
        </form>
        <Link to="/reset-password">Forgot Password?</Link>
      </div>
    )
  }
}

export default Login;
