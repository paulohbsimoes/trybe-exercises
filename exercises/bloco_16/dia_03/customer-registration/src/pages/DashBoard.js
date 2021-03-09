import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../store/ducks/user';

import RegisteredCustomers from '../components/RegisteredCustomers';
import RegisterCustomers from '../components/RegisterCustomer';
import SideMenu from '../components/SideMenu';

import { Main, SideBarButton, StyledHeader,
  LogoutButton, DashBoardContainer } from '../styles/pages/DashBoard';

const DashBoard = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggleSideMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <DashBoardContainer>
      <StyledHeader>
        <SideBarButton onClick={ toggleSideMenu } />
        <LogoutButton onClick={ handleLogout } />
      </StyledHeader>
      <SideMenu isOpen={ isOpen } toggleSideMenu={ toggleSideMenu } />
      <Main>
        <Switch>
          <Route path="/dashboard/customers" component={ RegisteredCustomers } />
          <Route path="/dashboard/register" component={ RegisterCustomers } />
        </Switch>
      </Main>
    </DashBoardContainer>
  );
};

DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(DashBoard);
