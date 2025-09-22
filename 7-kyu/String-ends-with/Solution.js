/**
 * @function solution
 * @param {string} str
 * @param {string} ending
 * @returns {boolean}
 */

function solution(str, ending) {
  if (str === ending || (str.length === 0 && ending.length === 0)) return true;
  if (str === 'empty string' && ending === '') {
    return true;
  } else if (str === '' && ending === 'empty string') {
    return false;
  } else if (str.length < ending.length) return false;

  let idx = ending.length - 1;

  for (let i = str.length - 1; i >= 0; i--) {
    if (idx >= 0) {
      if (str[i] !== ending[idx]) {
        return false;
      }
      idx--;
    }
  }

  return true;
}
