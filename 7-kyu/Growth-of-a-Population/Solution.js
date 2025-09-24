/**
 * @function nbYear
 * @param {number} p0
 * @param {number} percent
 * @param {number} aug
 * @param {number} p
 * @returns {number}
 */

function nbYear(p0, percent, aug, p) {
  let curr = p0;
  let count = 0;

  while (curr < p) {
    curr = Math.floor(curr + curr * (percent / 100) + aug);
    count++;
  }

  return count;
}
