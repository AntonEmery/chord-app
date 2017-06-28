import React, { Component } from 'react'
import axios from 'axios'

import Util from '../../Util.js'
import AddChord from '../AddChord'
import SaveButton from '../SaveButton'
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
        {0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined},
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
    console.log(Chordsheets);
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  addChord = () => {
    const blankChord = {0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined};
    let newChordState = this.state.chords.slice();
    newChordState.push(blankChord);
    this.setState({
      chords: newChordState
    })
  }

  deleteChord = (id) => {
    console.log(id);
    let newChordState = this.state.chords.slice();
    newChordState.splice(id, 1);
    this.setState({
      chords: newChordState
    })
  }

  handleSave = () => {
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

    axios.post('/saveChordSheet', {
        name: 'Untitled',
        chords: `[[${chord}]]`,
        user_id: 1
      }, {responseType: 'json'})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="chord-sheet-wrapper">
        <ToolBar
          handleSave={this.handleSave}
          addChord={this.addChord}
        />
        <div className="App pure-g">
          {this.state.chords.map((chord, index) => {
            return (<ChordTemplate key={index} id={index} state={chord} toggleVisibility={this.toggleVisibility} deleteChord={this.deleteChord}/>)
          })}
        </div>
      </div>
    )
  }
}

export default ChordSheet
