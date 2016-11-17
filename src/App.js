import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  toggleVisibility(string, fret) {
    console.log('toggle visibility');
    this.setState({[string]: fret});
  }

  componentDidUpdate() {
    console.log('component did update');
    console.log(this.state);
  }

  render() {
    var dotPositions = [ ];
    for(let string = 0; string < 6; string ++) {
      for(let fret = 0; fret < 5; fret ++) {
        dotPositions.push([string, fret]);
      }
    };
    
    let drawingCircles = dotPositions.map((fingerPositions) => {
     return <Circle isVisible={this.state[fingerPositions[0]] === fingerPositions[1]} onClick={() => this.toggleVisibility(fingerPositions[0], fingerPositions[1])} string={fingerPositions[0]} fret={fingerPositions[1]} />
    })
    return (
      <div className="App">
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={140} height={140}>
        {/* strings */}
        <line x1={20} y1={20} x2={20} y2={140} strokeWidth={2} stroke="black" className="string" />
        <line x1={40} y1={20} x2={40} y2={140} strokeWidth={2} stroke="black" />
        <line x1={60} y1={20} x2={60} y2={140} strokeWidth={2} stroke="black" />
        <line x1={80} y1={20} x2={80} y2={140} strokeWidth={2} stroke="black" />
        <line x1={100} y1={20} x2={100} y2={140} strokeWidth={2} stroke="black" />
        <line x1={120} y1={20} x2={120} y2={140} strokeWidth={2} stroke="black" />
        {/* nut */} 
        <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black" />
        {/* frets */}
        <line x1={19} y1={40} x2={121} y2={40} strokeWidth={2} stroke="black" />
        <line x1={19} y1={60} x2={121} y2={60} strokeWidth={2} stroke="black" />
        <line x1={19} y1={80} x2={121} y2={80} strokeWidth={2} stroke="black" />
        <line x1={19} y1={100} x2={121} y2={100} strokeWidth={2} stroke="black" />
        <line x1={19} y1={120} x2={121} y2={120} strokeWidth={2} stroke="black" />
        {/* finger position circles */}
        {/*<Circle isVisible={this.state[0] === 0} onClick={() => this.toggleVisibility(0, 0)} string={string} fret={fret} /> */}
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

export default App;
