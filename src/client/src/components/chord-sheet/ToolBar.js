import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Toolbar extends Component {
  render() {
    return (
      <div className="menu-bar">
        {this.props.mode === 'PRIVATE' ? <button onClick={this.props.saveChordSheet}>Save Sheet</button> : ''}
        <button onClick={this.props.addChord}>Add Chord</button>
        { this.props.mode === 'PRIVATE'
        ? <Link to="/chordsheets">
            <button>View All Sheets</button>
          </Link>
        : '' }
      </div>
    )
  }
}

Toolbar.defaulProps = { mode: 'PRIVATE'} // PRIVATE, DEMO

export default Toolbar
