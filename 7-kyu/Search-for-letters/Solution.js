function change(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';
  
  for (let i = 0; i < 26; i++) {
    if (string.includes(alphabet[i]) || string.includes(alphabet[i].toUpperCase())) {
      res += '1';
    } else {
      res += '0'
    }
  }
  
  return res;
}