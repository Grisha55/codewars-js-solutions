/**
 * @function evaporator
 * @param {number} content
 * @param {number} evapPerDay
 * @param {number} threshold
 * @returns {number}
 */

function evaporator(content, evapPerDay, threshold) {
  let days = 0;
  const limit = content * (threshold / 100);

  while (content > limit) {
    content -= content * (evapPerDay / 100);
    days += 1;
  }

  return days;
}
