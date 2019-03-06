import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <button onClick={this.props.handleSave}>Save Sheet</button>
        <button onClick={this.props.addChord}>Add Chord</button>
        <button>View All Sheets</button>
      </div>
    )
  }
}

export default ToolBar
