/**
 * @function upArray
 * @param {number[]} arr
 * @returns {number[]}
 */

function upArray(arr) {
  if (arr.length === 0) return null;

  for (const digit of arr) {
    if (digit < 0 || digit > 9) return null;
  }

  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const sum = arr[i] + carry;
    if (sum === 10) {
      arr[i] = 0;
      carry = 1;
    } else {
      arr[i] = sum;
      carry = 0;
      break;
    }
  }

  if (carry === 1) {
    arr.unshift(1);
  }

  return arr;
}
