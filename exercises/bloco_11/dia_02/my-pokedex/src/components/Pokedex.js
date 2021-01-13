import React, { Component } from 'react';
import Pokemon from './Pokemon';
import styles from './Pokedex.module.css';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div className={styles.pokedex}>
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default Pokedex;
