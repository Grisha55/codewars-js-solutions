/**
 * @function XO
 * @param {string} str
 * @returns {boolean}
 */

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (const char of str) {
    if (char.toLowerCase() === 'x') {
      xCount++;
    } else if (char.toLowerCase() === 'o') {
      oCount++;
    }
  }

  return xCount == oCount;
}
