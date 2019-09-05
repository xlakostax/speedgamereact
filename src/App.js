import React, { Component } from 'react'; //important component(!)
import './App.css'; //important component(!), import css for App.js
import Circle from './Circle'; //important component(!), import component Circle.js (.js is not needed)
import Score from './Score';
import GameOver from './GameOver';

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

class App extends Component {

  //Functions always before render

  state = {
    current: 0, //this is an Object, thus there is doubledot instead of equal
    score: 0, //this is an Object, thus there is doubledot instead of equal
    showGameOver: false,
    rounds: 0
  };
  pace = 2000; //TODO: try to put it into the state Object
  timer = undefined;

  clickHandler = (btnId) => {
    console.log('Clicked: ', btnId);
    if (this.state.current !== btnId) {
      this.gameOverHandler();
      return;
    }

    this.setState({
      rounds: 0
    })

    this.setState(prevState => {
        return {
          score: prevState.score + 1,
        };
    });
  };

  gameOverHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  }

  next = () => {
    let nextActive = undefined;

    do {
      nextActive = randomNumber (1, 5);
    } while (nextActive === this.state.current);

    this.setState({
      current:nextActive
    });

    this.setState(prevState => {
        return {
          rounds: prevState.rounds + 1,
        };
    });

    if (this.state.rounds === 5) {  //game stops if nothing presed by use after 5 times
        this.gameOverHandler();
        return;
    }

    this.pace *= 0.99;
    this.timer = setTimeout(this.next.bind(this), this.pace);
  }

  startGameHandler = () => {
    this.next();
  }

  render() {
    const blue = {
      backgroundColor: 'blue'
    };

    return (
      <div className="App">
        <div id="wrapper">
          <h1 style={blue}>Speed Game</h1>
          <Score score={this.state.score}/>
          <div id="circleHolder">
            <Circle buttonColor="green"
            active = {this.state.current === 1}
            click={() => this.clickHandler(1)}
            /> {/* import the component in uppercase(!) */}
            <Circle buttonColor="gold"
            active = {this.state.current === 2}
            click={() => this.clickHandler(2)}
            /> {/* import the component in uppercase(!) */}
            <Circle buttonColor="magenta"
            active = {this.state.current === 3}
            click={() => this.clickHandler(3)}
            /> {/* import the component in uppercase(!) */}
            <Circle buttonColor="blue"
            active = {this.state.current === 4}
            click={() => this.clickHandler(4)}
            /> {/* import the component in uppercase(!) */}
          </div>
          <div id="buttonHolder">
            <button type="button" id="buttonStart" onClick={this.startGameHandler}>Start Game</button>
            <button type="button" id="buttonStop" onClick={this.gameOverHandler}>Stop Game</button>
          </div>
          {this.state.showGameOver && <GameOver score={this.state.score}/>}
        </div>
      </div>
    );
  }
}
export default App;
