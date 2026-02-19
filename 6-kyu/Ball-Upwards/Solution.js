function maxBall(v0) {
  const g = 9.81;
  const vms = v0 * 1000 / 3600;
  
  let maxHeight = 0;
  let time = 0;
  
  for (let t = 0; ; t++) {
    const seconds = t / 10;
    const height = vms * seconds - 0.5 * g * seconds * seconds;
    
    if (height < maxHeight) {
      return time;
    }
    
    maxHeight = height;
    time = t;
  }
}