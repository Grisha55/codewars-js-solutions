function decomp(n) {
  const res = [];

  for (let p = 2; p <= n; p++) {
    let isPrime = true;
    for (let i = 2; i * i <= p; i++) {
      if (p % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (!isPrime) continue;

    let count = 0;
    let power = p;
    while (power <= n) {
      count += Math.floor(n / power);
      power *= p;
    }

    res.push(count > 1 ? `${p}^${count}` : `${p}`);
  }

  return res.join(" * ");
}
