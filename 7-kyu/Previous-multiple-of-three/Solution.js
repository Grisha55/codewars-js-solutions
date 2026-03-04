const prevMultOfThree = n => {
  if (n < 12) return null;
  
  while (n % 3 !== 0) {
    n = +String(n).slice(0, -1);
    if (n < 3) {
      return null;
    }
  }
    
  return n;
}