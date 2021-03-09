import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Button extends Component {
  render() {
    const { getImage } = this.props;
    return (
      <button
        type="button"
        onClick={ () => getImage() }
      >
        Find a cat!
      </button>
    );
  }
}

Button.propTypes = {
  getImage: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getImage: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Button);
