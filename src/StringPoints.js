import Points from './Points.js'

class StringPoints extends Points {
  constructor(options) {
    super(options)
    this.stringSpacing = 20
    Object.assign(this, {
      x1: 20 + this.stringSpacing * options.props.string, y1: 20
    })
    Object.assign(this, {
      x2: 20 + this.stringSpacing * options.props.string, y2: 140
    })
  }
}

export default StringPoints
