/**
 * @function reverseSeq
 * @param {number} n
 * @returns {number[]}
 */

const reverseSeq = (n) => {
  let res = [];
  for (let i = n; i > 0; i--) {
    res.push(i);
  }
  return res;
};
