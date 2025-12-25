/**
 * @function validateHello
 * @param {string} greetings
 * @returns {boolean}
 */

function validateHello(greetings) {
  const strs = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  greetings = greetings.toLowerCase();

  for (let str of strs) {
    if (greetings.includes(str)) {
      return true;
    }
  }

  return false;
}
