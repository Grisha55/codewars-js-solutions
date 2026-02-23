function freqSeq(str, sep) {
  const count = {};
  
  for (let char of str) {
    count[char] = (count[char] || 0) + 1; 
  }
  
  let res = '' ;
  
  for (const char of str) {
    res += count[char] + sep;   
  }
  
  return res.slice(0, -1);
}
