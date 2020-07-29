import React, { Fragment } from 'react';
import ChordSheet from '../chord-sheet/ChordSheet';

const HomeContent = () => {
  return (
    <Fragment>
      <div className="home__intro">
        <h2>Chord App</h2>
        <p>I got the idea for this app when I wanted to send a simple chord sheet to an online guitar student. There did not seem a quick way to do it that was not part of a larger application.</p>
        <p>This is just the basic front end app, there is a back end portion that lets users create accounts and save chord sheets, it just needs a bit more work. For the front end I still need a way to notate barre chords, drag the chords and change the order, and indicate frets that are above the fifth fret.</p>
        <a href="https://github.com/AntonEmery/chord-app-client" target="_blank" rel="noopener noreferrer">Github Repo</a>
      <ChordSheet mode="DEMO" />
      </div>
    </Fragment>
  )
}

export default HomeContent;