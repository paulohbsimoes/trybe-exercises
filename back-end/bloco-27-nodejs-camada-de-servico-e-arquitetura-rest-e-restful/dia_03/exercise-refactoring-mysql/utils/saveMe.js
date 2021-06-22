module.exports = (callback) => async (...args) => {
  try {
    return callback(...args);
  } catch (error) {
    console.error(error);
    return null;
  }
}
