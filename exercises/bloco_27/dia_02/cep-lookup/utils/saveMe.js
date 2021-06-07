module.exports = (callback) => async (...args) => {
  try {
    const result = await callback(...args);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
