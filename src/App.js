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
    var fret = -1;
    for(let string = 0; string < numberOfStrings; string ++) {
      dotPositions.push([string, fret]);
    };
    let drawingOpenStrings = dotPositions.map(([string, fret]) => {
      return <OpenStrings isVisible={this.state[string] === fret} string={string} onClick={() => this.toggleVisibility(string, fret)} />
    });
    return drawingOpenStrings;
  }

  mutedStringSymbols(numberOfStrings) {
    var dotPositions = [ ];
    var fret = -2;
    for(let string=0; string < numberOfStrings; string++) {
      dotPositions.push([string, fret])
    };
    let drawingMutedStrings = dotPositions.map(([string,fret]) => {
      return <MutedStrings isVisible={this.state[string] === fret} string={string} onClick={() => this.toggleVisibility(string, fret)} />
    });
    return drawingMutedStrings;
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

        {this.mutedStringSymbols(numberOfStrings)}

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
    let m1 = 12 + 20 * this.props.string;
    let m2 = 18;
    let l1 = 28 + 20 * this.props.string;
    let l2 = 2;
    let m3 = 28 + 20 * this.props.string;
    let m4 = 18;
    let l3 = 12 + 20 * this.props.string;
    let l4 = 2;
    let stringPath = 'M' + m1 + ' ' + m2 + ' ' + 'L' + l1 + ' ' + l2 + ' ' + 'M' + m3 + ' ' + m4 + ' ' + 'L' + l3 + ' ' + l4;

    return (
      <path d={stringPath} strokeWidth={2} stroke="black" onClick={this.props.onClick} className={this.props.isVisible ? 'visible' : 'invisible'} />
    )
  }
}

export default App;
