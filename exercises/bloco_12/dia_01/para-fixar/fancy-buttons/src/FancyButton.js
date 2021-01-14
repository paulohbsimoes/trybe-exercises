import React, { Component } from 'react';

class FancyButton extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { text } = this.props;
    console.log(text);
  }

  render() { 
    const { text } = this.props;
    return (
      <button onClick={this.handleClick}>{text}</button>
    );
  }
}
 
export default FancyButton;
 