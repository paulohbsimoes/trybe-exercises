import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    const { character, loading, error } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

CharacterInfo.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    gente: PropTypes.string,
    aliases: PropTypes.array,
    books: PropTypes.array,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

const mapStateToProps = ({ character }) => ({
  character: character.current,
  loading: character.isFetching,
  error: character.error
})

export default connect(mapStateToProps)(CharacterInfo);
