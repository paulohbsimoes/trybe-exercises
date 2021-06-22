import React, { Component } from 'react';
import styles from './Pokemon.module.css';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() { 
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
      <div className={styles.card}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <img src={image} alt={name}/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}

export default Pokemon;
