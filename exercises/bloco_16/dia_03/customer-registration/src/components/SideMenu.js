import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledSideMenu, SideMenuButton } from '../styles/components/SideMenu';

const SideMenu = ({ isOpen, toggleSideMenu }) => (
  <StyledSideMenu onClick={ toggleSideMenu } isOpen={ isOpen }>
    <SideMenuButton />
    <Link to="/dashboard/customers">Customers</Link>
    <Link to="/dashboard/register">Register</Link>
  </StyledSideMenu>
);

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

export default SideMenu;
