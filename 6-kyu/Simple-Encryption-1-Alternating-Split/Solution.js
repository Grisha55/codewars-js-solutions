/**
 * @function encrypt
 * @param {string} text
 * @param {number} n
 * @returns {string}
 */

function encrypt(text, n) {
  if (!text || text.length === 0 || n <= 0) return text;

  let result = text;

  for (let i = 0; i < n; i++) {
    let odd = '';
    let even = '';

    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 1) {
        odd += result[j];
      } else {
        even += result[j];
      }
    }

    result = odd + even;
  }

  return result;
}

/**
 * @function decrypt
 * @param {string} encryptedText
 * @param {number} n
 * @returns {string}
 */

function decrypt(encryptedText, n) {
  if (!encryptedText || encryptedText.length === 0 || n <= 0)
    return encryptedText;

  let result = encryptedText;
  const mid = Math.floor(result.length / 2);

  for (let i = 0; i < n; i++) {
    let decrypted = '';
    const odds = result.slice(0, mid);
    const evens = result.slice(mid);

    for (let j = 0; j < Math.max(odds.length, evens.length); j++) {
      if (j < evens.length) decrypted += evens[j];
      if (j < odds.length) decrypted += odds[j];
    }

    result = decrypted;
  }

  return result;
}
