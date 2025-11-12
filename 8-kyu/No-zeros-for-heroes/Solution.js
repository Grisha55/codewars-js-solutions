/**
 * @function noBoringZeros
 * @param {number} n
 * @returns {number}
 */

function noBoringZeros(n) {
  n = Number(n);
  if (n === 0) return 0;
  while (n % 10 === 0) {
    n = n / 10;
  }

  return n;
}
