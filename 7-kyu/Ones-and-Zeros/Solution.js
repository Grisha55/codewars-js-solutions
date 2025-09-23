/**
 * @function binaryArrayToNumber
 * @param {number []} arr
 * @returns {number}
 */

function binaryArrayToNumber(arr) {
  let finalSum = 0;
  const reversedArr = arr.reverse();

  for (let i = 0; i < reversedArr.length; i++) {
    finalSum += reversedArr[i] * 2 ** i;
  }

  return finalSum;
}
