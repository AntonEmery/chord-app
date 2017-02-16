import Points from './Points.js'

class FretPoints extends Points {
  constructor(options) {
    super(options)
    this.fretSpacing = 20
    Object.assign(this, {x1: 19, y1: 20 + this.fretSpacing * options.props.fret})
    Object.assign(this, {x2: 121, y2: 20 + this.fretSpacing * options.props.fret})
  }
}

export default FretPoints
