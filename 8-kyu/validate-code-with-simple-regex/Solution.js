/**
 * @function validateCode
 * @param {number} code
 * @returns {boolean}
 */

function validateCode(code) {
  const strCode = code.toString();

  if (strCode[0] === '1' || strCode[0] === '2' || strCode[0] === '3') {
    return true;
  }

  return false;
}
