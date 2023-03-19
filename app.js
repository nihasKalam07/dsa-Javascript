function factorial(num) {
  if (num < 1) {
    return 0;
  }

  return num * factorial(num - 1);
}
