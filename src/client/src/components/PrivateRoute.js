import React, { Component, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Auth'

// const PrivateRoute ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={async props => {
//       if (await Auth.getCookie()) {
//         return <Component {...props} />;
//       } else {
//         return <Redirect to="/" />;
//       }
//     }}
//   />
// );

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      authenticated: false,
    }
    this.path = this.props.path;
    this.component = this.props.component
  }

  async componentDidMount() {
    if (await Auth.getCookie()) {
      this.setState({ authenticated: true })
    }
  }

  render() {
    const Component = this.component;
    if (this.state.authenticated) {
      console.log(this.component);
      console.log(this.props);
      return (
        <Route path={this.props.path}
          render={props => {
            return <Component {...props} />;
          }}
        />
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
export default PrivateRoute;
