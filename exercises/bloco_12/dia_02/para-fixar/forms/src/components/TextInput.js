import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';
import ErrorMessage from './ErrorMessage';

class TextInput extends Component {
  validate = (event) => {
    const { name, handleFormData, handleErrors } = this.props;
    const value = event.target.value;

    const errors = [];
    value.length <= 40 || errors.push(`${name} deve ter menos de 40 caracteres`);
    value.length >= 10 || errors.push(`${name} deve ter pelo menos 10 caracteres`);

    handleErrors(name, errors);
    handleFormData(event);
  }

  render() {
    const { name, value, errors = [] } = this.props;
    return (
      <div className={styles["input-wrapper"]}>
        <input 
          className={styles['text-input']}
          onChange={this.validate}
          name={name}
          type="text"
          value={value}
        />
        {errors.map((error, index) => <ErrorMessage value={error} key={index} />)}
      </div>
    )
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired
}
 
export default TextInput;
