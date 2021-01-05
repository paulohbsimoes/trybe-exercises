const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = arr => {
  for (let index = 0; index < arr.length; index += 1) {
    for (let innerIndex = 0; innerIndex < arr.length - index; innerIndex += 1) {
      if (arr[innerIndex] > arr[innerIndex + 1]) {
        const aux = arr[innerIndex];
        arr[innerIndex] = arr[innerIndex + 1];
        arr[innerIndex + 1] = aux;
      }
    }
  }
}

sortArray(oddsAndEvens);

console.log(oddsAndEvens);
