import getPosts from '../../services/redditApi';

export const Types = {
  IS_FETCHING: 'IS_FETCHING',
  ERROR_FETCHING: 'ERROR_FETCHING',
  SAVE_POSTS: 'SAVE_POSTS',
};

const INITIAL_STATE = {
  isFetching: false,
  lastUpdate: '',
  subreddit: '',
  error: '',
  posts: [],
};

const reddit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.IS_FETCHING: return {
      ...state,
      isFetching: true,
      error: '',
    };

    case Types.ERROR_FETCHING: return {
      ...state,
      isFetching: false,
      error: action.payload,
    };

    case Types.SAVE_POSTS: return {
      ...state,
      isFetching: false,
      posts: action.payload,
      lastUpdate: new Date().toLocaleString('pt-br'),
    };

    default: return state;
  }
};

export const Creators = {
  startFetching: () => ({
    type: Types.IS_FETCHING,
  }),

  errorFetching: (error) => ({
    type: Types.ERROR_FETCHING,
    payload: error,
  }),

  savePosts: (posts) => ({
    type: Types.SAVE_POSTS,
    payload: posts,
  }),

  fetchPosts: (subreddit) => async (dispatch) => {
    dispatch(Creators.startFetching());
    try {
      const posts = await getPosts(subreddit);
      const postsData = posts.data.children.map(({ data }) => data);
      dispatch(Creators.savePosts(postsData));
    } catch (error) {
      dispatch(Creators.errorFetching(error.message));
    }
  },
};

export default reddit;
