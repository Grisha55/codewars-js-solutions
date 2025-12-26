/**
 * @function balancedNum
 * @param {number} number
 * @returns {string}
 */

function balancedNum(number) {
  const numStr = number.toString();
  const len = numStr.length;

  if (len <= 2) return 'Balanced';

  const mid = Math.floor(len / 2);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < mid - (len % 2 === 0 ? 1 : 0); i++) {
    leftSum += parseInt(numStr[i], 10);
  }

  for (let i = mid + 1; i < len; i++) {
    rightSum += parseInt(numStr[i], 10);
  }

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}
