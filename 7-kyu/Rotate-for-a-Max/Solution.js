/**
 * @function maxRot
 * @param {number} n
 * @returns {number}
 */

function maxRot(n) {
  let str = n.toString();
  let max = n;

  for (let i = 0; i < str.length; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    const rotatedNum = parseInt(str, 10);
    if (rotatedNum > max) {
      max = rotatedNum;
    }
  }

  return max;
}
