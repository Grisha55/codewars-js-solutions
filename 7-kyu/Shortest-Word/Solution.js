/**
 * @function findShort
 * @param {string} s
 * @returns {number}
 */

function findShort(s) {
  const sArr = s.split(' ');
  let count = sArr[0].length;

  for (const str of sArr) {
    if (count > str.length) {
      count = str.length;
    }
  }

  return count;
}
