/**
 * @function reverseWords
 * @param {string} str
 * @returns {string}
 */

function reverseWords(str) {
  const strArr = str.split(' ');
  let res = [];

  strArr.forEach((str) => {
    let line = '';
    for (let i = str.length - 1; i >= 0; i--) {
      line += str[i];
    }
    res.push(line);
  });

  return res.join(' ');
}
