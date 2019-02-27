import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';
import { Consumer } from './context';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {

    const { name, id, score, index } = this.props

    return (
      <div className="player">
        <Consumer>
          {context => (
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              <Crown isHighScore={this.props.isHighScore} />
              {name}
            </span>
          )}
        </Consumer>


        <Counter
          score={score}
          index={index}
        />
      </div >
    );
  }

}


export default Player;
