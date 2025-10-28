/**
 * @function isPalindrome
 * @param {string} x
 * @returns {boolean}
 */

function isPalindrome(x) {
  if (x.length === 1 || x === '') return true;
  if (x.length === 2) return false;

  for (let i = 0; i < x.length; i++) {
    if (x[i].toLowerCase() !== x[x.length - 1 - i].toLowerCase()) {
      return false;
    }
  }

  return true;
}
