import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (Auth.getCookie()) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    }}
  />
);

export default PrivateRoute;