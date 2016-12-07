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

  render() {
    var dotPositions = [ ];
    var strings = [ ];
    for(let string = 0; string < 6; string ++) {
      for(let fret = 0; fret < 5; fret ++) {
        dotPositions.push([string, fret]);
      }
      strings.push(string);
    };

    let drawingStrings = strings.map((string) => {
      return <String string={string} />
    });
    
    let drawingCircles = dotPositions.map(([string, fret]) => {
     return <Circle isVisible={this.state[string] === fret} onClick={() => this.toggleVisibility(string, fret)} string={string} fret={fret} />
    });

    return (
      <div className="App">
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={140} height={140}>
        {/* strings */}
        
       
        {drawingStrings}
        
        {/* nut */} 
        <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black" />
        {/* frets */}
        <line x1={19} y1={40} x2={121} y2={40} strokeWidth={2} stroke="black" />
        <line x1={19} y1={60} x2={121} y2={60} strokeWidth={2} stroke="black" />
        <line x1={19} y1={80} x2={121} y2={80} strokeWidth={2} stroke="black" />
        <line x1={19} y1={100} x2={121} y2={100} strokeWidth={2} stroke="black" />
        <line x1={19} y1={120} x2={121} y2={120} strokeWidth={2} stroke="black" />
        
        {/* finger position circles */}
        {drawingCircles}

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

export default App;
