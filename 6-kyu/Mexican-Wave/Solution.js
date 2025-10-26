/**
 * @function wave
 * @param {string} str
 * @returns {string[]}
 */

function wave(str) {
  if (str.length === 0) return [];

  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    let waveStr =
      str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
    res.push(waveStr);
  }
  return res;
}
