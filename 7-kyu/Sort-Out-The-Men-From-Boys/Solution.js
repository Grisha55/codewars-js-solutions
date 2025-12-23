/**
 * @function menFromBoys
 * @param {number[]} arr
 * @returns {number[]}
 */

function menFromBoys(arr) {
  const evenSet = new Set();
  const oddSet = new Set();
  
  arr.forEach(num => {
    if (num % 2 === 0) {
      evenSet.add(num);
    } else {
      oddSet.add(num);
    }
  });
  
  const men = Array.from(evenSet).sort((a, b) => a - b);
  const boys = Array.from(oddSet).sort((a, b) => b - a);
  
  return [...men, ...boys];
}
