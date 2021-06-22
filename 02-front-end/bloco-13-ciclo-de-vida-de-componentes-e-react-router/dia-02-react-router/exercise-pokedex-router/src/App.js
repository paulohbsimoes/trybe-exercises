import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Pokedex from './pages/Pokedex';
import About from './pages/About';
import Favorites from './pages/Favorites';
import PokemonDetails from './pages/PokemonDetails';
import PageNotFound from './pages/PageNotFound';

import pokemons from './data/data';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    }

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    this.setState({ favorites: ( favorites || [] ) });
  }
  
  updateStorage = () => {
    const { favorites } = this.state;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  handleToggleFavorite({ target }) {
    const { favorites } = this.state;
    const { dataset: { id } } = target;
    const numberId = +id;

    let newFavorites = null;
    if (favorites.includes(numberId)) {
      newFavorites = favorites.filter(favorite => favorite !== numberId);
    } else {
      newFavorites = [...favorites, numberId];
    }

    this.setState({
      favorites: newFavorites
    }, this.updateStorage)
  }

  render() {
    const { favorites } = this.state;
    return (
      <Router>
        <div className="App">
          <h1> Pokedex </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorite Pokemons</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route path="/about" component={ About } />

            <Route path="/pokemons/:id" render={ (props) => 
              <PokemonDetails
                { ...props }
                favorites={ favorites }
                handleToggleFavorite={ this.handleToggleFavorite }
              /> 
            } />

            <Route path="/favorites" render={ (props) => 
              <Favorites
                { ...props }
                favorites={ favorites }
                pokemons={ pokemons }
                handleToggleFavorite={ this.handleToggleFavorite }
              /> } 
            />

            <Route exact path="/" render={ (props) =>
              <Pokedex
                { ...props }
                pokemons={ pokemons }
                favorites={ favorites }
                handleToggleFavorite={ this.handleToggleFavorite }
              />
            } />

            <Route path="/" component={ PageNotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
