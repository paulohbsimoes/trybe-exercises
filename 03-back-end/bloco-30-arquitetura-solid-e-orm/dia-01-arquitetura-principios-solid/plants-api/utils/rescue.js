module.exports = (callback) => async (...args) => {
  const next = args.pop();
  try {
    await callback(...args);
  } catch (error) {
    next(error)
  }
}
