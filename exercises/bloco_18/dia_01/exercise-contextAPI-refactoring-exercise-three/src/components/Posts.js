import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({ posts }) => (
  <ul>
    {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Posts;