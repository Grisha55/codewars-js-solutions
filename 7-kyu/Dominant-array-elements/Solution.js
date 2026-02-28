function solve(arr) {
  const res = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isGreater = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        isGreater = false;
        break;
      }
    }
    
    if (isGreater && res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  
  return res;
}