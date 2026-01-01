function solution(value) {
  const strValue = value.toString();

  if (strValue.length > 5) {
    return value;
  }

  let zeroes = '';
  const max = 5 - strValue.length;
  for (let i = 0; i < max; i++) {
    zeroes += '0';
  }

  return `Value is ${zeroes}${value}`;
}
