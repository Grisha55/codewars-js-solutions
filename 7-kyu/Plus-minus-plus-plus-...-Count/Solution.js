function catchSignChange(arr) {
  if (arr.length === 0) return 0;
  
  let curSign;
  let prevSign;
  let changes = 0;
  
  for (let i = 1; i < arr.length; i++) {
    curSign = arr[i] >= 0 ? 1 : 0;
    prevSign = arr[i - 1] >= 0 ? 1 : 0;
    
    if (curSign !== prevSign) {
      changes++;
    }  
  }
  
  return changes;
}