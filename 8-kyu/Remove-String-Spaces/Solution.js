/**
 * @function noSpace
 * @param {string} x
 * @returns {string}
 */

function noSpace(x) {
  const withoutSpaces = x.replace(/\s/g, '');
  return withoutSpaces;
}