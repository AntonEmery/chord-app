import React, { Component } from 'react'

import Util from '../../Util.js'
import ChordTemplate from '../ChordTemplate'
import ToolBar from './ToolBar'
import Chordsheets from '../../seed-data.js'

class ChordSheet extends Component {

  constructor(props) {
    super(props)
    // Set numbers of frets and strings
    this.numOfFrets = 7
    this.numOfStrings = 6
    // Create arrays filled with values equal to the number of frets/strings
    this.numOfFretsAsArray = Util.fillArrayWithNumbers(this.numOfFrets)
    this.numOfStringsAsArray = Util.fillArrayWithNumbers(this.numOfStrings)
    // Set state
    this.state = {
      chords: [
        { 0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, name: 'Chord Name' },
      ]
    }
  }

  toggleVisibility = (id, string, fret) => {
    // id is the id of the specific chord that you are working on
    // string is the string of the chords (0 - 5)
    // fret is the fret of the chord (-1 - 5)

    var currentChords = this.state.chords.slice();
    //set value of current chord and string to the fret you are on
    currentChords[id][string] = fret;
    this.setState({
      chords: currentChords
    })
  }

  componentDidMount() {
    this.setState(
      (prevState, props) => {
        // Copy current chords in to temp var
        let chords = prevState.chords.slice();

        // Create a new chord state by iterating over seed data refrencing the
        // current `props.match.params.id` and making a new ChordState
        Chordsheets[props.match.params.id]
          .chords.forEach((chord) => chords.push(chord))
        // Return the new chords state
        return { chords: chords }
      })
  }

  addChord = () => {
    this.setState(
      (prevState, props) => {
        const blankChord = { 0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, name: 'Chord Name' };
        let newChordState = prevState.chords.slice();
        newChordState.push(blankChord);
        return { chords: newChordState }
      }
    )
  }

  updateChordName = (name, id) => {
    this.setState(
      (prevState, props) => {
        let newChordState = prevState.chords.slice();
        newChordState[id].name = name;
        return { chords: newChordState }
      }
    )
  }

  deleteChord = (id) => {
    console.log(id);
    this.setState(
      (prevState, props) => {
        let newChordState = this.state.chords.slice();
        newChordState.splice(id, 1);
        return { chords: newChordState }
      }
    )
  }

  handleSave = () => {
    const { id } = this.props.match.params;
    // const jsonArray = this.state.chords.map((chord) => {
    //   return JSON.stringify(chord)
    // })
    console.log(this.state.chords)
    fetch(`http://localhost:8080/chordSheets/${id}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(this.state.chords),
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    // }, { responseType: 'json' })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div className="chord-sheet-wrapper">
        <ToolBar
          handleSave={this.handleSave}
          addChord={this.addChord}
        />
        <div className="chords__container">
          {this.state.chords.map((chord, index) => {
            return (
              <ChordTemplate
                updateChordName={this.updateChordName}
                key={index}
                id={index}
                state={chord}
                toggleVisibility={this.toggleVisibility}
                deleteChord={this.deleteChord}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ChordSheet
