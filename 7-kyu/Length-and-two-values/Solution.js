function alternate(n, firstValue, secondValue){
  let res = [];
  
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      res.push(firstValue);
    } else {
      res.push(secondValue);
    }
  }
  
  return res;
}