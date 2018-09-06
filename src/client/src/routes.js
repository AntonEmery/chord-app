import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AllChordSheets from './components/AllChordSheets'
import ChordSheet from './components/chord-sheet/ChordSheet'
import App from './App'
import Register from './components/forms/Register'

const Header = () => (
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
)


const Routes = () => (
<Router>
  <div>
    { <Header /> }
    <Route exact path="/" component={App}/>
    <Route path="/register" component={Register}/>
    <Route path="/chordsheet/:id" component={ChordSheet}/>
    <Route path="/chordsheets" component={AllChordSheets}/>
  </div>
</Router>
)

export default Routes;
