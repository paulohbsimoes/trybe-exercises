import React, { Component } from 'react';
import styles from './Select.module.css';

class Select extends Component {
  render() {
    const { name, id, options, handleFormData } = this.props;
    return (
      <select className={styles['select']} id={id} name={name} onChange={handleFormData}>
        {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
      </select>
    );
  }
}
 
export default Select;
