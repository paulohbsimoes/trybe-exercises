import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

import pokemons from './data/data';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Pokedex </h1>
        <Switch>
          <Route path="/pokemons/:id" component={ PokemonDetails } />
          {/* <Route path="/pokemons" component={ PokemonDetails } /> */}
          <Route exact path="/" render={ (props) =>
            <Pokedex {...props} pokemons={pokemons} /> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
