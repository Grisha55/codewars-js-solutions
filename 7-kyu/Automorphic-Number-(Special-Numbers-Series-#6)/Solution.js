/**
 * @function automorphic
 * @param {number} n
 * @returns {string}
 */

function automorphic(n) {
  let squared = (n * n).toString();
  let strN = n.toString();

  if (squared.endsWith(strN)) {
    return 'Automorphic';
  }

  return 'Not!!';
}
