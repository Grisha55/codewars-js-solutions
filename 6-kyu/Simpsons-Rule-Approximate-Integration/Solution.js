function simpson(n) {
    const a = 0;
    const b = Math.PI;
    const h = (b - a) / n;
    const f = (x) => 1.5 * Math.pow(Math.sin(x), 3);
    let sum = f(a) + f(b);
    for (let i = 1; i <= n / 2; i++) {
        const x = a + (2 * i - 1) * h;
        sum += 4 * f(x);
    }
    for (let i = 1; i < n / 2; i++) {
        const x = a + 2 * i * h;
        sum += 2 * f(x);
    }
    return ((b - a) / (3 * n)) * sum;
}
