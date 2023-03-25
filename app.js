function getDigitBasedOnString(num, place) {
  let str = num.toString();
  let result = str[str.length - 1 - place];
  console.log(result);
  return result;
}

function digitCountBasedOnString(num) {
  return num.toString().length;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  console.log("initial array", arr);
  let maxDigitCount = mostDigits(arr);
  console.log("most digits", maxDigitCount);

  for (let i = 0; i < maxDigitCount; i++) {
    // let bucket = [[], [], [], [], [], [], [], [], [], []];
    let bucket = Array.from({ length: 10 }, () => ["Hello"]);

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    console.log("bucket", bucket);

    // Spread operator adds each elemnents of subarrays the to arr
    arr = [].concat(...bucket);
    // If we don't use spread operator, the bucket array will be added to the arr
    //  with its subarrays
    arr = [].concat(bucket);

    //   while (arr.length > 0) {
    //     arr.pop();
    //   }
    //   console.log("popped array final", arr);

    //   console.log("bucket length", bucket.length);
    //   for (let k = 0; k < bucket.length; k++) {
    //     let subBucket = bucket[k];
    //     console.log("subbucket", subBucket);
    //     for (let l = 0; l < subBucket.length; l++) {
    //       arr.push(subBucket[l]);
    //     }
    //   }
    //   console.log("pushed array", arr);
  }

  return arr;
}

let sorted = radixSort([3, 250, 2, 1, 115, 10, 1000]);
console.log(sorted);
