import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
const axios = require('axios')

class AllChordSheets extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chordSheets: [],
      redirect: false,
      id: ''
    }
  }

  deleteChordSheet = (event) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}deleteChordSheet/`,
      method: 'delete',
      withCredentials: true,
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      data: { id: event.target.dataset.sheet }
    })
      .then((result) => {
        console.log(result)
        if (result.data.response === 'sheet deleted') {
          this.setState((prevState, props) => {
            let newSheetsState = [...this.state.chordSheets];
            let currentSheets = newSheetsState.filter(sheet => {
              return sheet._id !== result.id;
            });
            return { chordSheets: currentSheets };
          })
        }
      })
      .catch(error => console.log(error))
  }

  createChordSheet = () => {
    axios({
      url: `${process.env.REACT_APP_API_URL}createChordSheet/`,
      method: 'get',
      withCredentials: true,
      mode: 'cors'
    })
      .then((sheet) => {
        this.setState({ redirect: true, id: sheet.id })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    axios({
      url: `${process.env.REACT_APP_API_URL}getChordSheets`,
      method: 'get',
      withCredentials: true,
      mode: 'cors',
    })
      .then(result => {
        this.setState({ chordSheets: result.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { redirect, id } = this.state;
    let sheets = this.state.chordSheets.map((sheet, index) => {
      return <div key={index}><p><
        Link to={{
          pathname: '/chordsheet/' + sheet._id
        }}>{sheet.title}</Link>
      </p>
        <button data-sheet={sheet._id} onClick={this.deleteChordSheet}>Delete</button>
      </div>
    })
    if (redirect)
      return (<Redirect to={{
        pathname: `/chordsheet/${id}`
      }} />)
    return (<Fragment>
      <button onClick={this.createChordSheet}>New Sheet</button>
      <div>
        <p>Chord Sheets</p>
        {sheets}
      </div>
    </Fragment>
    )
  }
}

export default AllChordSheets
