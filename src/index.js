import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ChordSheets from './components/ChordSheets';
ReactDOM.render(
  (
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/chordsheets" component={ChordSheets}/>
      </div>
    </Router>
  ),
  document.getElementById('root')
)
