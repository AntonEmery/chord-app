import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <div>
          <button onClick={this.props.handleSave} className="pure-button">Save Sheet</button>
        </div>
        <div>
          <button onClick={this.props.addChord} className="pure-button">Add Chord</button>
        </div>
        <div>
          <button className="pure-button">View All Sheets</button>
        </div>
      </div>
    )
  }
}

export default ToolBar
