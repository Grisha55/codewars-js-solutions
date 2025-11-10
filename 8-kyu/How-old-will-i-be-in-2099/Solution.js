/**
 * @function calculateAge
 * @param {number} borth
 * @param {number} year
 * @returns {string}
 */

function calculateAge(borth, year) {
  const res = year - borth;
  if (res > 1) {
    return `You are ${res} years old.`;
  } else if (res < -1) {
    return `You will be born in ${Math.abs(res)} years.`;
  } else if (res === 1) {
    return 'You are 1 year old.';
  } else if (res === -1) {
    return 'You will be born in 1 year.';
  } else {
    return 'You were born this very year!';
  }
}
