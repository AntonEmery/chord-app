import React, { Component } from 'react'
import axios from 'axios'
import Chordsheets from '../seed-data.js';


class AllChordSheets extends Component {

  componentDidMount() {
    console.log(Chordsheets)
  }



  render() {
    let sheets = Chordsheets.map((item) => {
      return <p>{item.user_id}</p>
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
