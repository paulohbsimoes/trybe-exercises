import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

Image.propTypes = {
  source: PropTypes.string,
  alternativeText: PropTypes.string
}

export default Image;

// 1. Qual o nome do componente declarado acima?
// O nome do componente é Image
