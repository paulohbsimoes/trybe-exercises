function maiorNome(arr) {
  let resultado = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > resultado.length) {
      resultado = arr[i];
    }
  }
  return resultado;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));