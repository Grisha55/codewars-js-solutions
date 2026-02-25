function countLettersAndDigits(input) {
  let count = 0;
  
  for (let char of input) {
    const lowerChar = char.toLowerCase();
    if ('a' <= lowerChar && lowerChar <= 'z' || '0' <= lowerChar && lowerChar <= '9') {
      count++;
    }
  }
  
  return count;
}