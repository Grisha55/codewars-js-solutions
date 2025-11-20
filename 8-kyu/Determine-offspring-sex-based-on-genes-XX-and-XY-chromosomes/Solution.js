/**
 * @function chromosomeCheck
 * @param {string} sperm
 * @returns {string}
 */

function chromosomeCheck(sperm) {
  switch (sperm) {
    case 'XY':
      return `Congratulations! You're going to have a son.`;
      break;
    case 'XX':
      return `Congratulations! You're going to have a daughter.`;
      break;
    default:
      return 'Error';
  }
}
