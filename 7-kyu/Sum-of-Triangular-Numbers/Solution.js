/**
 * @function sumTriangularNumbers
 * @param {number} n
 * @returns {number}
 */

function sumTriangularNumbers(n) {
  if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += (i * (i + 1)) / 2;
    }
    return sum;
  }
  return 0;
}
