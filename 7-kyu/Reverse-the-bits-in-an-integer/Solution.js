function reverseBits(n) {
  const binary = n.toString(2).split('').reverse().join('');
  const number = parseInt(binary, 2);
  return number;
}