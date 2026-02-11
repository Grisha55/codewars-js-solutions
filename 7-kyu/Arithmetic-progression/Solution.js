function arithmeticSequenceElements(a, d, n) {
  let res = '';
  let curNum = a;
  
  for (let i = 0; i < n; i++) {
    res += `${curNum}, `;
    curNum += d;
  }
  
	return res.slice(0, res.length - 2);
}