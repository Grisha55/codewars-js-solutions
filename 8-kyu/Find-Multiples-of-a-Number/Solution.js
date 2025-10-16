/**
 * @function findMultiples
 * @param {number} integer
 * @param {number} limit
 * @returns {number[]}
 */

function findMultiples(integer, limit) {
  let res = [integer];
  const plus = integer;

  while (res[res.length - 1] + plus <= limit) {
    res.push(res[res.length - 1] + plus);
  }

  return res;
}
