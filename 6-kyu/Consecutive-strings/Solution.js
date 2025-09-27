/**
 * @function longestConsec
 * @param {string[]} strarr
 * @param {number} k
 * @returns {string}
 */

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return '';

  let maxStr = '';

  for (let i = 0; i <= strarr.length - k; i++) {
    const currStr = strarr.slice(i, i + k).join('');

    if (currStr.length > maxStr.length) {
      maxStr = currStr;
    }
  }

  return maxStr;
}
