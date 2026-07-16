function fib(n) {
    if (n === 0) return 0n;

    const absN = n < 0 ? -n : n;
    const [a, _] = fastFib(absN);

    if (n < 0 && absN % 2 === 0) return -a;

    return a;
}

function fastFib(n) {
    if (n === 0) return [0n, 1n];

    const [a, b] = fastFib(n >> 1);
    const c = a * (2n * b - a);
    const d = a * a + b * b;

    if (n % 2 === 0) return [c, d];

    return [d, c + d];
}
