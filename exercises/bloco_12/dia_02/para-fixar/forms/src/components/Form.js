import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      'comida-favorita': ''
    }

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value 
    })
  }
  
  render() {
    return (
      <form className={styles["main-form"]} action="">
        <fieldset>
          <legend>Usando fieldset</legend>
          <select name="comida-favorita" id="comidas" onChange={this.handleFormData}>
            <option value="Pizza">Pizza</option>
            <option value="Sorvete">Sorvete</option>
            <option value="Hambúrger">Hambúrger</option>
            <option value="Açaí">Açaí</option>
          </select>
          <input name="inputA" type="text" onChange={this.handleFormData} />
          <input name="inputB" type="text" onChange={this.handleFormData} />
        </fieldset>
        <input name="checkboxA" type="checkbox" onChange={this.handleFormData} />
        <input type="file" />
        <textarea name="textarea" id="" cols="30" rows="10" onChange={this.handleFormData}></textarea>
      </form>  
    );
  }
}
 
export default Form;
