function maxBisectors(n) {
    const a = Math.floor(n / 2);
    const b = n - a;
    return a * b;
}
