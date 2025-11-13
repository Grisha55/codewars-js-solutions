/**
 * @function remainder
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

function remainder(n, m) {
  if (n === 0 && m === 0) return NaN;
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  if (min === 0) return NaN;
  return max % min;
}
