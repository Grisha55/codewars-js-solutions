/**
 * @function maxDiff
 * @param {number[]} list
 * @returns {number}
 */

function maxDiff(list) {
  if (list.length < 2) return 0;
  const sortedList = [...list].sort((a, b) => a - b);
  return sortedList[sortedList.length - 1] - sortedList[0];
}
