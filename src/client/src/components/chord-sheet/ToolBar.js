import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div className="menu-bar pure-g">
        <div className="pure-u-1-6">
          <button onClick={this.props.handleSave} className="pure-button">Save Sheet</button>
        </div>
        <div className="pure-u-1-6">
          <button onClick={this.props.addChord} className="pure-button">Add Chord</button>
        </div>
        <div className="pure-u-1-6">
          <button className="pure-button">View All Sheets</button>
        </div>
      </div>
    )
  }
}

export default ToolBar
