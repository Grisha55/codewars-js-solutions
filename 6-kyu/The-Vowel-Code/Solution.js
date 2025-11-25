/**
 * @function encode
 * @param {string} string
 * @returns {string}
 */

function encode(string) {
  const chars = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let res = '';

  for (const char of string) {
    if (chars[char]) {
      res += chars[char];
    } else {
      res += char;
    }
  }
  return res;
}

/**
 * @function decode
 * @param {string} string
 * @returns {string}
 */

function decode(string) {
  const chars = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let res = '';

  for (const char of string) {
    if (chars[char]) {
      res += chars[char];
    } else {
      res += char;
    }
  }
  return res;
}
