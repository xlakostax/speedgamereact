import React, { Component } from 'react';
import './GameOver.css';

class GameOver extends Component {
  closeHandler = () => {                //Function inside class - method
     window.location.reload();
  }

  render() {
    return(
      <div>
        <div id="result">
          <div className="gameOverBox">
            <button id="closeTheGame" onClick={this.closeHandler}>Close</button>
            <p id="gameOverText">Game Over!<br></br><br></br>Your final score is:<br></br><br></br>{this.props.score}</p>

          </div>
        </div>
      </div>
    )
  }
}

export default GameOver;
