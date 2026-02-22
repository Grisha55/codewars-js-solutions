function broken(x){
  let res = '';
  for (const char of x) {
    if (char === '0') {
      res += '1';
    } else {
      res += '0';
    }
  }
  
  return res;
}