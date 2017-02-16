import React, { Component } from 'react'

class GuitarString extends Component {
  constructor(props) {
    super(props)
    this.stringSpacing = 20
    Object.assign(this, {
      x1: 20 + this.stringSpacing * props.string, y1: 20
    })
    Object.assign(this, {
      x2: 20 + this.stringSpacing * props.string, y2: 140
    })
  }
  render() {
    return (
      <line
        x1={this.x1} y1={this.y1} x2={this.x2} y2={this.y2} strokeWidth={2} stroke="black"
      />
    )
  }
}

export default GuitarString
