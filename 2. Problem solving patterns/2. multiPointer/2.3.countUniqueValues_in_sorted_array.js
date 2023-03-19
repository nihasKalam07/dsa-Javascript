function countUniqueValues(array) {
  let leftIndex = 0;
  let rightIndex = 1;

  while (rightIndex < array.length) {
    let leftNum = array[leftIndex];
    let rightNum = array[rightIndex];

    if (leftNum === rightNum) {
      rightIndex++; //increase right index by 1 when same values
    } else {
      leftIndex++; // increase left index by 1
      array[leftIndex] = array[rightIndex]; //then replace the value corresponds to the left index by the value corresponds to the right index
      rightIndex++; // then increase right index by 1
    }
  }

  return array.slice(0, leftIndex + 1);
  //if we need only the unique  numbers count, then return leftIndex + 1
}

let numbers = [-2, -1, 0, 1, 1, 1, 2, 5, 5, 10]; //7 unique values
let result = countUniqueValues(numbers);
console.log(result);

//can do this using for loop as well istead of while.
//iterate right index using the for loop and
// adjust leftIndex accordingly.
