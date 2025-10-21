/**
 * @function remove
 * @param {string} string
 * @returns {string}
 */

function remove(string) {
  return string[string.length - 1] === '!'
    ? string.slice(0, string.length - 1)
    : string;
}
