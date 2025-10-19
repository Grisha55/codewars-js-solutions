/**
 * @function grow
 * @param {number[]} x
 * @returns {number}
 */

function grow(x) {
  const sum = x.reduce((acc, num) => acc * num);
  return sum;
}
