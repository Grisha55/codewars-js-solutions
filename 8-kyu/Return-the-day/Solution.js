/**
 * @function whatday
 * @param {number} num
 * @returns {string}
 */

function whatday(num) {
  if (num < 1 || num > 7) return 'Wrong, please enter a number between 1 and 7';

  switch (num) {
    case 1:
      return 'Sunday';
      break;
    case 2:
      return 'Monday';
      break;
    case 3:
      return 'Tuesday';
      break;
    case 4:
      return 'Wednesday';
      break;
    case 5:
      return 'Thursday';
      break;
    case 6:
      return 'Friday';
      break;
    case 7:
      return 'Saturday';
      break;
  }
}
