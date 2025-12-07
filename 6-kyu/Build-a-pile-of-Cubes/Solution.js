/**
 * @function findNb
 * @param {number} m
 * @returns {number}
 */

function findNb(m) {
  let n = 0;
  let totalVolume = 0;

  while (totalVolume < m) {
    n++;
    totalVolume += Math.pow(n, 3);
  }

  if (totalVolume === m) {
    return n;
  }

  return -1;
}
