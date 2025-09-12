/**
 * @function order
 * @param {string} words
 * @returns {string}
 */

function order(words) {
  if (words.length === 0) return '';

  const wordsArr = words.split(' ').sort();
  const sortedArr = wordsArr.sort((word1, word2) => {
    const a = word1.match(/\d/)[0];
    const b = word2.match(/\d/)[0];

    return a - b;
  });

  return sortedArr.join(' ');
}
