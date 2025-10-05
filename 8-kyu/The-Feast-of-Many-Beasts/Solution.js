/**
 * @function feast
 * @param {string} beast
 * @param {string} dish
 * @returns {boolean}
 */

function feast(beast, dish) {
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  }

  return false;
}
