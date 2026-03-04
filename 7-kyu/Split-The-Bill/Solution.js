function splitTheBill(x) {
  const values = Object.values(x);
  const aver = values.reduce((acc, av) => acc + av, 0);
  const cur = aver / values.length;
  const res = {};
  
  for (person in x) {
    const resPrice = x[person] - cur;
    res[person] = +(resPrice.toFixed(2));  
  }
  
  return res;
}