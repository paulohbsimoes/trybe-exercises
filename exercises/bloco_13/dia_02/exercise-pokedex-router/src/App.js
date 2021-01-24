import React from 'react';

import Pokedex from './pages/Pokedex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import pokemons from './data/data';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" render={ (props) =>
            <Pokedex {...props} pokemons={pokemons} /> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
