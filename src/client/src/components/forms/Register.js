import React, { Component } from 'react';

class Register extends Component {


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
      <div className="card card__register">
        <h1>Create an Account</h1>
        <form className="register">
          <div className="card__input-item">
            <label htmlFor="username">Username</label>
            <input name="username " type="text" placeholder="Username" />
          </div>
          <div className="card__input-item">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="card__input-item">
            <label htmlFor="confirn-password">Confirm Password</label>
            <input name="confirm-password" type="password" placeholder="Confirm Password" />
          </div>
          <button className="button button--grey button--med">Create Account</button>
        </form>
      </div>
      // <form action="http://localhost:8080/register" method="POST">
      //   <label htmlFor="name">Username</label>
      //   <input name="name" type="text" value={this.state.username} onChange={this.setInputToState} />
      //   <label htmlFor="email">Email</label>
      //   <input name="email" type="text" value={this.state.email} onChange={this.setInputToState} />
      //   <label htmlFor="password">Password</label>
      //   <input name="password" onChange={this.setInputToState} type="text" value={this.state.password} />
      //   <label htmlFor="confirm-password">Confirm Password</label>
      //   <input name="confirmedPassword" onChange={this.setInputToState} type="text" value={this.state.confirmedPassword} />
      //   <button type="submit">Create Account</button>
      // </form>
    );
  }
}

export default Register;