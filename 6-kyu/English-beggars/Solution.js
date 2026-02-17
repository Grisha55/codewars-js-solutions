function beggars(values, n){
  if (n === 0) return [];
  
  if (n > values.length) {
    return higherArr(n, values);
  }
  
  let res = [];
  let beggar;
  
  for (let i = 0; i < n; i++) {
    beggar = values[i];
    for (let j = i+n; j < values.length; j += n) {
      beggar += values[j];
    }
    res.push(beggar);
  }
  
  return res;
}

const higherArr = (n, arr) => {
  const zerosCount = n - arr.length;
  let res = [...arr];
  
  if (zerosCount > 0) {
    for (let i = 0; i < zerosCount; i++) {
      res.push(0);
    }
  }
  
  return res;
}