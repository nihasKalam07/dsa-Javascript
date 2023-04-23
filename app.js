/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let temp = nums.slice();
  let sorted = nums.sort((num1, num2) => {
    return num1 - num2;
  });

  let firstIndex = 0;
  let lastIndex = sorted.length - 1;

  while (firstIndex < lastIndex) {
    let sum = sorted[firstIndex] + sorted[lastIndex];
    if (sum > target) {
      lastIndex--;
    } else if (sum < target) {
      firstIndex++;
    } else if (sum === target) {
      break;
    }
  }

  let num1 = sorted[firstIndex];
  let num2 = sorted[lastIndex];

  console.log("unsorted", temp);

  console.log("---------------------");
  console.log("sorted", sorted);
  console.log("indices", firstIndex, lastIndex);
  console.log("numbers", num1, num2);
  let result = [];
  let idx1 = temp.indexOf(num1);
  let idx2;
  if (num1 === num2) {
    idx2 = temp.indexOf(num2, idx1 + 1);
  } else {
    idx2 = temp.indexOf(num2);
  }

  console.log("unsroeted indices", idx1, idx2);
  return [idx1, idx2];
};

let nums = [2, 7, 11, 15];
twoSum(nums, 9);

let nums1 = [3, 2, 4];
twoSum(nums1, 6);
