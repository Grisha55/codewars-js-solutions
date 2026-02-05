function removeParentheses(s){
  let res = '';
  let bracket = 0;
  
  for (const char of s) {
    if (char === '(') {
      bracket++;
    } else if (char === ')') {
      bracket--;
    } else if (bracket === 0) {
      res += char;
    }
  }
  
  return res; 
}