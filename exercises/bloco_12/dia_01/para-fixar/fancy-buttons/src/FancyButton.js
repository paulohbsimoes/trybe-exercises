import React, { Component } from 'react';
import styles from './FancyButton.module.css'

class FancyButton extends Component {
  constructor() {
    super()
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState, _props) => {
      this.setState({ count: previousState.count + 1 });
    })
  }

  render() { 
    const { count } = this.state;
    return (
      <button className={styles['fancy-button']} onClick={this.handleClick}>{count}</button>
    );
  }
}
 
export default FancyButton;
 