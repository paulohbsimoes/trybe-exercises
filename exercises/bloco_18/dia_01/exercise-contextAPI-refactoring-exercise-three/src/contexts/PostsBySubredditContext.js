import React, { createContext, Component } from 'react';

import { getPostsBySubreddit } from '../services/redditAPI';

const PostsBySubredditContext = createContext();

export const PostsBySubredditConsumer = PostsBySubredditContext.Consumer;

const INITIAL_POSTS_STATE = {
  shouldRefreshSubreddit: false,
  isFetching: false,
};

const INITIAL_POSTS_BY_SUBREDDIT_STATE = {
  frontend: { ...INITIAL_POSTS_STATE },
  reactjs: { ...INITIAL_POSTS_STATE },
};

export class PostsBySubredditProvider extends Component {
  constructor() {
    super();
    
    this.state = {
      postsBySubreddit: INITIAL_POSTS_BY_SUBREDDIT_STATE
    }

    this.refreshSubreddit = this.refreshSubreddit.bind(this);
    this.requestPosts = this.requestPosts.bind(this);
    this.receivePostsSuccess = this.receivePostsSuccess.bind(this);
    this.receivePostsFailure = this.receivePostsFailure.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.shouldFetchPosts = this.shouldFetchPosts.bind(this);
    this.fetchPostsIfNeeded = this.fetchPostsIfNeeded.bind(this);
  }

  refreshSubreddit(subreddit) {
    return new Promise((resolve) => {
      this.setState(({ postsBySubreddit }) => {
        const itemToUpdate = postsBySubreddit[subreddit];
        return {
          postsBySubreddit: {
            ...postsBySubreddit,
            [subreddit]: {
              ...itemToUpdate,
              shouldRefreshSubreddit: true,
            }
          }
        }
      }, () => resolve());
    })
  }

  requestPosts(subreddit) {
    this.setState(({ postsBySubreddit }) => {
      const itemToUpdate = postsBySubreddit[subreddit];
      return {
        postsBySubreddit: {
          ...postsBySubreddit,
          [subreddit]: {
            ...itemToUpdate,
            shouldRefreshSubreddit: false,
            isFetching: true,
          }
        }
      }
    });
  }

  receivePostsSuccess(subreddit, json) {
    this.setState(({ postsBySubreddit }) => {
      const itemToUpdate = postsBySubreddit[subreddit];
      return {
        postsBySubreddit: {
          ...postsBySubreddit,
          [subreddit]: {
            ...itemToUpdate,
            items: json.data.children.map((child) => child.data),
            isFetching: false,
            lastUpdated: Date.now(),
            shouldRefreshSubreddit: false,
          }
        }
      }
    });
  }

  receivePostsFailure(subreddit, error) {
    this.setState(({ postsBySubreddit }) => {
      const itemToUpdate = postsBySubreddit[subreddit];
      return {
        postsBySubreddit: {
          ...postsBySubreddit,
          [subreddit]: {
            ...itemToUpdate,
            error,
            items: [],
            isFetching: false,
            shouldRefreshSubreddit: false,
          }
        }
      }
    });
  }

  fetchPosts(subreddit) {
    this.requestPosts(subreddit);

    return getPostsBySubreddit(subreddit).then(
      (posts) => this.receivePostsSuccess(subreddit, posts),
      (error) => this.receivePostsFailure(subreddit, error.message),
    );
  }
  
  shouldFetchPosts(subreddit) {
    const { postsBySubreddit } = this.state;
    const posts = postsBySubreddit[subreddit];
  
    if (!posts.items) return true;
    if (posts.isFetching) return false;
    return posts.shouldRefreshSubreddit;
  };
  
  fetchPostsIfNeeded(subreddit) {
    this.shouldFetchPosts(subreddit) && this.fetchPosts(subreddit);
  }

  render() {
    const { fetchPostsIfNeeded, refreshSubreddit } = this;
    const { postsBySubreddit } = this.state;
    return (
      <PostsBySubredditContext.Provider value={ {
        ...this.state,
        fetchPostsIfNeeded,
        refreshSubreddit,
        availableSubreddits: Object.keys(postsBySubreddit)
      } }>
        { this.props.children }
      </PostsBySubredditContext.Provider>
    )
  }
}

export default PostsBySubredditContext;
