import React from 'react';
import PropTypes from 'prop-types';

const Digimon = ({ digimon }) => (
  <div data-testid="digimon">
    <h2 data-testid="digimonName">{digimon.name}</h2>
    <p data-testid="digimonLevel">level: {digimon.level}</p>
    <img src={digimon.img} alt={digimon.name} />
  </div>
);

export default Digimon;

Digimon.prototype = PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.number,
  img: PropTypes.string,
}).isRequired;
