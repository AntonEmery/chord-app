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
import PrivateRoute from './components/PrivateRoute';
import auth from './Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Login />
          <PrivateRoute path="/register" component={Register} />
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
    <PrivateRoute path="/chordsheets" component={Header} />
    <PrivateRoute path="/chordsheets" component={AllChordSheets} />
  </Fragment>
);

const Chordsheet = () => (
  <Fragment>
    <Route path="/chordsheet/:id" component={Header} />
    <Route path="/chordsheet/:id" component={ChordSheet} />
  </Fragment>
);

const Header = ({ history }) => {
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
          <li
            onClick={() => {
              auth.logout(() => {
                history.push('/');
              });
            }}
          >
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};
