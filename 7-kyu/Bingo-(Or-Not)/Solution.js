function bingo(a) {
  let wordFromArr = '';
  
  for (const num of a) {
    const char = String.fromCharCode(num + 64);
    console.log(char);
    wordFromArr += char;
  }
  
  for (const char of 'BINGO') {
    if (!wordFromArr.includes(char)) {
      return 'LOSE';
    }
  }
  
  return 'WIN';
}