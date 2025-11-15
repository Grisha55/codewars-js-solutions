/**
 * @function solve
 * @param {string} s
 * @returns {string}
 */

function solve(s) {
  let lower = 0;
  let upper = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      lower++;
    } else {
      upper++;
    }
  }

  if (lower > upper || lower === upper) {
    return s.toLowerCase();
  } else if (lower < upper) {
    return s.toUpperCase();
  }
}
