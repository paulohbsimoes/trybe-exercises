import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() { 
    const { children: type, handleClick, disabled, color = 'orange' } = this.props;
    return (
      <button 
        disabled={ disabled }
        className={ styles.button }
        onClick={ () => handleClick(type) }
        style={ { backgroundColor: color } }
      > {type}
      </button>
    )
  }
}
 
export default Button;
