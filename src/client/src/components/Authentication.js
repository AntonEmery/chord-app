import React, { Component } from 'react';
import LoginForm from './forms/Login';
import Auth from '../Auth'


async function Authentication(WrappedComponent) {
  if (await Auth.getCookie()) {
    return (
      <WrappedComponent />
    )
  } else {
    return <LoginForm />
  }
  /*
  return class extends Component {
    constructor(component) {
      super(component);
      this.component = component
    }
    state = {
      authenticated: false,
    }

    async componentDidMount() {
      if (await Auth.getCookie()) {
        this.setState({ authenticated: true })
      }
    }

    render() {
      const Component = this.component
      if (this.state.authenticated) {
        return (
          <WrappedComponent />
        )
      } else {
        return <LoginForm />
      }
    }
  }
  */
}

export default Authentication;