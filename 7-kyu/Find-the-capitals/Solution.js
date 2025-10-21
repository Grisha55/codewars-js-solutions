/**
 * @function capitals
 * @param {string} word
 * @returns {number[]}
 */

var capitals = function (word) {
  let res = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      res.push(i);
    }
  }

  return res;
};
