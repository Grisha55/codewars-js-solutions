/**
 * @function duplicateEncode
 * @param {string} word
 * @returns {string}
 */

function duplicateEncode(word) {
  let charDict = {};
  let finalStr = '';
  const copyWord = word.toLowerCase();

  for (const char of copyWord) {
    if (charDict[char]) {
      charDict[char]++;
    } else {
      charDict[char] = 1;
    }
  }

  for (const char of copyWord) {
    if (charDict[char] === 1) {
      finalStr += '(';
    } else {
      finalStr += ')';
    }
  }

  return finalStr;
}
