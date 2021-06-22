import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CharacterActions } from '../actions/character.js';

import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { fetchCharacter } = this.props;

  this.setState({
    inputText: '',
    characterSearched: inputText,
  }, () => {
    fetchCharacter(this.state.characterSearched);
  })
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input 
          onChange={this.handleChange} 
          placeholder="Enter Character"
          value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

SearchForm.propTypes = {
  fetchCharacter: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators(CharacterActions, dispatch);

const mapStateToProps = ({ character }) => ({
  current: character.current,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
