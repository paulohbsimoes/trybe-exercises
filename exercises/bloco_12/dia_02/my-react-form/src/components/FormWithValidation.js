import React, { Component } from 'react';

import Form from './Form';
import Resume from './Resume';

import * as formValidation from '../libs/formValidation';

const transforms = {
  onChange: {
    nome: (value) => value.toUpperCase(),
    endereco: (value) => value.replace(/[^0-9a-záàâãéèêíïóôõöúçñ ]+$/gi, '')
  },
  onBlur: {
    cidade: (value) => /^\d/.test(value) ? '' : value
  }  
}

// const initialState = {
//   values: {
//     nome: 'PAULO HENRIQUE',
//     email: 'paulo@email.com',
//     cpf: '12312312311',
//     endereco: 'Meu endereço',
//     cidade: 'Minha cidade',
//     estado: 'Meu estado',
//     tipo: 'Casa',
//     cargo: 'Procrastinador profissional',
//     descricao: 'O dia inteiro lendo coisas aleatórias na internet',
//   }
// }

const initialState = {
  values: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
    cargo: '',
    descricao: '',
  }
}

const validate = {
  nome: formValidation.nome,
  email: formValidation.email,
  cpf: formValidation.cpf,
  endereco: formValidation.endereco,
  cidade: formValidation.cidade,
  cargo: formValidation.cargo,
  descricao: formValidation.descricao,
}

class FormWithValidation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState,
      errors: {},
      touched: {},
      showResume: false,
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { onChange } = transforms;
    const newValue = onChange[name] ? onChange[name](value) : value;

    this.setState(({ values, touched }) => {
      return {
        values: {
          ...values,
          [name]: newValue,
        },
        touched: {
          ...touched,
          [name]: true,
        }
      }
    });
  }

  handleBlur = ({ target }) => {
    const { name, value } = target;
    const { errors, values } = this.state;
    const { [name]: removedError, ...rest } = errors;
    const error = validate[name] ? validate[name](value) : null;

    const { onBlur } = transforms;
    const newValue = onBlur[name] ? onBlur[name](value) : value;

    this.setState({
      errors: {
        ...rest,
        ...(error && { [name]: error })
      },
      values: {
        ...values,
        [name]: newValue 
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { values } = this.state;
    
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key] && validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          }
        }
      },
      {}
    )

    if (!Object.values(formValidation.errors).length) {
      this.setState({ showResume: true });
    } else {
      alert('Formulário com erros, é necessário corrigir antes de enviar.');
    }
  }

  handleClear = () => {
    this.setState({
      ...initialState,
      showResume: false
    })
  }

  render() { 
    const { values, errors, showResume } = this.state;
    return (
      <>
        <Form
          values={values}
          errors={errors}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
        />
        { showResume && <Resume values={ values } /> }
      </>
    );
  }
}
 
export default FormWithValidation;
