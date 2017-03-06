class Util {
  // `fillArrayWithNumbers` info: http://www.2ality.com
  // /2013/11/initializing-arrays.html

  // `.slice(0)` info: http://cryto.net/~joepie91/blog
  // /2015/05/04/functional-programming-in-javascript-map-filter-reduce/

  static fillArrayWithNumbers(n) {
    return Array.apply(null, Array(n)).map((x, i) => i)
  }
}

export default Util
