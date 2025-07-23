/**
 * @function filter_list
 * @param {string} l
 * @returns {number[]}
*/

function filter_list(l) {
  const newArr = l.filter((num) => typeof(num) === 'number')
  return newArr
}