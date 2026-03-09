function solve(a,b){
  let res = '';
  const setA = new Set(a);
  const setB = new Set(b);
  
  for (const char of a) {
    if (!setB.has(char)) {
      res += char;
    }
  }
  
  for (const char of b) {
    if (!setA.has(char)) {
      res += char;
    }
  }
  
  return res;
};