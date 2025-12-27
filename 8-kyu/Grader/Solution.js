/**
 * @function grader
 * @param {number} score
 * @returns {string}
 */

function grader(score) {
  if (score > 1 || score < 0.6) {
    return 'F';
  } else if (score >= 0.9) {
    return 'A';
  } else if (score >= 0.8) {
    return 'B';
  } else if (score >= 0.7) {
    return 'C';
  } else {
    return 'D';
  }
}
