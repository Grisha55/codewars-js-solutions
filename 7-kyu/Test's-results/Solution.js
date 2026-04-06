function testResult(array) {
  const avg = Math.round([...array].reduce((acc, num) => acc + num, 0) / array.length * 1000) / 1000;
  const marks = {'h': 0, 'a': 0, 'l': 0};
  
  for (const mark of array) {
    if (mark >= 9) {
      marks['h'] = (marks['h'] || 0) + 1;
    } else if (mark >= 7) {
      marks['a'] = (marks['a'] || 0) + 1;
    } else {
      marks['l'] = (marks['l'] || 0) + 1;
    }
  }
  
  if (avg >= 9.4) {
    return [avg, marks, 'They did well'];
  }
  
  return [avg, marks];
}