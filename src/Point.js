class Point {
  constructor(options) {
    if (options === undefined) options = {}
    this.x = options.x
    this.y = options.y
  }
}

export default Point
