function jumpingNumber(n){
  if (n <= 10) return 'Jumping!!';
  
  const strN = n.toString();
  
  for (let i = 1; i < strN.length; i++) {
    if (Math.abs(strN[i] - strN[i - 1]) > 1 || strN[i] === strN[i - 1]) {
      return 'Not!!';
    }
  }
  
  return 'Jumping!!';
}