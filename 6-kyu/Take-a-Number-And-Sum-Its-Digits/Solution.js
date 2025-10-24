/**
 * @function sumDigPow
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

function sumDigPow(a, b) {
  let res = [];
  for (let i = a; i < b; i++) {
    if (checkForSpecial(i)) {
      res.push(i);
    }
  }

  return res;
}

/**
 * @function powNumber
 * @param {number} num
 * @returns {boolean}
 */

function checkForSpecial(num) {
  let sum = 0;
  let powNum = 1;

  for (let charNum of String(num)) {
    sum += Math.pow(Number(charNum), powNum);
    powNum++;
  }
  return num === sum;
}
