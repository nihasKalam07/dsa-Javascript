// Here we are storing the values calculated for each fibinacci series index
// in an object(memoized method) and check next time if the value is already
// available for that index. If available, return the value.
// So time complexity is O(N)
// Space complexity ios worse.
// memoization approach
function fibonacci(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  let res = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  memo[num] = res;
  return res;
}

// memoization approach
//We can avoid the base condition  if (num <= 2) return 1; by
function fibonacci2(num, memo = [undefined, 1, 1]) {
  if (memo[num] !== undefined) return memo[num];
  let res = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  memo[num] = res;
  return res;
}

// Tabulated approach. Using iteration. Advantage over recusrsive
// memoization approach is that it doesn't have any issue of maximum call stack
// size exeeded issue due to the recusrsive calls.
// time complexity is O(N)
// Space complexity is better as compared to the memoized approach.
function fib(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

let res = fibonacci(100);
console.log(res);
