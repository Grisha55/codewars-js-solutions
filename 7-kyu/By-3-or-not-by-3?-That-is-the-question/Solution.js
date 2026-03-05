function divisibleByThree(str){
  let sum = str.split('').map((s) => Number(s)).reduce((acc, num) => acc + num, 0);
  
  while (sum > 0) {
    sum -= 3;
  }
  
  return sum === 0;
}