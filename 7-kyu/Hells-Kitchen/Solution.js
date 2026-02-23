function gordon(a){
  let res = '';
  
  for (const char of a) {
    if (char === 'a' || char === 'A') {
      res += '@';
    } else if ('aeiou'.includes(char)) {
      res += '*';
    } else if (char === ' ') {
      res += '!!!! ';
    } else {
      res += char.toUpperCase();
    }
  }
  
  return res.trim() + '!!!!';
}