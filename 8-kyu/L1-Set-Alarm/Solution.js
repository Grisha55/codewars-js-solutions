/**
 * @function setAlarm
 * @param {boolean} employed
 * @param {boolean} vacation
 * @returns {boolean}
 */

function setAlarm(employed, vacation) {
  if (employed !== vacation && employed === true) {
    return true;
  }
  return false;
}
