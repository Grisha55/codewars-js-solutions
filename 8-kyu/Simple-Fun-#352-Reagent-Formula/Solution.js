function isValid(formula){
 const set = new Set(formula);
  
  if (set.has(1) && set.has(2)) {
    return false;
  }
  
  if (set.has(3) && set.has(4)) {
    return false;
  }
  
  if (set.has(5) !== set.has(6)) {
    return false;
  }
  
  if (!set.has(7) && !set.has(8)) {
    return false;
  }
  
  return true;
}