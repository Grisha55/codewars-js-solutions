/**
 * @function countSmileys
 * @param {string[]} arr
 * @returns {number}
 */

function countSmileys(arr) {
  if (arr.length === 0) return 0;

  const validEyes = [':', ';'];
  const validNoses = ['-', '~'];
  const validMouths = [')', 'D'];
  let count = 0;

  for (let face of arr) {
    if (face.length !== 2 && face.length !== 3) continue;
    if (!validEyes.includes(face[0])) continue;
    if (!validMouths.includes(face[face.length - 1])) continue;
    if (face.length === 3 && !validNoses.includes(face[1])) continue;

    count++;
  }

  return count;
}
