import React from 'react';

import styles from './Pokemon.module.css';

import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight,
      image, id } = this.props.pokemon;
    const { detailsLink, favorite, handleToggleFavorite } = this.props;
    return (
      <div className={ styles.pokemon }>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          { detailsLink && <p><Link to={`/pokemons/${id}`}>More details</Link></p> }
          <span
            className={ styles.favorited }
            role="img"
            aria-label="emoji"
            data-id={ id }
            onClick={ handleToggleFavorite }
          > 
            { favorite ? '\u2605' : '\u2606' }
          </span>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
