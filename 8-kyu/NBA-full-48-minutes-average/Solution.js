function pointsPer48(ppg, mpg) {
  const res = (ppg / mpg) * 48;
  return res ? Number(res.toFixed(1)) : 0;
}
