/**
 * @function highestRank
 * @param {number[]} arr
 * @returns {number}
 */

function highestRank(arr) {
  const frequencyMap = {};

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  let maxFrequency = 0;
  let highestNumber = -Infinity;

  for (const num in frequencyMap) {
    const frequency = frequencyMap[num];
    const number = Number(num);

    if (
      frequency > maxFrequency ||
      (frequency === maxFrequency && number > highestNumber)
    ) {
      maxFrequency = frequency;
      highestNumber = number;
    }
  }

  return highestNumber;
}
