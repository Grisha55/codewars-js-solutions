function solve(a, b) {
    const primeFactors = new Set();
    let n = b;

    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            primeFactors.add(i);
            n /= i;
        }
    }
    if (n > 1) primeFactors.add(n);

    for (const p of primeFactors) {
        if (a % p !== 0) return false;
    }

    return true;
}
