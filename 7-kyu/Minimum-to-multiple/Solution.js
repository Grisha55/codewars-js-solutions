function minimum(a, x) {
    const remainder = a % x;

    if (remainder === 0) return 0;

    const up = x - remainder;
    const down = remainder;

    return Math.min(up, down);
}
