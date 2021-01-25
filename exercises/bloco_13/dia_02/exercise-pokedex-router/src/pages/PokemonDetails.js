import React, { Component } from 'react';

import Pokemon from '../components/Pokemon'

import pokemons from '../data/data';

import styles from './PokemonDetails.module.css';

class PokemonDetails extends Component {
  renderDetails(pokemon) {
    const { favorites, handleToggleFavorite } = this.props;
    return (
      <div className="pokemon-details">
        <h2>{ pokemon.name } Details</h2>
        <Pokemon
          detailsLink={ false }
          pokemon={ pokemon }
          favorite={ favorites.includes(pokemon.id) }
          handleToggleFavorite={ handleToggleFavorite }
        />
      </div>
    );
  }

  renderSummary(pokemon) {
    return (
      <div className="pokemon-summary">
        <h2>Summary</h2>
        <p>{ pokemon.summary }</p>
      </div>
    );
  }

  renderGameLocations(pokemon) {
    const { foundAt } = pokemon;
    return (
      <div className="pokemon-details">
        <h2>Game Locations of { pokemon.name }</h2>
        { foundAt.map(({ location, map }, index) => <div key={ index }>
            <img src={ map } alt={`${pokemon.name} map`} />
            <p>{ location }</p>
          </div>) }
      </div>
    );
  }

  renderFavorite(pokemon) {
    const { handleToggleFavorite, favorites } = this.props;
    return (
      <div className="pokemon-favorite">
        <label htmlFor="favorite">
          Pokemon favoritado? 
          <input
            id="favorite"
            name="favorite"
            type="checkbox"
            checked={ favorites.includes(pokemon.id) }
            data-id={ pokemon.id }
            onChange={ handleToggleFavorite }
          />
        </label>
      </div>
    );
  }

  renderPokemonInfo(pokemon) {
    return (
      <>
        { this.renderDetails(pokemon) }
        { this.renderSummary(pokemon) }
        { this.renderGameLocations(pokemon) }
        { this.renderFavorite(pokemon) }
      </>
    );
  }

  render() { 
    const { match: { params: { id } } } = this.props;
    const pokemon = pokemons.find(pokemon => pokemon.id === +id);
    return (
      <div className={ styles['pokemon-info'] }>
        { pokemon
          ? this.renderPokemonInfo(pokemon)
          : <p>Nenhum pokemon encontrado</p> }
      </div>
    );
  }
}
 
export default PokemonDetails;
