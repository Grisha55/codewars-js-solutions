/**
 * @function shark
 * @param {number} pontoonDistance
 * @param {number} sharkDistance
 * @param {number} youSpeed
 * @param {number} sharkSpeed
 * @param {boolean} dolphin
 */

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);
  const myTime = pontoonDistance / youSpeed;

  return myTime < sharkTime ? 'Alive!' : 'Shark Bait!';
}
