import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <form action="http://localhost:8080/login" method="POST">
          <input name="username" type="text" value="Anton" />
          <input name="password" type="text" value="password" />
          <button type="submit">Login</button>
        </form>
        <form action="http://localhost:8080/createChordSheet" method="POST">
          <button type="submit">Chords</button>
        </form>
        <form action="http://localhost:8080/getChordSheets" method="GET">
          <button type="submit">Get Chords</button>
        </form>
      </div>
    )
  }
}

export default App;
