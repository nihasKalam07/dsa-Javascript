// Here the time complexity is O(2^N)
function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));
