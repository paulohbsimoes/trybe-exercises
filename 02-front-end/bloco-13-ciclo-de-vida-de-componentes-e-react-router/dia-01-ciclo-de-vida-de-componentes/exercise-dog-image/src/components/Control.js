import React, { Component } from 'react';

import styles from './Control.module.css';

class Control extends Component {
  render() {
    const { action, value } = this.props;
    return (
      <button className={ styles.control } onClick={ action }>{ value }</button>
    );
  }
}
 
export default Control;
