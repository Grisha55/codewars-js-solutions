/**
 @function isIsogram
 @param {string} str
 @returns {bool}
*/

function isIsogram(str){
  if (!str) {
    return true;
  }
  const seen = new Set();
  const lowerStr = str.toLowerCase();
  
  for (const c of lowerStr) {
    if (seen.has(c)) {
      return false;
    }
    seen.add(c);
  }
  
  return true;
}
