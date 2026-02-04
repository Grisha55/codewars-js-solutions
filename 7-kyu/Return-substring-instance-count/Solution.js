function solution(fullText, search) {
  let count = 0;
  let len = search.length;
  
  for (let i = 0; i <= fullText.length - len; i++) {
    if (fullText.substring(i, i + len) === search) {
      count ++;
      i += len - 1
    }
  }
  
  return count;
}