/**
 * @function sayHello
 * @param {string[]} name
 * @param {string} city
 * @param {string} state
 * @returns {string}
 */

function sayHello(name, city, state) {
  const fullName = name.join(' ');
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}
