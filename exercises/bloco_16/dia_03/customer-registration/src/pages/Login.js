import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../store/ducks/user';

import { StyledForm, StyledLogin } from '../styles/pages/Login';

const Login = ({ login, isAuthenticated }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  if (isAuthenticated) return <Redirect to="/dashboard/customers" />;

  return (
    <StyledLogin>
      <h1>Login</h1>
      <StyledForm>
        <label htmlFor="user-email">
          Email
          <input
            value={ userEmail }
            onChange={ ({ target: { value } }) => setUserEmail(value) }
            name="user-email"
            id="user-email"
            type="text"
          />
        </label>
        <label htmlFor="user-password">
          Senha
          <input
            value={ userPassword }
            onChange={ ({ target: { value } }) => setUserPassword(value) }
            name="user-password"
            id="user-password"
            type="password"
          />
        </label>
        <button
          type="button"
          onClick={ () => login({ email: userEmail, password: userPassword }) }
        >
          Entrar
        </button>
      </StyledForm>
    </StyledLogin>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
