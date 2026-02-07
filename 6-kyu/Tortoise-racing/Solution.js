function race(v1, v2, g) {
   if (v1 >= v2) return null;
  
  const totalSeconds = Math.floor((g * 3600) / (v2 - v1));
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return [hours, minutes, seconds];
}