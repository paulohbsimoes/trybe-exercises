import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Login from './pages/Login';
import StrictAccess from './pages/StrictAccess';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav className={ styles.navbar }>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Strict-Access</Link>
            {/* <Link to="/strict-access">Strict-Access</Link> */}
          </nav>
          <Switch>
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/users/:id" render={ (props) =>
              <Users {...props} greetingMessage="Good Morning" /> } />
            <Route path="/users" component={ Users } />
            {/* <Route path="/strict-access" render={ (props) => 
              <StrictAccess {...props} user={{ username: 'joao', password: '1234' }} /> } /> */}
            <Route path="/strict-access" render={ (props) => <StrictAccess {...props} /> } />
            <Route path="/" component={ Home } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
