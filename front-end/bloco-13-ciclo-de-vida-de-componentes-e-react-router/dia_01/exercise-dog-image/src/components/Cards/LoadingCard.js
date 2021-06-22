import React, { Component } from 'react';

import styles from './LoadingCard.module.css';

class LoadingCard extends Component {
  render() { 
    return (
      <p className={ styles.message }>Loading...</p>
    );
  }
}
 
export default LoadingCard;
