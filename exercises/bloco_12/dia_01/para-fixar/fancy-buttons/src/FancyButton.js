import React, { Component } from 'react';

class FancyButton extends Component {
  render() { 
    const { text, handleClick } = this.props;
    return (
      <button onClick={() => handleClick(text)}>{text}</button>
    );
  }
}
 
export default FancyButton;
 