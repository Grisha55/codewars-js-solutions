/**
 * @function fakeBin
 * @param {string} x
 * @returns {string}
 */

function fakeBin(x) {
  let res = '';

  for (const char of x) {
    if (Number(char) < 5) {
      res += 0;
    } else {
      res += 1;
    }
  }

  return res;
}
