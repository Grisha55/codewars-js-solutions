/**
 * @function distinct
 * @param {number[]} a
 * @returns {number[]}
 */

function distinct(a) {
  const res = new Set(a);
  return Array.from(res);
}
