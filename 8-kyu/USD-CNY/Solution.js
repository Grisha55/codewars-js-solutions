/**
 * @function usdcny
 * @param {number} usd
 * @returns {string}
*/

function usdcny(usd) {
  const cny = (usd * 6.75).toFixed(2);
  return String(cny) + " Chinese Yuan";
}