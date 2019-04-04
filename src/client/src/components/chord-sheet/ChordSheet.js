import React, { Component } from 'react'

import Util from '../../Util.js'
import ChordTemplate from '../ChordTemplate'
import ToolBar from './ToolBar'
// import Chordsheets from '../../seed-data.js'
import ChordSheetTitle from '../toggle-input'

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
    const { id } = this.props.match.params;
    fetch(`http://localhost:8080/getChordSheet/`, {
      method: 'GET',
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

  updateSheetTitle = (name) => {
    this.setState({ title: name })
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
    console.log(this.state)
    fetch(`http://localhost:8080/saveChordSheet/${id}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
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
        <span>Chord Sheet Title</span>
        <ChordSheetTitle
          setName={this.updateSheetTitle}
          className="chords__title"
          name={this.state.title}
          id={this.props.id}
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
