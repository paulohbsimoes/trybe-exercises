import React, { Component } from 'react';

import styles from './ControlGroup.module.css';

class ControlGroup extends Component {
  state = {  }
  render() { 
    const { children } = this.props;
    return (
      <div className={ styles.controls }>
        { children }
      </div>
    )
  }
}
 
export default ControlGroup;
