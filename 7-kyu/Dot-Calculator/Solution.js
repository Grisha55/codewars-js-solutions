function dotCalculator(equation) {
  let firstNum = 0;
  let secondNum = 0;
  let operator = '';
  
  for (const el of equation) {
    if (el === '.' && operator === '') {
      firstNum++;
    } else if (el !== '.' && el !== ' ') {
      operator += el;
    } else if (el === '.' && operator.length > 0) {
      secondNum++;
    }
  }
  
  let res;;
  
  switch (operator) {
    case '+':
      res = firstNum + secondNum;
      break;
    case '-':
      res = firstNum - secondNum;
      break
    case '*':
      res = firstNum * secondNum;
      break;
    case '//':
      res = Math.floor(firstNum / secondNum);
      break;
    default:
      throw new Error('Unknown operator')
  }
  
  if (res >= 0) {
    let str = '';
    for (let i = 0; i < res; i++) {
      str += '.';
    }
    return str;
  }
    return '';
}