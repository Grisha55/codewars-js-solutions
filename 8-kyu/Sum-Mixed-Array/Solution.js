/**
 * @function sumMix
 * @param {[*]} x
 * @returns {number}
 */

function sumMix(x) {
  let sum = 0;

  x.forEach((num) => {
    sum += Number(num);
  });

  return sum;
}
