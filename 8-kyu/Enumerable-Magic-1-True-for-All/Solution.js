/**
 * @function all
 * @param {number[]} arr
 * @param {function} fun
 * @returns {boolean}
 */

function all(arr, fun) {
  if (arr.length === 0) return true;
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false;
    }
  }
  return true;
}
