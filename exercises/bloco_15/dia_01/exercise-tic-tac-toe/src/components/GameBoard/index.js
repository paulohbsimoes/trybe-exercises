import React from 'react';
import PropTypes from 'prop-types';

import GameCell from '../GameCell';

import styles from './styles.module.css';

class GameBoard extends React.Component {
  render() {
    const { handleSelectCell, gameState } = this.props;
    return (
      <div className={ styles.gameBoard }>
        { gameState.map((playerId, index) => (
          <GameCell
            playerId={ playerId }
            key={ index }
            id={ index }
            handleSelectCell={ handleSelectCell }
          />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  handleSelectCell: PropTypes.func.isRequired,
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GameBoard;
