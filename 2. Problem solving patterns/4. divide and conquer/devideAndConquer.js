function search(array, number) {
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);

    let currentElement = array[middleIndex];

    if (number < currentElement) {
      maxIndex = middleIndex - 1;
    } else if (number > currentElement) {
      minIndex = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
}

//array is sorted
let array = [2, 3, 4, 8, 10, 15, 19];
console.log(search(array, 8));
