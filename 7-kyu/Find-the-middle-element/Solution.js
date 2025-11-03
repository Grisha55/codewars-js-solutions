/**
 * @function gimme
 * @param {number[]} triplet
 * @returns {number}
 */

function gimme(triplet) {
  let min = triplet[0];
  let max = triplet[0];

  for (let i = 0; i < triplet.length; i++) {
    if (min > triplet[i]) {
      min = triplet[i];
    } else if (max < triplet[i]) {
      max = triplet[i];
    }
  }

  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== min && triplet[i] !== max) {
      return i;
    }
  }

  return -1;
}
