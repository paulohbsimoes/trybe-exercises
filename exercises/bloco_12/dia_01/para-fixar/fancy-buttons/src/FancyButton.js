import React, { Component } from 'react';
import styles from './FancyButton.module.css'

class FancyButton extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: 'green'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState, _props) => {
      const newCount = previousState.count + 1;
      const newColor = newCount % 2 === 0 ? 'green' : 'initial';
      console.log(newColor);
      return { 
        count: newCount,
        color: newColor
      }
    });
  }

  render() { 
    const { count, color } = this.state;
    return (
      <button 
        className={styles['fancy-button']}
        style={{ background: color }}
        onClick={this.handleClick}
      >{count}</button>
    );
  }
}

export default FancyButton;
 