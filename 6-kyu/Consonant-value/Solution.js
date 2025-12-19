/**
 * @function solve
 * @param {string} s
 * @returns {number}
 */

function solve(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let max = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (vowels.has(char)) {
      max = Math.max(max, current);
      current = 0;
    } else {
      current += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
  }

  return Math.max(max, current);
}
