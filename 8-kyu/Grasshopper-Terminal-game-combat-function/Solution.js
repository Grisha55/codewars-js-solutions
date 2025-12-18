/**
 * @function combat
 * @param {number} health 
 * @param {number} damage
 * @returns {number} 
 */

function combat(health, damage) {
  return Math.max(0, health - damage);
}