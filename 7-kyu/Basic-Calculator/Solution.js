function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return null;
      return num1 / num2;
    default:
      return null;
  }
}
