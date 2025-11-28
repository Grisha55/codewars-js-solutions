/**
 * @function vowelIndices
 * @param {string} word
 * @returns {number[]}
 */

function vowelIndices(word) {
  let res = [];
  const vowels = 'aeiouyAEIOUY';

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      res.push(i + 1);
    }
  }

  return res;
}
