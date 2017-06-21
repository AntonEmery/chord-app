import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <button onClick={this.props.handleSave} className="pure-button">Save Sheet</button>
        <button onClick={this.props.addChord} className="pure-button">Add Chord</button>
        <button className="pure-button">View All Sheets</button>
      </div>
    )
  }
}

export default ToolBar
