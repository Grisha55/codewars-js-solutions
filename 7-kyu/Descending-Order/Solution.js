/**
 * @function descendingOrder
 * @param {number} n
 * @returns {number}
 */

function descendingOrder(n) {
  let nums = [];
  let resStr = "";

  for (const num of String(n)) {
    nums.push(Number(num));
  }

  const sortedNums = nums.sort((num1, num2) => num2 - num1);
  for (const num of sortedNums) {
    resStr += String(num);
  }

  return Number(resStr);
}
