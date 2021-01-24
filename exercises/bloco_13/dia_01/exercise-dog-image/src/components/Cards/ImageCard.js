import React, { Component } from 'react';

import styles from './ImageCard.module.css';

class ImageCard extends Component {  
  render() { 
    const { source } = this.props;
    return (
      <div style={{ backgroundImage: `url(${source})` }} className={ styles.image } />
    );
  }
}
 
export default ImageCard;
