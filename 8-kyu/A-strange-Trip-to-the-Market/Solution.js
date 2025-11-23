/**
 * @function isLochNessMonster
 * @param {string} s
 * @returns {boolean}
 */

function isLochNessMonster(s) {
  const str = s.toLowerCase();

  return (
    str.includes('tree fiddy') ||
    str.includes('three fifty') ||
    str.includes('3.50')
  );
}
