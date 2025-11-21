/**
 * @function noOdds
 * @param {number[]} values
 * @returns {number[]}
 */

function noOdds(values) {
  return values.filter((num) => num % 2 === 0);
}
