/**
 * @function invert
 * @param {number[]} array
 * @returns {number[]}
 */

function invert(array) {
  let res = Array(array.length);

  for (num of array) {
    res.push(num * -1);
  }

  return res;
}
