/**
 * @function greet
 * @param {string} name
 * @param {string} owner
 * @returns {string}
 */

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
