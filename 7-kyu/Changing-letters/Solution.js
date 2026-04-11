function swap (string) {
  const vowels = 'aeiou';
  let res = '';
  
  for (let c of string) {
    if (vowels.includes(c)) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }
  
  return res;
}