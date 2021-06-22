import { createActions, createReducer } from 'reduxsauce';
import * as formValidation from '../../libs/formValidation';

export const { Types, Creators } = createActions({
  change: ['event'],
  blur: ['event'],
  submit: ['event'],
  clear: ['event'],
})

const INITIAL_FIELDS_STATE = {
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

const INITIAL_STATE = {
  ...INITIAL_FIELDS_STATE,
  errors: {},
  touched: {},
  showResume: false,
}

const transforms = {
  onChange: {
    nome: (value) => value.toUpperCase(),
    endereco: (value) => value.replace(/[^0-9a-záàâãéèêíïóôõöúçñ ]+$/gi, '')
  },
  onBlur: {
    cidade: (value) => /^\d/.test(value) ? '' : value
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

const change = (state = INITIAL_STATE, action) => {
  const { name, value } = action.event.target;
  const { onChange } = transforms;
  const newValue = onChange[name] ? onChange[name](value) : value;

  const { values, touched } = state;

  return {
    ...state,
    values: {
      ...values,
      [name]: newValue,
    },
    touched: {
      ...touched,
      [name]: true,
    }
  }
}

const blur = (state = INITIAL_STATE, action) => {
  const { name, value } = action.event.target;
  const { errors, values } = state;
  const { [name]: removedError, ...rest } = errors;
  const error = validate[name] ? validate[name](value) : null;
  
  const { onBlur } = transforms;
  const newValue = onBlur[name] ? onBlur[name](value) : value;
  
  return {
    ...state,
    errors: {
      ...rest,
      ...(error && { [name]: error })
    },
    values: {
      ...values,
      [name]: newValue 
    }
  };
}

const submit = (state = INITIAL_STATE, action) => {
  action.event.preventDefault();
  const { values } = state;
  
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
    return { ...state, showResume: true };
  } else {
    alert('Formulário com erros, é necessário corrigir antes de enviar.');
    return state;
  }
}

const clear = (state = INITIAL_STATE) => ({
  ...state,
  ...INITIAL_STATE,
})


export default createReducer(INITIAL_STATE, {
  [Types.CHANGE]: change,
  [Types.BLUR]: blur,
  [Types.SUBMIT]: submit,
  [Types.CLEAR]: clear,
});
