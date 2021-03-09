import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '.';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (
      isAuthenticated()
        ? <Component { ...props } />
        : <Redirect to="/" />
    ) }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
