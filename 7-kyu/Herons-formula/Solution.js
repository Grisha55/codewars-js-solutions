function heron(a, b, c) {
  const s = (a + b + c) / 2;
  const res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return res;
}