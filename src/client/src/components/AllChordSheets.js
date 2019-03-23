import React, { Component } from 'react'
import Chordsheets from '../seed-data.js';
import { Link } from 'react-router-dom'



class AllChordSheets extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/getChordSheets/', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    })
      .then((response) => {
        console.log(response.status)
      })
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
