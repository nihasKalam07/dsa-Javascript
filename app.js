function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let sortedArray = bubbleSort([20, 2, 4, 10, 1, 5, 3]);
console.log(sortedArray);
