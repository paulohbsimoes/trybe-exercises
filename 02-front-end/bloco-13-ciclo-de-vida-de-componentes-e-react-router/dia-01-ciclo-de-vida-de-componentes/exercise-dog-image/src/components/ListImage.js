import React, { Component } from 'react';

import Card from './Cards/Card';
import ImageCard from './Cards/ImageCard';
import Control from './Control';
import ControlGroup from './ControlGroup';

import styles from './ListImage.module.css';

class ListImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showControls: false,
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ showControls: true })
  }

  handleMouseLeave() {
    this.setState({ showControls: false })
  }
    
  render() { 
    const { source, handleRemove, id, dogName } = this.props;
    const { showControls } = this.state;

    return (
      <Card onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
        { true && <p className={ styles['dog-name'] }>{ dogName }</p> }
        <ImageCard source={ source }/>
        { showControls && <ControlGroup>
          <Control action={ () => handleRemove(id) } value="Remove" />
        </ControlGroup> }
      </Card>
    );
  }
}
 
export default ListImage;
