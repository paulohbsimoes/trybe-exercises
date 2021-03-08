import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CustomersActions } from '../store/ducks/customers';

import CustomerCard from './CustomerCard';

import {
  StyledRegisteredCustomers,
  NoClients,
  CardsContainer,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownOption,
} from '../styles/components/RegisteredCustomers';

const sortMethods = {
  name: (customerA, customerB) => customerA.name.localeCompare(customerB.name),
  age: (customerA, customerB) => customerA.age - customerB.age,
  email: (customerA, customerB) => customerA.email.localeCompare(customerB.email),
  id: (customerA, customerB) => customerA.id - customerB.id,
};

const RegisteredCustomers = ({ customers, sortMethod, setSortMethod }) => {
  if (customers.length === 0) return <NoClients>Nenhum cliente cadastrado</NoClients>;
  return (
    <StyledRegisteredCustomers>
      <Dropdown>
        <DropdownButton>Ordenar</DropdownButton>
        <DropdownMenu id="sort-method">
          <DropdownOption
            selected={ sortMethod === 'id' }
            onClick={ () => setSortMethod('id') }
          >
            Ordem de inserção
          </DropdownOption>

          <DropdownOption
            selected={ sortMethod === 'name' }
            onClick={ () => setSortMethod('name') }
          >
            Nome
          </DropdownOption>

          <DropdownOption
            selected={ sortMethod === 'age' }
            onClick={ () => setSortMethod('age') }
          >
            Idade
          </DropdownOption>

          <DropdownOption
            selected={ sortMethod === 'email' }
            onClick={ () => setSortMethod('email') }
          >
            Email
          </DropdownOption>
        </DropdownMenu>
      </Dropdown>

      <CardsContainer>
        { customers
          .sort((customerA, customerB) => (sortMethods[sortMethod]
            ? sortMethods[sortMethod](customerA, customerB)
            : false))
          .map((customer, index) => (
            <CustomerCard key={ index } customer={ customer } />)) }
      </CardsContainer>
    </StyledRegisteredCustomers>
  );
};

RegisteredCustomers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortMethod: PropTypes.string.isRequired,
  setSortMethod: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(CustomersActions, dispatch));

const mapStateToProps = ({ customers }) => ({
  customers: customers.customers,
  sortMethod: customers.sortMethod,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredCustomers);
