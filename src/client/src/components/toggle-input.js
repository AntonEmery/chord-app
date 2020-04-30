import React, { Component, Fragment } from 'react'


class ToggleInput extends Component {
  state = {
    editable: false
  }

  setName = (e) => {
    this.props.setName(e.target.value || this.props.name, this.props.id);
    this.setState({
      editable: !this.state.editable
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setName(e)
    }
  }

  toggleState = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  ifEmpty(value) {
    if (value.length <= 0) {
      return '...'
    } else {
      return value;
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.editable ?
          <input type="text" className={this.props.inputName} placeholder="test" autoFocus onKeyDown={this.handleKeyDown} onBlur={this.setName} /> :
          <p className="chords__name" onClick={this.toggleState}>{this.ifEmpty(this.props.name)}</p>
        }
      </Fragment>
    )
  }
}


export default ToggleInput;
