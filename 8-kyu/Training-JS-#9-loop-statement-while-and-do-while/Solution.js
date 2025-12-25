/**
 * @function padIt
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */

function padIt(str, n) {
  let center = Math.round(n / 2);
  let res = '';
  let i = 0;

  while (i < n) {
    if (i % 2 === 0) {
      str = '*' + str;
    } else {
      str = str + '*';
    }
    i++;
  }

  return str;
}
