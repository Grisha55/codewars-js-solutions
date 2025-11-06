/**
 * @function addLength
 * @param {string} str
 * @returns {string[]}
 */

function addLength(str) {
  let res = [];
  let strArr = str.split(' ');

  for (const s of strArr) {
    res.push(s + ' ' + lenghtIs(s));
  }

  return res;
}

/**
 * @function lengthIs
 * @param {string} str
 * @returns {number}
 */
function lenghtIs(str) {
  return str.length;
}
