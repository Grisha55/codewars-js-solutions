/**
 * @function count
 * @param {string} string
 * @returns {object}
*/

function count(string) {
  if (!string) {
    return {};
  }
  
  let charsCountObject = {};
  for (char of string) {
    charsCountObject[char] = (charsCountObject[char] || 0) + 1;
  }
  return charsCountObject;
}