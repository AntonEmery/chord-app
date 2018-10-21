import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import LoginForm from './components/Login';
import Register from './components/forms/Register';
import AllChordSheets from './components/AllChordSheets';
import ChordSheet from './components/chord-sheet/ChordSheet';

class App extends Component {
  isLoggedIn = () => {
    fetch(`http://localhost:8080/isLoggedIn`, {
      credentials: 'include',
      mode: 'cors'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status === 'logged in') {
          return true;
        }
      });
  };

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  render() {
    return (
      <Router>
        <Fragment>
          <Login />
          <Route path="/register" component={Register} />
          <Chordsheets />
          <Chordsheet />
        </Fragment>
      </Router>
    );
  }
}

export default App;

const Login = () => (
  <div>
    <Route exact path="/" component={LoginForm} />
  </div>
);

const Chordsheets = () => (
  <Fragment>
    <Route path="/chordsheets" component={Header} />
    <Route path="/chordsheets" component={AllChordSheets} />
  </Fragment>
);

const Chordsheet = () => (
  <Fragment>
    <Route path="/chordsheet/:id" component={Header} />
    <Route path="/chordsheet/:id" component={ChordSheet} />
  </Fragment>
);

const Header = () => {
  return (
    <header>
      <nav className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chordsheets/0">My Chordsheets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
