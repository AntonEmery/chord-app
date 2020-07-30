import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginForm from './components/forms/Login';
import Register from './components/forms/Register';
import Reset from './components/forms/Reset';
import NewPassword from './components/forms/NewPassword';
import ChordSheetsContainer from './components/ChordSheetsContainer';
import ChordSheet from './components/chord-sheet/ChordSheet';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/Nav';
import Home from './components/home-page/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Home />
          <Login />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={Reset} />
          <Route path="/new-password" component={NewPassword} />
          <Chordsheets />
          <Chordsheet />
        </Fragment>
      </Router>
    );
  }
}

export default App;


const Login = () => (
  <Fragment>
    <Route exact path="/" component={LoginForm} />
  </Fragment>
);

const Chordsheets = () => (
  <Fragment>
    <PrivateRoute path="/chordsheets" component={Header} />
    <PrivateRoute path="/chordsheets" component={ChordSheetsContainer} />
  </Fragment>
);

const Chordsheet = () => (
  <Fragment>
    <PrivateRoute path="/chordsheet/:id" component={Header} />
    <PrivateRoute path="/chordsheet/:id" component={ChordSheet} />
  </Fragment>
);

const Header = ({ history }) => {
  return (
    <header>
      <Nav history={history} />
    </header>
  );
};
