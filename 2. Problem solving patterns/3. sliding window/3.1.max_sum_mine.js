function maxSubarraySum(array, num) {
  if (num > array.length) {
    return null;
  }

  let leftIndex = 0;
  let rightIndex = num - 1;

  let maxSum = 0;
  for (i = leftIndex; i <= rightIndex; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  while (rightIndex < array.length - 1) {
    tempSum -= array[leftIndex];
    leftIndex++;
    rightIndex++;
    tempSum += array[rightIndex];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

let result = maxSubarraySum([2, 3, 4, 2, 5, 6, 9], 3);
console.log(result);
