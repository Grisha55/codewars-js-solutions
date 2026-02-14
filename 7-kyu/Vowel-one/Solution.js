function vowelOne(s){
  const vowels = 'aeiou';
  let res = '';
  
  for (let char of s) {
    if (vowels.includes(char.toLowerCase())) {
      res += '1';    
    } else {
      res += '0';
    }
  }
  
  return res;
}