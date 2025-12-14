/**
 * @function remove
 * @param {string} string
 * @returns {string}
 */

function remove(string) {
  return string.replace(/!+$/, '');
}
