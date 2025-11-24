/**
 * @function contamination
 * @param {string} text
 * @param {string} char
 * @returns {string}
 */

function contamination(text, char) {
  if (text.length === 0 || char.length === 0) return '';

  const res = ''.padStart(text.length, char);
  return res;
}
