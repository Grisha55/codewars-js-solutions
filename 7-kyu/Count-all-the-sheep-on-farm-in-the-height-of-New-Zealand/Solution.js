function lostSheep(friday,saturday,total){
  const sum = [...friday, ...saturday].reduce((acc, num) => acc + num, 0);
  
  return total - sum;
}