function createArrayOfTiers(num) {
  const res = [];
  const strNum = num.toString();
  
  for (let i = 1; i <= strNum.length; i++) {
    res.push(strNum.slice(0, i));
  }
  
    return res;
}