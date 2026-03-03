function remove (string) {
  const arr = string.split(' ');
  let res = [];
  let count;
  
  for (const word of arr) {
    count = 0;
    for (const char of word) {
      if (char === '!') {
        count++;
      }
    }
    if (count !== 1) {
      res.push(word);
    }
  }
  
  return res.join(' ');
}