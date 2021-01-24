import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Pokedex from './pages/Pokedex';
import About from './pages/About';
import Favorites from './pages/Favorites';
import PokemonDetails from './pages/PokemonDetails';
import PageNotFound from './pages/PageNotFound';

import pokemons from './data/data';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorite Pokemons</Link>
        </nav>
        <Switch>
          <Route path="/pokemons/:id" component={ PokemonDetails } />
          {/* <Route path="/pokemons" component={ PokemonDetails } /> */}
          <Route path="/about" component={ About } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/" render={ (props) =>
            <Pokedex {...props} pokemons={pokemons} /> } />
          <Route path="/" component={ PageNotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
