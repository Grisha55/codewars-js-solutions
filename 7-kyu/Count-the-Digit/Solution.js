/**
 * @function nbDig
 * @param {number} n
 * @param {number} d
 * @returns {number}
 */

function nbDig(n, d) {
  let square = 0;
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let strSquare = (i * i).toString();
    if (strSquare.includes(d)) {
      for (let char of strSquare) {
        if (char == d) {
          count++;
        }
      }
    }
  }

  return count;
}
