import React, { Component } from 'react'

import GuitarCircle from './GuitarCircle'
import GuitarString from './GuitarString'
import GuitarFret from './GuitarFret'
import OpenStrings from './OpenStrings'
import MutedStrings from './MutedStrings'

import ToggleInput from './toggle-input'

import Util from '../Util.js'

class ChordTemplate extends Component {

  constructor(props) {
    super(props)
    this.id = this.props.id
    // Set numbers of frets and strings
    this.numOfFrets = 7
    this.numOfStrings = 6
    // Create arrays filled with values equal to the number of frets/strings
    this.numOfFretsAsArray = Util.fillArrayWithNumbers(this.numOfFrets)
    this.numOfStringsAsArray = Util.fillArrayWithNumbers(this.numOfStrings)
  }

  chordName = (name, id) => {
    this.props.updateChordName(name, id);
  }

  drawStrings() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      return <GuitarString key={string} string={string} />
    })
  }

  drawFrets() {
    return this.numOfFretsAsArray.slice(0).map((fret) => {
      return <GuitarFret key={fret} fret={fret} />
    })
  }

  drawDots() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      return this.numOfStringsAsArray.slice(0).map((fret) => {
        return <GuitarCircle isVisible={this.props.state[string] === fret}
          onClick={this.props.toggleVisibility.bind(null, this.id, string, fret)}
          string={string} fret={fret}
        />
      })
    })
  }

  openStringSymbols() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      let fret = -1
      return <OpenStrings key={string} isVisible={this.props.state[string] === fret}
        string={string} onClick={this.props.toggleVisibility.bind(null, this.id, string, fret)}
      />
    })
  }

  mutedStringSymbols() {
    return this.numOfStringsAsArray.slice(0).map((string) => {
      let fret = -2
      return <MutedStrings key={string} isVisible={this.props.state[string] === fret}
        string={string} onClick={this.props.toggleVisibility.bind(null, this.id, string, fret)}
      />
    })
  }

  render() {
    return (
      <div className="chords__template">
        <ToggleInput
          key={this.props.id}
          name={this.props.state.name}
          setName={this.chordName}
          inputName='chords__input-title'
          id={this.props.id}
        />
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={140} height={160}>
          {/* strings */}
          {this.drawStrings()}
          {/* nut */}
          <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black" />
          {/* frets */}
          {this.drawFrets()}
          {/* finger position circles */}
          {this.drawDots()}
          {/* open/muted strings */}
          {this.openStringSymbols()}
          {this.mutedStringSymbols()}
        </svg>
        <button className="button button--x-small button-delete" onClick={this.props.deleteChord.bind(null, this.id)}>Delete</button>
      </div>
    )
  }
}

export default ChordTemplate;
