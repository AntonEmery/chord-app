import React, { Component } from 'react'

import Util from '../../Util.js'
import ChordTemplate from '../ChordTemplate'
import Toolbar from './ToolBar'
// import Chordsheets from '../../seed-data.js'
import ToggleInput from '../toggle-input'
const axios = require('axios');

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
      title: 'untitled',
      chords: [
        { 0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, name: 'Chord Name' },
      ]
    }
  }

  toggleVisibility = (id, string, fret) => {
    // id is the id of the specific chord that you are working on
    // string is the string of the chords (0 - 5)
    // fret is the fret of the chord (-1 - 5)

    let currentChords = this.state.chords.slice();
    //set value of current chord and string to the fret you are on
    currentChords[id][string] = fret;
    this.setState({
      chords: currentChords
    })
  }

  componentDidMount() {
    if (this.props.mode === 'PRIVATE') {
      const { id } = this.props.match.params;
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}getChordSheet/${id}`,
        withCredentials: true
      })
        .then(result => {
          const chords = result.data.chords.map(chord => chord[0])
          this.setState({ title: result.data.title, chords })
        })
      }
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

  updateSheetTitle = (name) => {
    this.setState({ title: name })
  }

  deleteChord = (id) => {
    this.setState(
      (prevState, props) => {
        let newChordState = this.state.chords.slice();
        newChordState.splice(id, 1);
        return { chords: newChordState }
      }
    )
  }

  saveChordSheet = () => {
    if (this.props.mode === 'PRIVATE') {
      const { id } = this.props.match.params;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}saveChordSheet/${id}`,
        withCredentials: true,
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: { data: this.state }
      })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <div className="chord-sheet-wrapper">
        <Toolbar
          mode={this.props.mode}
          saveChordSheet={this.saveChordSheet}
          addChord={this.addChord}
        />
        <div className="chord-sheet__container">
          <div className="chord-sheet__title-container">
            <ToggleInput
              setName={this.updateSheetTitle}
              className="chords__title"
              name={this.state.title}
              inputName='chord-sheet__title'
              id={this.props.id}
            />
          </div>
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
      </div>
    )
  }
}

ChordSheet.defaultProps = { mode: 'PRIVATE' } // DEMO, PRIVATE

export default ChordSheet
