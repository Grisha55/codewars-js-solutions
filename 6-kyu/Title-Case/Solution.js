/**
 * @function titleCase
 * @param {string} title
 * @param {string} minorWords
 * @returns {string}
 */

function titleCase(title, minorWords) {
  if (!title) return '';
  const minors = minorWords ? minorWords.toLocaleLowerCase().split(' ') : [];
  const words = title.split(' ');

  const result = words.map((word, index) => {
    if (index === 0) {
      return capitalizeWord(word);
    }

    if (minors.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }

    return capitalizeWord(word);
  });

  return result.join(' ');
}

function capitalizeWord(word) {
  if (!word) return '';
  return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();
}
