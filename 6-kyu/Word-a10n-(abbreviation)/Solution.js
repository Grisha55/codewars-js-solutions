/**
 * @function abbreviate
 * @param {string} string
 * @returns {string}
 */

function abbreviate(str) {
  return str.replace(
    /[a-zA-Z]{4,}/g,
    (word) => word[0] + (word.length - 2) + word[word.length - 1]
  );
}
