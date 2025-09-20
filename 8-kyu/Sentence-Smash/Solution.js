/**
 * @function smash
 * @param {string[]} words
 * @returns {string}
 */

function smash(words) {
  let finalStr = '';

  for (const str of words) {
    finalStr += str + ' ';
  }

  return finalStr.trim();
}
