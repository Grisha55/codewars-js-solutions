function insideOut(x) {
  const words = x.split(' ');
  const result = [];
  
  for (let word of words) {
    const len = word.length;
    const mid = Math.floor(len / 2);
    
    if (len % 2 === 0) {
      // Четная длина: разворачиваем обе половины
      const left = word.slice(0, mid).split('').reverse().join('');
      const right = word.slice(mid).split('').reverse().join('');
      result.push(left + right);
    } else {
      // Нечетная длина: средний символ остается на месте
      const left = word.slice(0, mid).split('').reverse().join('');
      const middle = word[mid];
      const right = word.slice(mid + 1).split('').reverse().join('');
      result.push(left + middle + right);
    }
  }
  
  return result.join(' ');
}