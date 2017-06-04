import React, { Component } from 'react'

class SaveButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>Save</button>
    )
  }
}

export default SaveButton
