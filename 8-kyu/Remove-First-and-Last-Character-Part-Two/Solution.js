/**
 * @function array
 * @param {string} string
 * @returns {string}
 */

function array(string) {
  if (string.split(',').length <= 2) {
    return null;
  }
  return string.split(',').slice(1, -1).join(' ');
}
