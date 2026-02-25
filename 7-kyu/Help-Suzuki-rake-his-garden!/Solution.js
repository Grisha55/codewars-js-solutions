function rakeGarden(garden) {
  const arr = garden.split(' ');
  let res = [];
  
  for (const el of arr) {
    if (el !== 'gravel' && el !== 'rock') {
      res.push('gravel');
    } else {
      res.push(el);
    }
  }
  return res.join(' ');
}