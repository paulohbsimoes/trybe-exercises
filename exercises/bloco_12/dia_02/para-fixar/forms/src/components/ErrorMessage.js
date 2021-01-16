import React, { Component } from 'react';
import styles from './ErrorMessage.module.css';

class ErrorMessage extends Component {
  render() { 
    const { value } = this.props;
    return (
      <div className={styles["error-message"]}>
        {value}
      </div>
    );
  }
}
 
export default ErrorMessage;
