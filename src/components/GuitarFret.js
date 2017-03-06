import React, { Component } from 'react'

class GuitarFret extends Component {
  constructor(props) {
    super(props)
    this.fretSpacing = 20
    Object.assign(this, {x1: 19, y1: 20 + this.fretSpacing * props.fret})
    Object.assign(this, {x2: 121, y2: 20 + this.fretSpacing * props.fret})
  }
  render() {
    return (
      <line
        x1={this.x1} y1={this.y1} x2={this.x2} y2={this.y2}
        strokeWidth={2} stroke="black"
      />
    )
  }
}

export default GuitarFret
