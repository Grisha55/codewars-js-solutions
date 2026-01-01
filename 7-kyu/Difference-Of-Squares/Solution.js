function differenceOfSquares(n) {
  let squareSum = 0;
  let sumOfSquares = 0;

  for (let i = 0; i <= n; i++) {
    squareSum += i;
    sumOfSquares += i ** 2;
  }
  squareSum = Math.pow(squareSum, 2);

  return squareSum - sumOfSquares;
}
