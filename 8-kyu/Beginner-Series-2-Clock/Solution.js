/**
 * @function past
 * @param {number} h
 * @param {number} m
 * @param {number} s
 * @returns {number}
 */

function past(h, m, s) {
  const minutes = h * 60 + m;
  const seconds = minutes * 60 + s;
  return seconds * 1000;
}
