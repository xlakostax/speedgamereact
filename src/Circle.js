import React, { Component } from 'react';
import './Circle.css'; //important component(!), import css for circle.js

class Circle extends Component { // (!) Components always in uppercase
  render() { //important component(!)

    return ( //important component(!)
      <div style={{ backgroundColor: this.props.active ? this.props.activeColor : this.props.buttonColor}}
      className={'circle' + (this.props.active ? ' active' : '')} onClick={this.props.click}></div> //circle component, props is important
    )
  }
}

export default Circle; // important component(!)
