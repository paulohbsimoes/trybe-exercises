function maior(arr) {
  let indice = -1;
  let atual = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > atual) {
      atual = arr[i];
      indice = i;
    }
  }
  return indice;
}

console.log(maior([2, 3, 6, 7, 10, 1]));