/**
 * @function duplicateCount
 * @param {string} text
 * @returns {number}
*/

function duplicateCount(text) {
  const lowerText = text.toLowerCase();
  const charCount = {};
  let duplicates = 0;

  for (const char of lowerText) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char in charCount) {
    if (charCount[char] > 1) {
      duplicates++;
    }
  }

  return duplicates;
}