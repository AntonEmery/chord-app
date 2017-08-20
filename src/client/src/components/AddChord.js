import React, { Component } from 'react'

class AddChord extends Component {

  render() {
    return (
      <button onClick={this.props.addChord}>Add Chord</button>
    )
  }
}

export default AddChord;
