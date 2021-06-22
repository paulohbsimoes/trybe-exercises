import React from 'react';
import PropTypes from 'prop-types';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = ({ value, onChange, options }) => (
  <span>
    <h1>{`Selected: ${value}`}</h1>
    <select
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      {renderOptions(options)}
    </select>
  </span>
);

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  value: PropTypes.string.isRequired,
};

export default Selector;