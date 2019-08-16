import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ToolBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <button onClick={this.props.saveChordSheet}>Save Sheet</button>
        <button onClick={this.props.addChord}>Add Chord</button>
        <Link to="/chordsheets">
          <button>View All Sheets</button>
        </Link>
      </div>
    )
  }
}

export default ToolBar
