function repeteMais(arr) {
  let counter = {};

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (!counter[cur]) {
      counter[cur] = 1;
    } else {
      counter[cur] += 1;
    }
  }
  
  let maiorRepeticao = -1;
  let resultado = null;

  for (prop in counter) {
    if (counter[prop] > maiorRepeticao) {
      maiorRepeticao = counter[prop];
      resultado = prop;
    }
  }

  return resultado;
}

console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]));