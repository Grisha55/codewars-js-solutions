/**
 * @function oddOrEven
 * @param {number[]} array
 * @returns {string}
 */

function oddOrEven(array) {
  if (array.length === 0) return 'even';
  const sum = array.reduce((acc, num) => acc + num);
  return sum % 2 === 0 ? 'even' : 'odd';
}
