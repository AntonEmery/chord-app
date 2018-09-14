import React, { Component } from 'react'
import Chordsheets from '../seed-data.js';
import { Link } from 'react-router-dom'



class AllChordSheets extends Component {

  componentDidMount() {
    console.log(Chordsheets[0].chords)
      fetch('http://localhost:8080/info', { credentials: 'include', mode: 'cors' })
      .then(response => { return response.json() })
      .then(data => console.log(data))
      }

  render() {
    let sheets = Chordsheets.map((item, index) => {
      return <p key={index}><Link to={"/chordsheet/" + index}>Chord Sheet</Link></p>
    })
    return (
      <div>
        <p>Chord Sheets</p>
          {sheets}
      </div>
    )
  }
}

export default AllChordSheets
