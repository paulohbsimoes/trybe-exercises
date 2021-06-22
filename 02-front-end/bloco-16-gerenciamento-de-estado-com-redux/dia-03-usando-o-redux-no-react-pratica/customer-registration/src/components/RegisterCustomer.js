import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as CustomersActions } from '../store/ducks/customers';

import {
  StyledForm,
  StyledRegisterCustomer,
} from '../styles/components/RegisterCustomer';

const RegisterCustomer = ({ addCustomer }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  function handleAddCustomer() {
    const customer = {
      name,
      age: Number(age),
      email,
    };
    addCustomer(customer);
    history.push('/dashboard/customers');
  }

  return (
    <StyledRegisterCustomer>
      <h2>Register Customer</h2>
      <StyledForm autoComplete="off">
        <input
          name="name"
          placeholder="Nome"
          type="text"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <input
          name="age"
          placeholder="Idade"
          type="text"
          value={ age }
          onChange={ ({ target: { value } }) => setAge(value) }
        />
        <input
          name="email"
          placeholder="Email"
          type="text"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <button
          type="button"
          onClick={ handleAddCustomer }
        >
          Enviar
        </button>
      </StyledForm>
    </StyledRegisterCustomer>
  );
};

RegisterCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ customers }) => ({
  customers: customers.customers,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(CustomersActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCustomer);
