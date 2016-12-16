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

  drawFrets() {
    var frets = [ ];
    for(let fret=0; fret<6; fret++) {
      frets.push(fret);
    }
    let drawingFrets = frets.map((fret) => {
      return <Fret fret={fret} />
    });
    return drawingFrets;
  }

  drawDots() {
    var dotPositions = [ ];
    for(let string = 0; string < 6; string ++) {
      for(let fret = 0; fret < 5; fret ++) {
        dotPositions.push([string, fret]);
      }
    };
    let drawingCircles = dotPositions.map(([string, fret]) => {
      return <Circle isVisible={this.state[string] === fret} onClick={() => this.toggleVisibility(string, fret)} string={string} fret={fret} />
    });
    return drawingCircles;
  }

  drawStrings() {
    var strings = [ ];
    for(let string = 0; string < 6; string++) {
      strings.push(string);
    }
    let drawingStrings = strings.map((string) => {
      return <String string={string} />
    });
    return drawingStrings;
  }

  render() {
    return (
      <div className="App">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={140} height={140}>
        {/* strings */}
        {this.drawStrings()}

        {/* nut */}
        <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black" />

        {/* frets */}
        {this.drawFrets()}

        {/* finger position circles */}
        {this.drawDots()}

        {/* open/muted strings */}
        <circle cx={20} cy={10} r={8} fill="none" stroke="black" strokeWidth={4} />
      </svg>
      </div>
    );
  }
}

class Circle extends Component {
  render() {
    let cx = 20 + 20 * this.props.string;
    let cy = 40 + 20 * this.props.fret;
    return (
    <circle cx={cx} cy={cy} r={8} onClick={this.props.onClick} className={this.props.isVisible ? 'visible' : 'invisible'} fill="black" />
    )
  }
}

class String extends Component {
  render() {
    let x1 = 20 + 20 * this.props.string;
    let y1 = 20;
    let x2 = 20 + 20 * this.props.string;
    let y2 = 140;
    let strokeWidth = 2;

    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke="black" />
    )
  }
}

class Fret extends Component {
  render() {
    let x1 = 19;
    let y1 = 20 + 20 * this.props.fret;
    let x2 = 121;
    let y2 = 20 + 20 * this.props.fret;
    let strokeWidth = 2;
    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke="black" />
    )
  }
}

export default App;
