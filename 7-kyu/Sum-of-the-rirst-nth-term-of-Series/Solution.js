/**
 * @function SeriesSum
 * @param {number} n
 * @returns {string}
 */

function SeriesSum(n) {
  if (n === 1) {
    return '1.00';
  }

  let numRes = 0;
  let divider = 1;

  for (let i = 0; i < n; i++) {
    numRes += 1 / divider;
    divider += 3;
  }

  return numRes.toFixed(2);
}
