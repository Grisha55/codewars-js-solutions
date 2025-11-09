/**
 * @function peopleWithAgeDrink
 * @param {number} old
 * @returns {string}
 */

function peopleWithAgeDrink(old) {
  if (old > 21) {
    return 'drink whisky';
  } else if (old >= 18) {
    return 'drink beer';
  } else if (old < 14) {
    return 'drink toddy';
  } else {
    return 'drink coke';
  }
}
