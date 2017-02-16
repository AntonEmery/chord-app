import React, { Component } from 'react'
import './App.css'

import Util from './Util.js'

import GuitarCircle from './components/GuitarCircle.js'
import GuitarString from './components/GuitarString.js'
import GuitarFret from './components/GuitarFret.js'

import OpenStrings from './components/OpenStrings.js'
import MutedStrings from './components/MutedStrings.js'

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
      return <GuitarFret key={fret} fret={fret} />
    })
  }

  drawDots() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      return this.numOfStringsAsArray.slice(0).map((fret) => {
        return <GuitarCircle isVisible={this.state[string] === fret}
          onClick={() => this.toggleVisibility(string, fret)}
          string={string} fret={fret}
        />
      })
    })
  }

  drawStrings() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      return <GuitarString key={string} string={string} />
    })
  }

  openStringSymbols() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      let fret = -1
      return <OpenStrings key={string} isVisible={this.state[string] === fret}
        string={string} onClick={() => this.toggleVisibility(string, fret)}
      />
    })
  }

  mutedStringSymbols() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      let fret = -2
      return <MutedStrings key={string} isVisible={this.state[string] === fret}
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

export default App
