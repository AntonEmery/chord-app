import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Auth';
import { PromiseProvider } from 'mongoose';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="card card__login">
        <h1>Log into Chord App</h1>
        or <Link to="/register">Create Account</Link>
        {/* ToDo submit button needs to send email and p/w to via post request,  */}
        <form className="login" action="http://localhost:8080/login" method="POST">
          <div className="card__input-item">
            <label htmlFor="email">Email</label>
            <input name="email" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Email" />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <button type="submit" className="button button--grey button--med" onClick={() => {
            auth.login(() => {
              this.props.history.push('/register');
            });
          }}
          >Log In</button>
        </form>
      </div>
    )

    // return (
    //   <div>
    //     <form action="http://localhost:8080/login" method="POST">
    //       <label htmlFor="email">Email</label>
    //       <input name="email" type="text" />
    //       <label htmlFor="password">Password</label>
    //       <input name="password" type="text" />
    //       <button type="submit">Login</button>
    //     </form>
    //     <form action="http://localhost:8080/createChordSheet" method="POST">
    //       <button type="submit">Chords</button>
    //     </form>
    //     <form action="http://localhost:8080/getChordSheets" method="GET">
    //       <button type="submit">Get Chords</button>
    //     </form>
    //     <button
    //       onClick={() => {
    //         auth.login(() => {
    //           this.props.history.push('/register');
    //         });
    //       }}
    //     >
    //       Login
    //     </button>
    //   </div>
    // );
  }
}

export default Login;
