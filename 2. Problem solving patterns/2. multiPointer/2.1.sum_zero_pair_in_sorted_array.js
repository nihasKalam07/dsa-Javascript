function finsSumZero(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let leftNum = array[leftIndex];
    let rightNum = array[rightIndex];

    let sum = leftNum + rightNum;

    if (sum === 0) {
      return [leftNum, rightNum];
    } else if (sum > 0) {
      // means right number is large. then decrease the right index by 1.
      rightIndex--;
    } else {
      // left number is large(smaller in terms of negative number perspective)
      //   then increase the left index by 1.
      leftIndex++;
    }
  }
  return undefined;
}

var array = [-4, -3, -2, -1, 0, 1, 5, 5, 5];

let result = finsSumZero(array);
console.log(result);
