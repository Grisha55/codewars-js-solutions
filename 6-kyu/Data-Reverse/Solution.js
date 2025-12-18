/**
 * @function dataReverse
 * @param {number[]} data
 * @returns {number[]}
 */

function dataReverse(data) {
  const result = [];
  for (let i = data.length; i > 0; i -= 8) {
    result.push(...data.slice(i - 8, i));
  }
  return result;
}
