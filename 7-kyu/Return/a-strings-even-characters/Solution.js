function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  
  let res = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      res.push(string[i]);
    }
  }
  
  return res;
}