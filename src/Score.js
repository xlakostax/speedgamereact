import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    return (
        <h3>Your score: {this.props.score}</h3>
    )
  }
}

export default Score;
