import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RedditActions } from './store/ducks/reddit';

const subredditOptions = ['reactjs', 'frontend'];

function App({
  posts, isFetching, fetchPosts, lastUpdate, error,
}) {
  const [subreddit, setSubreddit] = useState('reactjs');

  useEffect(() => {
    fetchPosts(subreddit);
  }, []);

  return (
    <>
      <h2>{ `Selected: ${subreddit}` }</h2>
      <p>{ `Last updated at ${lastUpdate}`}</p>
      <select
        name="subreddit"
        value={subreddit}
        onChange={({ target: { value } }) => {
          setSubreddit(value);
          fetchPosts(value);
        }}
      >
        { subredditOptions.map((subredditOption, index) => (
          <option
            key={index}
            value={subredditOption}
          >
            { subredditOption }
          </option>
        ))}
      </select>
      <button type="button" onClick={() => fetchPosts(subreddit)}>Refresh</button>
      { isFetching && <p>Loading...</p> }
      { error && <p>{ error }</p>}
      { !isFetching && !error
        && (
        <ul>
          { !isFetching && posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
        )}
    </>
  );
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPosts: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(RedditActions, dispatch));

const mapStateToProps = ({ reddit }) => ({
  posts: reddit.posts,
  isFetching: reddit.isFetching,
  lastUpdate: reddit.lastUpdate,
  error: reddit.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
