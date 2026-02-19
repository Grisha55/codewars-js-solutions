function twoDecimalPlaces(number) {
  const res = Math.trunc(number * 100) / 100;
  
  return res;
}