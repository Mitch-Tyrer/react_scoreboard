import React, { Component } from 'react';
import Header from './Header';
import Player from './Player'; 
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  //Player counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
      players: [
        ...prevState.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    };
    });

  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScores = () =>{
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore
    } else {
      return null
    }
  }

  render() {
    const highScore = this.getHighScores();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            index={index}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            score={player.score} 
            changeScore={this.handleScoreChange}  
            totalPlayers={this.state.players.length} 
            isHighScore={highScore === player.score}       
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
