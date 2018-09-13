import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AllChordSheets from './components/AllChordSheets'
import ChordSheet from './components/chord-sheet/ChordSheet'
import App from './App'
import Register from './components/forms/Register'

const Header = () => {
  return <header>
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
}

// routes where we want the header component
const routes = [
  {
    path: '/chordsheets',
    menu: () => Header(),
    exact: true
  },
  {
    path: '/chordsheet/:id',
    menu: () => Header(),
    exact: true
  }
]


const Routes = () => (
<Router>
  <div>
    {/* map over routes with header component. these will get rendered along with the regular matching routes */}
    {routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      component={route.menu}
      exact={route.exact}
    />
    ))
  }
    <Route exact path="/" component={App}/>
    <Route path="/register" component={Register}/>
    <Route path="/chordsheet/:id" component={ChordSheet}/>
    <Route path="/chordsheets" component={AllChordSheets}/>
  </div>
</Router>
)

export default Routes;
