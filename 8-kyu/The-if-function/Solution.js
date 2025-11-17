/**
 * @function _if
 * @param {boolean} bool
 * @param {function} func1
 * @param {function} func2
 * @returns {string}
 */

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}
