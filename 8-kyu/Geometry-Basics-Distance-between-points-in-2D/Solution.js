function distanceBetweenPoints(a, b) {
  const firstLine = Math.abs(a.x - b.x);
  const secondLine = Math.abs(b.y - a.y);
  const res = Math.sqrt(firstLine ** 2 + secondLine ** 2);
  return res;
}
