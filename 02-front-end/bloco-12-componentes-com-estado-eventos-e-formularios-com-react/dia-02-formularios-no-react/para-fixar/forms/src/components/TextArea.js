import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import styles from './TextArea.module.css';

class TextArea extends Component {
  validate = (event) => {
    const { name, handleFormData, handleErrors } = this.props;
    const value = event.target.value;

    const errors = [];
    value.length > 200 && errors.push(`${name} deve ter até 200 caracteres`);

    handleErrors(name, errors);
    handleFormData(event)
  }
  render() {
    const { name, value } = this.props;

    const errors = [];
    value.length > 200 && errors.push(`${name} deve ter até 200 caracteres`);

    return (
      <div className={styles["input-wrapper"]}>
        <textarea className={styles['text-area']} name={name} onChange={this.validate}></textarea>
        {errors.map((error, index) => <ErrorMessage value={error} key={index} />)}
      </div>
    );
  }
}
 
export default TextArea;
