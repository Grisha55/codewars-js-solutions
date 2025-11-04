/**
 * @function stringClean
 * @param {string} s
 * @returns {string}
 */

function stringClean(s) {
  let res = '';
  const nums = '0123456789';

  for (let i = 0; i < s.length; i++) {
    if (!nums.includes(s[i])) {
      res += s[i];
    }
  }

  return res;
}
