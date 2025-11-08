/**
 * @function checkCoupon
 * @param {string} enteredCode
 * @param {string} correctCode
 * @param {string} currentDate
 * @param {string} expirationDate
 * @returns {boolean}
 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false;

  const curr = new Date(currentDate);
  const exp = new Date(expirationDate);

  return curr <= exp;
}
