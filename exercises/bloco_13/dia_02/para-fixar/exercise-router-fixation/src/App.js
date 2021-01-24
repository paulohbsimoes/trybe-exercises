import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className={ styles.navbar }>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/users" render={ (props) =>
            <Users {...props} greetingMessage="Good Morning" /> } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    );
  }
}

export default App;
