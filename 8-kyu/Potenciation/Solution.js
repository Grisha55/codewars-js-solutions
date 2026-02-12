function power(x,y){
  if (x === 0 && y === 0) return 1;
  
  let res = 1;
  
  for (let i = 0; i < y; i++) {
    res *= x;
  } 
  
  return res;
}