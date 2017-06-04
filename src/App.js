import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import Util from './Util.js'

import GuitarCircle from './components/GuitarCircle'
import GuitarString from './components/GuitarString'
import GuitarFret from './components/GuitarFret'

import OpenStrings from './components/OpenStrings'
import MutedStrings from './components/MutedStrings'

import SaveButton from './components/SaveButton'

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

  handleClick = () => {
    //this.state = {0: -1..5, 1: -1..6, ...}
    //this.state -> [[-1..5, -1..5, ...]
    var chord = []

    for (let i = 0; i < 6; i++) {
      if (this.state[i] === undefined) {
        chord.push(-1)
      } else {
        chord.push(this.state[i])
      }
    }

    console.log(chord)

    axios.post('http://192.168.100.22:3000/saveChordSheet/', {
        name: 'Untitled',
        chords: [chord],
        user_id: 1
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <SaveButton handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
