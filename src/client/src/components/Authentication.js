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
}

export default Authentication;