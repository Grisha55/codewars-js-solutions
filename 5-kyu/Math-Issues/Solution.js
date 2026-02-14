Math.floor = function(number) {
  return number - (number % 1);
};

Math.ceil = function(number) {
  const remainder = number % 1;
  return remainder === 0
    ? number
    : number - remainder + 1;
};

Math.round = function(number) {
  const remainder = number % 1;
  
  if (remainder >= 0.5) {
    return number - remainder + 1;
  }
  
  return number - remainder;
};
