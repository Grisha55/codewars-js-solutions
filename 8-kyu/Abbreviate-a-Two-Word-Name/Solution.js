/**
 * @function abbrevName
 * @param {string} name
 * @returns {string}
 */

function abbrevName(name) {
  const arr = name.split(' ');
  const firstLetter = arr[0][0].toUpperCase();
  const secondLetter = arr[1][0].toUpperCase();
  return firstLetter + '.' + secondLetter;
}
