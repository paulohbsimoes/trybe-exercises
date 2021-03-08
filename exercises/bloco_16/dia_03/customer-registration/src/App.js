import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

import GlobalStyles from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Switch>
        <PrivateRoute path="/dashboard" component={ DashBoard } />
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
