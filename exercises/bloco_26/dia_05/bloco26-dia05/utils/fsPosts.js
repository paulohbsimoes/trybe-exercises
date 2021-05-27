const path = require('path');
const { getFileContent, setFileContent } = require('./fs');

const POSTS_FILE_PATH = path.resolve(__dirname, '..', 'data', 'posts.json');

const getPosts = async () => await getFileContent(POSTS_FILE_PATH);

const setPosts = async (newPosts) => await setFileContent(POSTS_FILE_PATH, newPosts);

module.exports = {
  getPosts,
  setPosts
}
