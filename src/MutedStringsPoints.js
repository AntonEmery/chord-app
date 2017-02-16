import Points from './Points.js'

class MutedStringsPoints extends Points {
  constructor(options) {
    super(options)
    Object.assign(this, {x1: 12 + 20 * options.props.string, y1: 18})
    Object.assign(this, {x2: 28 + 20 * options.props.string, y2: 2})
  }
  stringPath() {
    return `
      M${this.x1} ${this.y1} L${this.x2} ${this.y2} M${this.x2} ${this.y1} L${this.x1} ${this.y2}
    `
  }
}

export default MutedStringsPoints
