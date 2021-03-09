import React, { Component } from 'react';

class ErrorMessage extends Component {
  render() { 
    const { value } = this.props;
    return (
      <div className="alert alert-warning my-3" role="alert">
        { value }
      </div>
    );
  }
}
 
export default ErrorMessage;
