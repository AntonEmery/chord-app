import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../Auth';


class Nav extends Component {

  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link className="nav__item" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav__item" to="/chordsheets/0">My Chordsheets</Link>
          </li>
          <li className="nav__item"
            onClick={() => {
              auth.logout(() => {
                this.props.history.push('/');
              });
            }}
          >
            Logout
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;