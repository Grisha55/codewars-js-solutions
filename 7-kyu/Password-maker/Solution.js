function makePassword(phrase) {
  const phrases = phrase.split(' ');
  let res = '';
  
  for (const str of phrases) {
    if (str[0] === 'O' || str[0] === 'o') {
      res += '0';
    } else if (str[0] === 'S' || str[0] === 's') {
      res += '5';
    } else if (str[0] === 'I' || str[0] === 'i') {
      res += '1';
    } else {
      res += str[0];
    }
  }
  
  return res;
}