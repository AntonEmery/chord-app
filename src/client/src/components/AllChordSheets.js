import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'

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
    fetch('http://localhost:8080/deleteChordSheet/', {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: event.target.dataset.sheet })
    })
      .then(response => response.json())
      .then(result => {
        if (result.response === 'sheet deleted') {
          this.setState((prevState, props) => {
            let newSheetsState = [...this.state.chordSheets];
            let currentSheets = newSheetsState.filter(sheet => {
              return sheet._id !== result.id;
            });
            return { chordSheets: currentSheets };
          })
        }
      })
  }

  createChordSheet = () => {
    fetch('http://localhost:8080/createChordSheet/', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(sheet => {
        this.setState({ redirect: true, id: sheet.id })
      });
  }

  componentDidMount() {
    fetch('http://localhost:8080/getChordSheets', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      }).then(data => this.setState({ chordSheets: data }));
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
