/**
 * @function revrot
 * @param {string} str
 * @param {number} sz
 * @returns {string}
 */

function revrot(str, sz) {
  if (sz <= 0 || str.length === 0 || sz > str.length) return '';

  const chunks = [];
  for (let i = 0; i + sz <= str.length; i += sz) {
    chunks.push(str.slice(i, i + sz));
  }

  const result = chunks
    .map((chunk) => {
      const sum = chunk.split('').reduce((acc, d) => acc + Number(d), 0);

      if (sum % 2 === 0) {
        return chunk.split('').reverse().join('');
      } else {
        return chunk.slice(1) + chunk[0];
      }
    })
    .join('');

  return result;
}
