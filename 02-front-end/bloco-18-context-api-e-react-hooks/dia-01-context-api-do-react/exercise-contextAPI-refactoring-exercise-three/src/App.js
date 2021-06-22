import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Posts from './components/Posts';
import Selector from './components/Selector';

import { SelectedSubredditConsumer } from './contexts/SelectedSubredditContext';
import { PostsBySubredditConsumer } from './contexts/PostsBySubredditContext';

class App extends Component {
  componentDidMount() {
    const { selectedSubreddit, fetchPostsIfNeeded } = this.props;
    fetchPostsIfNeeded(selectedSubreddit)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { selectedSubreddit, fetchPostsIfNeeded } = this.props;
      fetchPostsIfNeeded(selectedSubreddit);
    }
  }

  selectSubreddit(nextSubreddit) {
    const { selectSubreddit } = this.props;
    selectSubreddit(nextSubreddit);
  }

  async handleRefreshClick(event) {
    event.preventDefault();

    const { refreshSubreddit, fetchPostsIfNeeded, selectedSubreddit } = this.props;
    await refreshSubreddit(selectedSubreddit);
    fetchPostsIfNeeded(selectedSubreddit);
  }

  renderLastUpdatedAt() {
    const { lastUpdated } = this.props;

    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { isFetching } = this.props;

    return (
      <button
        type="button"
        onClick={(event) => this.handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const {
      availableSubreddits,
      selectedSubreddit,
      posts = [],
      isFetching,
      lastUpdated,
    } = this.props;

    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector
          value={selectedSubreddit}
          onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
          options={availableSubreddits}
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={posts} />}
      </div>
    );
  }
}

App.propTypes = {
  availableSubreddits: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  selectedSubreddit: PropTypes.string.isRequired,
};

App.defaultProps = {
  lastUpdated: null,
  posts: [],
};

//Source: https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function
export default (props) => (
  <SelectedSubredditConsumer>
    { (subredditProps) => (
      <PostsBySubredditConsumer>
        { (postsProps) => {
          const { postsBySubreddit, availableSubreddits } = postsProps;
          const { selectedSubreddit, selectSubreddit } = subredditProps;
          const currentSubreddit = postsBySubreddit[selectedSubreddit];
          const { isFetching, lastUpdated, items: posts } = currentSubreddit;
          return (
            <App {
              ...{
                ...props,
                ...postsProps,
                selectSubreddit,
                selectedSubreddit,
                posts,
                isFetching,
                lastUpdated,
                availableSubreddits,
              }
            } />
          )
        }}
      </PostsBySubredditConsumer>
    ) }
  </SelectedSubredditConsumer>
);
