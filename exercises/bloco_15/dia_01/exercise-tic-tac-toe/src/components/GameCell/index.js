import React from 'react';
import PropTypes from 'prop-types';

import xImage from '../../assets/x.png';
import oImage from '../../assets/o.svg';

import styles from './styles.module.css';

const playerImage = {
  1: oImage,
  2: xImage,
}

class GameCell extends React.Component {
  render() {
    const { id, playerId, handleSelectCell } = this.props;

    return (
      <div
        data-testid={`cell_${id}`}
        className={ styles.gameCell }
        onClick={ () => handleSelectCell(id) }
      >
        { !!playerId && 
          <img
            data-testid="cell-image"
            src={ playerImage[playerId] }
            alt={ `${ playerId === 1 ? 'O' : 'X' }` }
          /> }
      </div>
    );
  }
}

export default GameCell;
