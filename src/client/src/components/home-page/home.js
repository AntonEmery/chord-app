import React, { Fragment } from 'react';
import ChordSheet from '../chord-sheet/ChordSheet';
import ToggleContent from '../ToggleContent';
import Modal from '../../modals/Modal';
import LoginForm from '../forms/Login';

function Home() {
  return (
    <Fragment>
      <header>
        <h1>Chord Sheets</h1>
        <p>An app for creating simple chord sheets</p>
        <a className="header__link" href="https://github.com/AntonEmery/chord-app-client" target="_blank">Github Repo</a>
      </header>
      <div className="home__intro">
        <ToggleContent
          toggle={showFn => <button onClick={showFn}>Login</button>}
          content={hideFn => (
            <>
              <Modal hide={hideFn} width='365px'>
                <LoginForm />
              </Modal>
            </>
          )}
        />
        <p>I got the idea for this app when I wanted to send a simple chord sheet to an online guitar student. There did not seem a quick way to do it that was not part of a larger application.</p>
        <p>This is just the basic front end app, there is a back end portion that lets users create accounts and save chord sheets, it just needs a bit more work. For the front end I still need a way to notate barre chords, drag the chords and change the order, and indicate frets that are above the fifth fret.</p>
        <h3>Try It</h3>
      <ChordSheet mode="DEMO" />
      </div>
    </Fragment>
  )
}

export default Home;