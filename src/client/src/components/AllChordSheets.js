import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const axios = require('axios');

function AllChordSheets() {
  const [chordSheets, setChordSheets] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_API_URL}getChordSheets`,
      method: 'get',
      withCredentials: true,
      mode: 'cors',
    })
      .then((result) => {
        setChordSheets(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteChordSheet = (event) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}deleteChordSheet/`,
      method: 'delete',
      withCredentials: true,
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      data: { id: event.target.dataset.sheet },
    })
      .then((result) => {
        console.log(result);
        if (result.data.response === 'sheet deleted') {
          const newSheetsState = [...chordSheets];
          const currentSheets = newSheetsState.filter(
            (sheet) => sheet._id !== result.id
          );
          setChordSheets(currentSheets);
        }
      })
      .catch((error) => console.log(error));
  };

  const createChordSheet = () => {
    axios({
      url: `${process.env.REACT_APP_API_URL}createChordSheet/`,
      method: 'get',
      withCredentials: true,
      mode: 'cors',
    })
      .then(({ data }) => {
        setRedirect(true);
        setId(data.id);
      })
      .catch((error) => console.log(error));
  };

  const sheets = chordSheets.map((sheet, index) => (
    <Link
      key={index}
      className="chord-sheets__card"
      to={{ pathname: `/chordsheet/${sheet._id}` }}
    >
      <span>
        <p>{sheet.title}</p>
        <button data-sheet={sheet._id} onClick={deleteChordSheet}>
          Delete
        </button>
      </span>
    </Link>
  ));
  if (redirect)
    return (
      <Redirect
        to={{
          pathname: `/chordsheet/${id}`,
        }}
      />
    );
  return (
    <>
      <div className="chord-sheets__header">
        <button onClick={createChordSheet}>New Sheet</button>
        <p>Chord Sheets</p>
      </div>
      <div className="chord-sheets__container">{sheets}</div>
    </>
  );
}

export default AllChordSheets;
