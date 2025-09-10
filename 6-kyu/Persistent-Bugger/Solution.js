/**
 * @function persistence
 * @param {number} num
 * @returns {number}
 */

function persistence(num) {
  if (num < 10) return 0;
  let count = 0;
  let currNum = num;
  let multiply = 1;

  while (currNum >= 10) {
    for (const el of String(currNum)) {
      multiply *= Number(el);
    }
    currNum = multiply;
    multiply = 1;
    count++;
  }

  return count;
}
