/**
 * @function countSheep
 * @param {number} num
 * @returns {string}
 */

var countSheep = function (num) {
  let str = '';

  for (let i = 0; i < num; i++) {
    str += `${i + 1} sheep...`;
  }

  return str;
};
