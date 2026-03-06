function switcher(x){
  const map = {
    '29': ' ',
    '28': '?',
    '27': '!'
  };
  
  for (let i = 1; i <= 26; i++) {
    map[i.toString()] = String.fromCharCode(123 - i);
  }
  
  return x.map(num => map[num]).join('');
}