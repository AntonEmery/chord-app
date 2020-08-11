import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import Reset from './Reset';
import ToggleContent from '../ToggleContent';
import Modal from '../../modals/Modal';
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
      <div className="card card__form">
        <h1 className="card__heading">Log into Chord App</h1>
        or <ToggleContent
              toggle={showFn => <p onClick={showFn}>Create Account</p>}
              content={hideFn => (
                <>
                  <Modal hide={hideFn} width='365px'>
                    <Register />
                  </Modal>
                </>
              )}
            />

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
        <ToggleContent
          toggle={showFn => <p onClick={showFn}>Forgot Password?</p>}
          content={hideFn => (
            <>
              <Modal hide={hideFn} width='365px'>
                <Reset />
              </Modal>
            </>
          )}
        />
      </div>
    )
  }
}

export default Login;
