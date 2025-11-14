/**
 * @function minValue
 * @param {number[]} values
 * @returns {number}
 */

function minValue(values) {
  let resArr = values
    .sort((a, b) => a - b)
    .filter((num, idx, arr) => num !== arr[idx + 1]);
  return Number(resArr.join(''));
}
