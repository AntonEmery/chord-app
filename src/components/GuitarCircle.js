import React, { Component } from 'react'

class GuitarCircle extends Component {
  constructor(props) {
    super(props)
    this.circleSpacing = 20
    Object.assign(this, {
      x: 20 + this.circleSpacing * props.string,
      y: 40 + this.circleSpacing * props.fret
    })
  }
  render() {
    return (
      <circle
        cx={this.x} cy={this.y} r={8} onClick={this.props.onClick}
        className={this.props.isVisible ? 'visible' : 'invisible'} fill="black"
      />
    )
  }
}

export default GuitarCircle
