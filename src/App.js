import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  toggleVisibility(string, fret) {
    this.setState({[string]: fret});
  }

  toggleOpenStrings(string) {
    this.setState({[string]: -1});
  }

  toggleMutedStrings(string) {
    this.setState({[string]: -2});
  }

  componentDidUpdate() {
    console.log('component did update');
    console.log(this.state);
  }

  drawFrets(numberOfFrets) {
    var frets = [ ];
    for(let fret = 0; fret<numberOfFrets; fret++) {
      frets.push(fret);
    }
    let drawingFrets = frets.map((fret) => {
      return <Fret fret={fret} />
    });
    return drawingFrets;
  }

  drawDots(numberOfStrings, numberOfFrets) {
    var dotPositions = [ ];
    for(let string = 0; string < numberOfStrings; string ++) {
      for(let fret = 0; fret < numberOfFrets; fret ++) {
        dotPositions.push([string, fret]);
      }
    };
    let drawingCircles = dotPositions.map(([string, fret]) => {
      return <Circle isVisible={this.state[string] === fret} onClick={() => this.toggleVisibility(string, fret)} string={string} fret={fret} />
    });
    return drawingCircles;
  }

  drawStrings(numberOfStrings) {
    var strings = [ ];
    for(let string = 0; string < numberOfStrings; string++) {
      strings.push(string);
    }
    let drawingStrings = strings.map((string) => {
      return <String string={string} />
    });
    return drawingStrings;
  }

  openStringSymbols(numberOfStrings) {
    var dotPositions = [ ];
    for(let string = 0; string < numberOfStrings; string ++) {
      dotPositions.push(string);
    };
    let drawingOpenStrings = dotPositions.map((string) => {
      return <OpenStrings isVisible={this.state[string] === -1} string={string} onClick={() => this.toggleOpenStrings(string)} />
    });
    return drawingOpenStrings;
  }

  render() {
    const numberOfFrets = 7;
    const numberOfStrings = 6;
    return (
      <div className="App">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={140} height={160}>
        {/* strings */}
        {this.drawStrings(numberOfStrings)}

        {/* nut */}
        <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black" />

        {/* frets */}
        {this.drawFrets(numberOfFrets)}

        {/* finger position circles */}
        {this.drawDots(numberOfStrings, numberOfFrets)}

        {/* open/muted strings */}
        {this.openStringSymbols(numberOfStrings)}

        <MutedStrings />

      </svg>
      </div>
    );
  }
}

class Circle extends Component {
  render() {
    const circleSpacing = 20;

    let cx = 20 + circleSpacing * this.props.string;
    let cy = 40 + circleSpacing * this.props.fret;
    return (
    <circle cx={cx} cy={cy} r={8} onClick={this.props.onClick} className={this.props.isVisible ? 'visible' : 'invisible'} fill="black" />
    )
  }
}

class String extends Component {
  render() {
    const stringSpacing = 20;
    let x1 = 20 + stringSpacing * this.props.string;
    let y1 = 20;
    let x2 = 20 + stringSpacing * this.props.string;
    let y2 = 140;
    let strokeWidth = 2;

    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke="black" />
    )
  }
}

class Fret extends Component {
  render() {
    const fretSpacing = 20;
    let x1 = 19;
    let y1 = 20 + fretSpacing * this.props.fret;
    let x2 = 121;
    let y2 = 20 + fretSpacing * this.props.fret;
    let strokeWidth = 2;
    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke="black" />
    )
  }
}

class OpenStrings extends Component {
  render() {
    let cx = 20 + 20 * this.props.string;
    let cy = 10;

    return (
      <circle cx={cx} cy={cy} r={8} fill="none" onClick={this.props.onClick} className={this.props.isVisible ? 'visible' : 'invisible'} stroke="black" strokeWidth={4} />
    )
  }
}

class MutedStrings extends Component {
  render() {
    let x1 = 20 + 20 * 0;
    let y1 = 20;
    let x2 = 40;
    let y2 = 0;

    let x3 = 20 + 20 * 0;
    let y3 = 0;
    let x4 = 40;
    let y4 = 20;

    return (
      <path d="M12 18 L28 2 M28 18 L12 2" strokeWidth={2} stroke="black" />

    )
  }
}

export default App;
