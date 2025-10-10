/**
 * @function getMiddle
 * @param {string} s
 * @returns {string}
 */

function getMiddle(s) {
  let n = s.length;
  let res = '';

  if (n % 2 === 0) {
    let firstIdx = Math.floor((n - 1) / 2);
    let secondIdx = Math.round((n - 1) / 2);
    res += s[firstIdx] + s[secondIdx];
  } else {
    res += s[Math.floor((n - 1) / 2)];
  }

  return res;
}
