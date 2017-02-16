import Point from './Point.js'

class OpenStringsPoint extends Point {
  constructor(options) {
    super(options)
    Object.assign(this, {x: 20 + 20 * options.props.string, y: 10})
  }
}

export default OpenStringsPoint
