import React, { Component } from 'react'
import Chordsheets from '../seed-data.js';
import { Link } from 'react-router-dom'



class AllChordSheets extends Component {

  componentDidMount() {
    console.log(Chordsheets[0].chords)
  }



  render() {
    let sheets = Chordsheets.map((item, index) => {
      return <p key={index}><Link to={"chordsheet/" + index}>Chord Sheet</Link></p>
    })
    return (
      <div>
        <p>Blah</p>
          {sheets}
      </div>
    )
  }
}

export default AllChordSheets
