/**
 * @function pickIt
 * @param {number[]} arr
 * @returns {number[[]]}
 */

function pickIt(arr) {
  let odd = [],
    even = [];

  for (const num of arr) {
    if (num % 2 !== 0) {
      odd.push(num);
    } else {
      even.push(num);
    }
  }

  return [odd, even];
}
