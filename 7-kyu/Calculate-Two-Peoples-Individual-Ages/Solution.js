function getAges(sum,difference){
  if (sum < 0 || difference < 0) return null;
  
  const oldAge = sum / 2 + difference / 2;
  const smallAge = sum - oldAge;
  
  if (smallAge < 0) return null;
  
  return [oldAge, smallAge];
};