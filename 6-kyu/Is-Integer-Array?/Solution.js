function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return true;
  
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    
    if (typeof el !== 'number' || isNaN(el) || !isFinite(el)) {
      return false;
    }
    
    if (el % 1 !== 0) {
      return false;
    }
  }
  
  return true;
}