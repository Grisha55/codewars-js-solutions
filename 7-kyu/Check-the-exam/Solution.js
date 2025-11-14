/**
 * @function checkExam
 * @param {string[]} array1
 * @param {string[]} array2
 * @returns {number}
 */

function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array2[i] === '') {
      score += 0;
    } else {
      score--;
    }
  }
  if (score < 0) {
    return 0;
  }
  return score;
}
