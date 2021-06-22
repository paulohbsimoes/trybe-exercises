import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CostumersActions } from '../store/ducks/customers';

import { StyledCustomerCard, Delete } from '../styles/components/CustomerCard';

const CustomerCard = ({ removeCustomer, customer }) => {
  const { name, age, email, id } = customer;

  function handleDelete() {
    removeCustomer(id);
  }

  return (
    <StyledCustomerCard>
      <p>{ name }</p>
      <p>{ age }</p>
      <p>{ email }</p>
      <Delete onClick={ handleDelete } />
    </StyledCustomerCard>
  );
};

CustomerCard.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  removeCustomer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(CostumersActions, dispatch);

export default connect(null, mapDispatchToProps)(CustomerCard);
