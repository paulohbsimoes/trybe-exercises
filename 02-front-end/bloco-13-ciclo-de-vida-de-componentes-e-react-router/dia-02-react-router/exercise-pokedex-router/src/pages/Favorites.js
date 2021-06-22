import React, { Component } from 'react';

import Pokemon from '../components/Pokemon';

import styles from './Favorites.module.css';

class Favorites extends Component {
  render() { 
    const { favorites, pokemons, handleToggleFavorite } = this.props;
    const favoritedPokemons = pokemons.filter(pokemon => favorites.includes(pokemon.id));
    return (
      <>
        <h1>Favorites</h1>
        { favoritedPokemons.length
          ? <div className={ styles.pokemonsContainer }>
            { favoritedPokemons.map(pokemon => (
              <Pokemon
                favorite
                detailsLink
                pokemon={ pokemon }
                key={ pokemon.id }
                handleToggleFavorite={ handleToggleFavorite }
              />
            )) }
          </div>
          : <p>Você não tem pokemons favoritos, que pena kkkk'</p>
        }
      </>
    );
  }
}
 
export default Favorites;
