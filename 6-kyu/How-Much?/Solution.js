function howMuch(m, n) {
  const res = [];
  const start = Math.min(m, n);
  const end = Math.max(m, n);
  
  for (let f = start; f <= end; f++) {
    if ((f - 1) % 9 === 0 && (f - 2) % 7 === 0) {
      const c = (f - 1) / 9;
      const b = (f - 2) / 7;
      
      if (c > 0 && b > 0) {
        res.push([
          `M: ${f}`,
          `B: ${b}`,
          `C: ${c}`
        ]);
      }
    }
  }
  
  return res;
}