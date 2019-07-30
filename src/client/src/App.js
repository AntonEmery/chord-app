import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginForm from './components/forms/Login';
import Register from './components/forms/Register';
import Reset from './components/forms/Reset';
import NewPassword from './components/forms/NewPassword';
import AllChordSheets from './components/AllChordSheets';
import ChordSheet from './components/chord-sheet/ChordSheet';
import Nav from './components/Nav';
import Auth from './Auth'

class App extends Component {
  state = { loggedIn: false }
  // async componentDidMount() {
  //   if (await Auth.getCookie()) {
  //     this.setState({ loggedIn: true })
  //   }
  // }
  render() {
    return (
      <Router>
        <Fragment>
          <Login />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={Reset} />
          <Route path="/new-password" component={NewPassword} />
          <Route path="/chordsheets" render={Chordsheets} />
          <Route path="/chordsheet/:id" render={protectedRoute(Chordsheet, this.state)} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

const protectedRoute = (WrappedComponent, state) => (props) => {
  return state.loggedIn ? <WrappedComponent {...props} /> : <LoginForm />
}

const Login = () => (
  <Fragment>
    <Route exact path="/" component={LoginForm} />
  </Fragment>
);

const Chordsheets = (props) => {
  return (<Fragment>
    <Header {...props} />
    <AllChordSheets />
  </Fragment>
  )
};

const Chordsheet = (props) => {
  return (<Fragment>
    <Header {...props} />
    <ChordSheet {...props} />
  </Fragment>
  )
};

const Header = ({ history }) => {
  return (
    <header>
      <Nav history={history} />
    </header>
  );
};
