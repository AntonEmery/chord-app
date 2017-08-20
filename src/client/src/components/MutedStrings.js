import React, { Component } from 'react'

class MutedStrings extends Component {
  constructor(props) {
    super(props)
    Object.assign(this, {x1: 12 + 20 * props.string, y1: 18})
    Object.assign(this, {x2: 28 + 20 * props.string, y2: 2})
  }
  stringPath() {
    return `
      M${this.x1} ${this.y1} L${this.x2} ${this.y2} M${this.x2} ${this.y1} L${this.x1} ${this.y2}
    `
  }
  render() {
    return (
      <path
        d={this.stringPath()} strokeWidth={2}
        stroke="black" onClick={this.props.onClick}
        className={this.props.isVisible ? 'visible' : 'invisible'}
      />
    )
  }
}

export default MutedStrings
