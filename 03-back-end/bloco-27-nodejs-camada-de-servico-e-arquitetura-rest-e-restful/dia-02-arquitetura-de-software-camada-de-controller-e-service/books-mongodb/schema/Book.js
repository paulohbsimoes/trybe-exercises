const createError = (message) => ({
  err: {
    code: 'invalid_data',
    message
  }
})

module.exports = (book) => {
  if (!book.title) return createError('É obrigatório informar o título');
  if (book.title.length < 3) return createError('O título deve ter 3 ou mais caracteres');
  if (!book.authorId) return createError('É obrigatório informar o authorId');
  return null;
}
