/**
 * @function repeatStr
 * @param {number} n
 * @param {string} s
 * @returns {string}
 */

function repeatStr(n, s) {
  let finalStr = '';

  for (let i = 0; i < n; i++) {
    finalStr += s;
  }

  return finalStr;
}