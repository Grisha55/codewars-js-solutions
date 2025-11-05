/**
 * @function reverse
 * @param {string} string
 * @returns {string}
 */

function reverse(string) {
  const res = string.split(' ').reverse().join(' ');
  return res;
}
