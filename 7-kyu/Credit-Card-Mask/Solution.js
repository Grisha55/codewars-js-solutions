/**
 * @function maskify
 * @param {string} cc
 * returns {string}
*/
function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  }
  
  const numWithMask = '#'.repeat(cc.length - 4) + cc.slice(-4);
  return numWithMask;
}