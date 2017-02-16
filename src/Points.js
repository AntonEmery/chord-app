import Point from './Point.js'

class Points {
  constructor(options) {
    if (options === undefined) options = {}
  }
  destructure() {
    return [
      new Point({x: this.x1, y: this.y1}),
      new Point({x: this.x2, y: this.y2})
    ]
  }
}

export default Points
