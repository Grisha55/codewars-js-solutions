/**
 * @function dirReduc
 * @param {string[]} arr
 * @returns {string[]}
 */

function dirReduc(arr) {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  let result = [];

  for (let direction of arr) {
    if (
      result.length > 0 &&
      result[result.length - 1] === opposites[direction]
    ) {
      result.pop();
    } else {
      result.push(direction);
    }
  }

  return result;
}
