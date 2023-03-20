console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 1
console.log(power(2, 4)); // 1

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}
