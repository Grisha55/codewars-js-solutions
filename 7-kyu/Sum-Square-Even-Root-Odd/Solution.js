const sumSquareEvenRootOdd = ns => {
  const newNs = [...ns].map((num) => num % 2 === 0 ? num ** 2 : Math.sqrt(num));
  const sum = newNs.reduce((acc, num) => acc + num, 0);
  return Math.round(sum * 100) / 100;
};