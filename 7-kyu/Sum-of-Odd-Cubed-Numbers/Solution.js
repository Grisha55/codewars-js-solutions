/**
 * @function cubeOdd
 * @param {number[]} arr
 * @returns {number}
 */

function cubeOdd(arr) {
  for (const num of arr) {
    if (typeof num !== 'number') {
      return undefined;
    }
  }

  let sum = 0;
  for (const num of arr) {
    if (num % 2 !== 0) {
      sum += Math.pow(num, 3);
    }
  }
  return sum;
}
