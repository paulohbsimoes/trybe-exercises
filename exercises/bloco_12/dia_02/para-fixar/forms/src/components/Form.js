import React, { Component } from 'react';
import Select from './Select';
import TextInput from './TextInput';
import TextArea from './TextArea';
import ErrorMessage from './ErrorMessage';

import styles from './Form.module.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      opcoesDeComida: ['Pizza', 'Sorvete', 'Hambúrguer', 'Açaí', 'Lasagna'],
      'restaurante-favorito': '',
      'inputB': 'teste',
      'textarea': '',
      errors: {},
      formularioComErros: false
    }

    this.handleFormData = this.handleFormData.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleFormData({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  handleErrors(name, value) {
    const newErrors = {
      ...this.state.errors,
      [name]: value
    }
    this.setState({
      errors: newErrors,
      formularioComErros: Object.values(newErrors)
        .map(arr => arr.length > 0)
        .reduce((acc, cur) => acc || cur, false)
    });
  }

  render() {    
    const { opcoesDeComida, formularioComErros, errors } = this.state;

    return (
      <div>
        <form className={styles["main-form"]} action="">
          <fieldset>
            <legend>Usando fieldset</legend>
            <Select
              id="comidas"
              name="comida-favorita"
              handleFormData={this.handleFormData}
              options={opcoesDeComida}
            />

            <TextInput 
              name="restaurante-favorito"
              handleFormData={this.handleFormData}
              value={this.state['restaurante-favorito']}
              handleErrors={this.handleErrors}
              errors={errors["restaurante-favorito"]}
            />

            <TextInput
              name="inputB"
              handleFormData={this.handleFormData}
              value={this.state['inputB']}
              handleErrors={this.handleErrors}
              errors={errors["inputB"]}
            />
          </fieldset>

          <input name="checkboxA" type="checkbox" onChange={this.handleFormData} />
          <input type="file" />

          <TextArea 
            name="textarea"
            handleFormData={this.handleFormData}
            value={this.state['textarea']}
            handleErrors={this.handleErrors}
          />
        </form>
        { formularioComErros && <ErrorMessage value="Formulário com erros" /> }
      </div>
    );
  }
}

export default Form;
