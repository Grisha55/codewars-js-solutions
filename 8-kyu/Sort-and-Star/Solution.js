/**
 * @function twoSort
 * @param {string[]} s
 * @returns {string}
 */

function twoSort(s) {
  const sortedArr = s.sort();
  let res = '';

  for (const char of s[0]) {
    res += char + '***';
  }

  return res.slice(0, res.length - 3);
}
