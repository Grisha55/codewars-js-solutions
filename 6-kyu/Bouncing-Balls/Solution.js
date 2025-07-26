/**
 * @function bouncingBall
 * @param {number} h 
 * @param {number} bounce 
 * @param {number} window 
 * @returns {number}
 */

function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  
  let count = 0;
  let currentHeight = h;
  
  while (currentHeight > window) {
    count ++;
    currentHeight *= bounce;
    if (currentHeight > window) {
      count ++;
    }
  }
  
  return count;
}