import Point from './Point.js'

class CirclePoint extends Point {
  constructor(options) {
    super(options)
    this.circleSpacing = 20
    Object.assign(this, {
      x: 20 + this.circleSpacing * options.props.string,
      y: 40 + this.circleSpacing * options.props.fret
    })
  }
}

export default CirclePoint
