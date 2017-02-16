import React, { Component } from 'react'
import './App.css'

import Util from './Util.js'

import CirclePoint from './CirclePoint.js'
import OpenStringsPoint from './OpenStringsPoint.js'
import StringPoints from './StringPoints.js'
import FretPoints from './FretPoints.js'
import MutedStringsPoints from './MutedStringsPoints.js'

class App extends Component {

  constructor(props) {
    super(props)
    // Set numbers of frets and strings
    this.numOfFrets = 7
    this.numOfStrings = 6
    // Create arrays filled with values equal to the number of frets/strings
    this.numOfFretsAsArray = Util.fillArrayWithNumbers(this.numOfFrets)
    this.numOfStringsAsArray = Util.fillArrayWithNumbers(this.numOfStrings)
    // Set state
    this.state = {}
  }

  toggleVisibility(string, fret) {
    this.setState({[string]: fret})
  }

  componentDidUpdate() {
    console.log('component did update')
    console.log(this.state)
  }

  drawFrets() {
    return this.numOfFretsAsArray.slice(0).map((fret) => {
      return <Fret fret={fret} />
    })
  }

  drawDots() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      return this.numOfStringsAsArray.slice(0).map((fret) => {
        return <Circle isVisible={this.state[string] === fret}
          onClick={() => this.toggleVisibility(string, fret)}
          string={string} fret={fret}
        />
      })
    })
  }

  drawStrings() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      return <String string={string} />
    })
  }

  openStringSymbols() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      let fret = -1
      return <OpenStrings isVisible={this.state[string] === fret}
        string={string} onClick={() => this.toggleVisibility(string, fret)}
      />
    })
  }

  mutedStringSymbols() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      let fret = -2
      return <MutedStrings isVisible={this.state[string] === fret}
        string={string} onClick={() => this.toggleVisibility(string, fret)}
      />
    })
  }

  render() {
    return (
      <div className="App">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={140} height={160}>
        {/* strings */}
        {this.drawStrings()}
        {/* nut */}
        <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black"/>
        {/* frets */}
        {this.drawFrets()}
        {/* finger position circles */}
        {this.drawDots()}
        {/* open/muted strings */}
        {this.openStringSymbols()}
        {this.mutedStringSymbols()}
      </svg>
      </div>
    )
  }
}

class Circle extends Component {
  render() {
    let p1 = new CirclePoint(
      { props: { fret: this.props.fret, string: this.props.string } }
    )
    return (
      <circle
        cx={p1.x} cy={p1.y} r={8} onClick={this.props.onClick}
        className={this.props.isVisible ? 'visible' : 'invisible'} fill="black"
      />
    )
  }
}

class String extends Component {
  render() {
    let [p1, p2] = new StringPoints(
      { props: { string: this.props.string } }
    ).destructure()
    return (
      <line
        x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} strokeWidth={2} stroke="black"
      />
    )
  }
}

class Fret extends Component {
  render() {
    let [p1, p2] = new FretPoints(
      { props: { fret: this.props.fret } }
    ).destructure()
    return (
      <line
        x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} strokeWidth={2} stroke="black"
      />
    )
  }
}

class OpenStrings extends Component {

  render() {
    let p1 = new OpenStringsPoint(
      { props: { string: this.props.string } }
    )
    return (
      <circle
        cx={p1.x} cy={p1.y} r={8} fill="none" onClick={this.props.onClick}
        className={this.props.isVisible ? 'visible' : 'invisible'}
        stroke="black" strokeWidth={4}
      />
    )
  }
}

class MutedStrings extends Component {
  render() {
    let stringPath = new MutedStringsPoints(
      { props: { string: this.props.string } }
    ).stringPath()
    return (
      <path
        d={stringPath} strokeWidth={2}
        stroke="black" onClick={this.props.onClick}
        className={this.props.isVisible ? 'visible' : 'invisible'}
      />
    )
  }
}

export default App
