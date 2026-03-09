function howManyTimes(annualPrice, individualPrice) {
  if (individualPrice === 0) return Infinity;
  if (Math.floor(annualPrice / individualPrice) * individualPrice === annualPrice) return Math.floor(annualPrice / individualPrice);
  return Math.floor(annualPrice / individualPrice) + 1;
}