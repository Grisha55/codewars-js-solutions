function hello(name) {
  if (!name || name.length === 0) return 'Hello, World!';
  return 'Hello,' + ' ' + convertName(name);
}

/**
 *
 * @param {string} name
 * @returns {string}
 */

function convertName(name) {
  const lower = name.toLowerCase();
  const res = lower[0].toUpperCase() + lower.slice(1);
  return res + '!';
}
