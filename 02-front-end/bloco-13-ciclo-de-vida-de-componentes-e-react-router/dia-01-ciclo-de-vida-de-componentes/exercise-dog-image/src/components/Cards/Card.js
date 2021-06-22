import React, { Component } from 'react';

import styles from './Card.module.css';

class Card extends Component {
  render() {
    const { children, onMouseEnter, onMouseLeave } = this.props;
    return (
      <div
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        className={ styles.card }>
        { children }
      </div>
    );
  }
}
 
export default Card;
