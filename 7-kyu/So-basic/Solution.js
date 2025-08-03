/**
 * @function convertBase20ToDecimal
 * @param {string} init
 * @returns {number}
 */

function convertBase20ToDecimal(init) {
  // Преобразуем строку в целое число (20 -> интерпретировать как двадцатиричное)
  const result = parseInt(init, 20);
  return isNaN(result) ? -1 : result;
}