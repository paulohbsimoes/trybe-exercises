function decode(encodedMessage) {
  const code = ['a', 'e', 'i', 'o', 'u'];
  return encodedMessage.replace(/[12345]/gi, letter => {
    const index = parseInt(letter);
    return code[index - 1];
  });
}

module.exports = decode;
