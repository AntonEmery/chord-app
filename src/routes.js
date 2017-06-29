import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AllChordSheets from './components/AllChordSheets'
import ChordSheet from './components/chord-sheet/ChordSheet'
import App from './App'

const Links = () => (
  <nav>
    <Link to="/">Header</Link>
  </nav>
)


const Routes = () => (
<Router>
  <div>
    {/* Links component is rendered on every route */}
    {/* <Links /> */}
    <Route exact path="/" component={App}/>
    <Route path="/chordsheet/:id" component={ChordSheet}/>
    <Route path="/chordsheets" component={AllChordSheets}/>
  </div>
</Router>
)

export default Routes;
