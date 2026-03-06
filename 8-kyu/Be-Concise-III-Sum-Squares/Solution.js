function sumSquares(array) {
  
  return [...array].map((num) => num ** 2).reduce((acc, num) => acc + num, 0);
}