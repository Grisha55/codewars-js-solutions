function calculate(str) {
  let res = 0;
  let curNum = '';
  let operation = 'plus';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char >= '0' && char <= '9') {
      curNum += char;
      continue;
    }
    
    if (str.startsWith('plus', i)) {
      const num = Number(curNum);
      res = operation === 'plus' ? res + num : res - num;
      
      curNum = '';
      operation = 'plus';
      i += 3; // plus = 4 символа
    }
    
    else if (str.startsWith('minus', i)) {
      const num = Number(curNum);
      res = operation === 'plus' ? res + num : res - num;
      
      curNum = '';
      operation = 'minus';
      i += 4; // minus = 5 символов
    }
  }
  
  // последнее число
  const lastNum = Number(curNum);
  res = operation === 'plus' ? res + lastNum : res - lastNum;
  
  return String(res);
}