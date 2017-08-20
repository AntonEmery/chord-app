import React, { Component } from 'react'

class OpenStrings extends Component {
  constructor(props) {
    super(props)
    Object.assign(this, {x: 20 + 20 * props.string, y: 10})
  }
  render() {
    return (
      <circle
        cx={this.x} cy={this.y} r={8} fill="none" onClick={this.props.onClick}
        className={this.props.isVisible ? 'visible' : 'invisible'}
        stroke="black" strokeWidth={4}
      />
    )
  }
}

export default OpenStrings
