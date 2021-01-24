import React, { Component } from 'react';

import Pokemon from '../components/Pokemon'

import pokemons from '../data/data';

import styles from './PokemonDetails.module.css';

class PokemonDetails extends Component {
  renderDetails(pokemon) {
    return (
      <div className="pokemon-details">
        <h2>{ pokemon.name } Details</h2>
        <Pokemon detailsLink={ false } pokemon={ pokemon } />
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

  renderPokemonInfo(pokemon) {
    return (
      <>
        { this.renderDetails(pokemon) }
        { this.renderSummary(pokemon) }
        { this.renderGameLocations(pokemon) }
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
