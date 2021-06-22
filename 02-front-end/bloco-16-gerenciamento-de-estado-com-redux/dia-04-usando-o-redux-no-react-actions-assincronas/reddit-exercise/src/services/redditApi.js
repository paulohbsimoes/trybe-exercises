const BASE_URL = 'https://www.reddit.com/r';

const fetchPosts = (subreddit) => (
  fetch(`${BASE_URL}/${subreddit}.json`)
    .then((response) => response.json())
);

export default fetchPosts;
