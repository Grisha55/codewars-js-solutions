/**
 * @function problem
 * @param {number} x
 * @returns {number}
 */

function problem(x) {
  if (typeof x === 'string') {
    return 'Error';
  }

  return x * 50 + 6;
}