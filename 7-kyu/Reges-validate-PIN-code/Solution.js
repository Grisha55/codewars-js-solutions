/**
 * @function validatePIN
 * @param {string} pin
 * @returns {boolean}
 */

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) return false;

  for (let char of pin) {
    if (char < '0' || char > '9') return false;
  }

  return true;
}
