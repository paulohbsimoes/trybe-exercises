function encode(message) {
  const code = ['a', 'e', 'i', 'o', 'u'];
  return message.replace(/[aeiou]/gi, letter => {
    return code.indexOf(letter) + 1;
  });
}

module.exports = encode;
