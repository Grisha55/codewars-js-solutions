function flyBy(lamps, drone){
  const lampsLength = lamps.length;
  const dronePath = drone.length;
  
  const lampsOnCount = Math.min(dronePath, lampsLength);
  
  return 'o'.repeat(lampsOnCount) + 'x'.repeat(lampsLength - lampsOnCount);
}