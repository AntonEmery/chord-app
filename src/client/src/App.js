import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import LoginForm from './components/Login';
import AllChordSheets from './components/AllChordSheets';
import ChordSheet from './components/chord-sheet/ChordSheet';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Login />
          <Chordsheets />
          <Chordsheet />
        </div>
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
  <div>
    <Route path="/chordsheets" component={Header} />
    <Route path="/chordsheets" component={AllChordSheets} />
  </div>
);

const Chordsheet = () => (
  <div>
    <Route path="/chordsheet/:id" component={Header} />
    <Route path="/chordsheet/:id" component={ChordSheet} />
  </div>
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
