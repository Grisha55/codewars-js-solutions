/**
 * @function encryptThis
 * @param {string} text
 * @returns {string}
 */

var encryptThis = function (text) {
  return text
    .split(' ')
    .map((word) => {
      if (word.length === 0) return '';

      const first = word.charCodeAt(0);

      if (word.length === 1) return String(first);
      if (word.length === 2) return first + word[1];

      // Меняем местами второй и последний символы
      return first + word[word.length - 1] + word.slice(2, -1) + word[1];
    })
    .join(' ');
};
