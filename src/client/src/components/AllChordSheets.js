import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class AllChordSheets extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chordSheets: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/getChordSheets/', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      }).then(data => this.setState({ chordSheets: data }));
  }

  render() {
    let sheets = this.state.chordSheets.map((sheet, index) => {
      return <p key={index}><Link to={"/chordsheet/" + sheet._id}>{sheet.title}</Link></p>
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
