import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import Util from './Util.js'



import SaveButton from './components/SaveButton'
import ChordTemplate from './components/ChordTemplate'

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
    this.state = {
      chords: [
        {0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, 6: undefined}
      ]
    }
  }

  toggleVisibility(id, string, fret) {
    this.setState({
      chords[id]: [string]: fret
    })
  }

  componentDidUpdate() {
    console.log('component did update')
    console.log(this.state)
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
      <div className="App">
        {this.state.chords.map((chord, index) => {
          return (<ChordTemplate key={index} id={index} state={chord} toggleVisibility={toggleVisibility}/>)
        })}
        <SaveButton handleSave={this.handleSave} />
      </div>
    )
  }
}

export default App
