const myToUpperCase = str => {
  let result = '';
  for (let index = 0; index < str.length; index += 1) {
    let code = str.charCodeAt(index);
    code = code >= 97 && code <= 122 ? code - 32 : code;
    result += String.fromCharCode(code);
  }
  return result;
}

const justTheFirstLetter = str => str[0];

const concatStrings = (strA, strB) => strA + strB;

module.exports = {
  myToUpperCase,
  justTheFirstLetter,
  concatStrings
}
