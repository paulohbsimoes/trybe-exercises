import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import styles from './Pokedex.module.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    
    this.initialState = {
      index: 0,
      pokemons: this.props.pokemons,
      filter: 'All'
    };

    this.state = this.initialState;

    this.pokemonTypes = this.state.pokemons
      .map(pokemon => pokemon.type)
      .reduce((acc, cur) => {
        !acc.includes(cur) && acc.push(cur);
        return acc;
      }, []);

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleAll = this.handleAll.bind(this);
    this.handleSelectType = this.handleSelectType.bind(this);
    this.getPokemonsByType = this.getPokemonsByType.bind(this);
  }

  handlePrevious() {
    this.setState((previousState, _props) => {
      const { index, pokemons } = previousState;
      const newIndex = index - 1;
      return { index: newIndex < 0 ? pokemons.length - 1 : newIndex };
    });
  }

  handleNext() {
    this.setState((previousState, _props) => {
      const { index, filter } = previousState;
      const length = this.getPokemonsByType(filter).length;
      return { index: (index + 1) % length };
    });
  }

  handleAll() {
    this.handleSelectType('All');
  }

  handleSelectType(type) {
    this.setState({ filter: type, index: 0 })
  }

  getPokemonsByType(type) {
    const { pokemons } = this.state;
    return pokemons.filter(pokemon => type === 'All' || pokemon.type === type)
  }

  render() {
    const { index, filter } = this.state;

    let filteredPokemons = this.getPokemonsByType(filter);

    const current = filteredPokemons[index];
    const disabled = filteredPokemons.length < 2;

    return (
      <div className={styles.pokedex}>
        <Pokemon key={current.id} pokemon={current} />
        <div className={styles.types}> 
          <Button handleClick={this.handleAll}>All</Button>
          { this.pokemonTypes.map(type => 
            <Button handleClick={() => { this.handleSelectType(type) }} key={ type }>{type}</Button>) } 
        </div>
        <div className="controls">
          <Button color="green" disabled={disabled} handleClick={this.handlePrevious}>Previous</Button>
          <Button color="green" disabled={disabled} handleClick={this.handleNext}>Next</Button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
