/**
 * @function comp
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {boolean}
 */

function comp(array1, array2) {
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;

  const count1 = {};
  const count2 = {};

  for (const num of array1) {
    count1[num] = (count1[num] || 0) + 1;
  }

  for (const num of array2) {
    count2[num] = (count2[num] || 0) + 1;
  }

  for (const num in count1) {
    const square = num * num;
    if (count1[num] !== count2[square]) {
      return false;
    }
  }
  return true;
}
