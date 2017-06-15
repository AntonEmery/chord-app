import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ChordSheets from './components/ChordSheets';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
  </nav>
)

ReactDOM.render(
  (
    <Router>
      <div>
        {/* Links component is rendered on every route */}
        <Links />
        <Route exact path="/" component={App}/>
        <Route path="/chordsheets" component={ChordSheets}/>
      </div>
    </Router>
  ),
  document.getElementById('root')
)
