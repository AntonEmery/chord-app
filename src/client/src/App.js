import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <form action="http://localhost:8080/login" method="POST">
        <input name="username" type="text"/>
        <input name="password" type="text"/>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default App;
